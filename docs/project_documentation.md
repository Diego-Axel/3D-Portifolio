# 🚀 Portfólio 3D Iterativo - Documentação do Projeto

Bem-vindo à documentação oficial do **3D Portfolio**. Este documento detalha a arquitetura, as tecnologias utilizadas, a estrutura do projeto e os fluxos de renderização do ambiente 3D dinâmico, garantindo escalabilidade e facilidade de manutenção.

---

## 📌 1. Visão Geral

O projeto é um **Portfólio Web Interativo** que utiliza renderização 3D em tempo real combinada com animações baseadas em rolagem (scroll-tied animations). O principal objetivo é proporcionar uma experiência de navegação criativa, imersiva e de altíssimo desempenho, exibindo componentes gráficos flutuantes atrás da interface de usuário (UI) principal.

### Principais Funcionalidades:
- **Cena 3D Imersiva:** Diversas primitivas geométricas (Cube, Sphere, Torus, Dodecahedron, Icosahedron) renderizadas com propriedades físicas de iluminação.
- **Scroll Parallax Dinâmico:** Os objetos 3D e a câmera reagem com velocidades e magnitudes diferentes perante o scroll da página, através do sistema de `ScrollControls`.
- **UI Sobreposta:** Camada de apresentação sobre o Canvas 3D que exibe informações do portfólio de forma responsiva.
- **Loading Screen:** Gestão inteligente do tempo de carregamento inicial para exibir a cena apenas quando fluida.

---

## 🛠️ 2. Stack Tecnológica

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema React para web 3D:

| Tecnologia                  | Propósito                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------- |
| **React 18**                | Biblioteca base de renderização de interface. (Usamos a versão 18 para estabilidade 3D) |
| **TypeScript**              | Tipagem estática para garantir segurança contra erros em tempo de build e desenvolvimento. |
| **Vite**                    | Bundler e dev server ultra-rápido, otimizando o Hot Module Replacement (HMR).           |
| **Three.js**                | Engine WebGL principal de renderização 3D por baixo dos panos.                          |
| **@react-three/fiber**      | Wrapper declarativo do Three.js para React, que gerencia o ciclo de vida e a reconciliação (React Reconciler) perfeitamente. |
| **@react-three/drei**       | Coleção de abstrações e utilitários pro R3F. Usado criticamente para o `ScrollControls`. |
| **Tailwind CSS v4**         | Framework CSS utilitário focado em performance e estilização ágil da UI (menus, botões, modais). |

---

## 📂 3. Arquitetura e Estrutura de Pastas

A arquitetura do projeto segue uma divisão clássica baseada em componentes, priorizando a estabilidade de estados entre renderização WebGL e DOM.

```text
3D-Portifolio/
│
├── docs/                 # Documentação do Projeto
├── public/               # Ativos estáticos públicos (favicon, texturas brutas se houver)
├── src/
│   ├── components/       # Componentes independentes do React
│   │   ├── LoadingScreen.tsx # Gerencia a subida da aplicação
│   │   ├── Portfolio.tsx     # Interface 2D de leitura do site e projetos
│   │   └── Scene3D.tsx       # 🔮 O Core 3D da aplicação com React Three Fiber
│   │
│   ├── types/            # Definições customizadas de interfaces do TypeScript
│   ├── utils/            # Funções ajudantes generalistas
│   │
│   ├── App.tsx           # Ponto de entrada que centraliza a Cena 3D e o Portfolio
│   ├── index.css         # Importações do Tailwind
│   └── main.tsx          # Root mount point do React StrictMode
│
└── package.json          # Gerenciamento de pacotes (npm)
```

---

## 🏎️ 4. O Sistema de Animações 3D (`Scene3D.tsx`)

O coração interativo deste Portfólio reside na arquitetura feita em `@react-three/fiber`. 

Diferente de sistemas legados que misturam renderização via DOM vanilla atrelado ao `useEffect` ou usam `framer-motion-3d` de forma pesada, optei pela total fluidez matemática nativa utilizando **`useFrame` e `ScrollControls`**.

### 4.1. Scroll Parallax
No contexto principal, a câmera `Canvas` global da aplicação é envolvida pelo provedor `<ScrollControls pages={3} damping={0.1}>`.
- **`pages`**: Define o tamanho imaginário do canvas contábil.
- **`damping`**: Adiciona física de "inércia" garantindo que os objetos e a câmera amorteçam suavemente ao invés de pararem de forma brusca.

### 4.2. Comportamento das Geometrias
As cinco primitivas (Cube, Sphere, Torus, Dodecahedron, Icosahedron) foram separadas em **seus próprios componentes** por causa de performance: cada atualização (`useFrame`) ocorre exclusivamente dentro do componente sem quebrar ou re-renderizar partes não atreladas (isolamento de mutações de VDOM).

**Fluxo Matemático de Rotação Individual:**
O `math.sin` utiliza o `clock.elapsedTime` para flutuar em ondas senoidais sobre o seu Eixo-Y, combinando o desvio do scrool offset individual.

```tsx
// Exemplo de comportamento interno de um objeto
useFrame((state) => {
  if (meshRef.current) {
    // 1) Rotação Crônica Contínua 
    meshRef.current.rotation.x += 0.005;
    
    // 2) Parallax (Diferentes objetos usam multiplicadores diferentes ex: *8, *12)
    const scrollOffset = scroll.offset * 8; 

    // 3) Cálculos finais Y combinando Scroll + Hover Senoidal
    meshRef.current.position.y = initialY + scrollOffset + Math.sin(state.clock.elapsedTime + index) * 0.2;
  }
});
```

### 4.3. Iluminação e Camera Rig
Foram posicionadas `ambientLight` com intensidade moderada + Duas `pointLights` contrapostas (uma castigando em Ciano `0x00ffff`, outra contrastando em Verde Neon `0x00ff88`) para criar volumes expressivos nas bordas chanfradas do Dodecaedro e Icosaedro.
O componente `CameraRig` segue o `ScrollOffset` para fazer um "pan-down" suave na cena do mundo.

---

## ⚡ 5. Comandos Locais e Build

Para construir, rodar ou expandir o portfólio no dia-a-dia de forma local siga as instruções do Vite.

### Inicializando Servidor Local
```bash
npm run dev
```

### Buildando para Produção
O projeto utiliza um bundle plugin minificado para o site rodar o mais rápido possível através da rede:
```bash
npm run build
```
O build será emitido para a pasta `dist/` pronta para ser hospedada em Vercel, Netlify ou Render.

---