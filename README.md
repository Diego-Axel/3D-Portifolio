<div align="center">
  <h1>✨ 3D Interactive Portfolio</h1>
  <p><i>Um portfólio web criativo, altamente otimizado e focado em interações dinâmicas via rolagem (Scroll Parallax) em experiências 3D.</i></p>

  <p>
    <img src="https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react" alt="React 18" />
    <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js" alt="Three.js" />
    <img src="https://img.shields.io/badge/R3F-Fiber-purple?style=for-the-badge&logo=react" alt="React Three Fiber" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  </p>
</div>

<br />

## 📖 Sobre o Projeto
Este é um Portfólio Pessoal construído com arquitetura de ponta voltada para Web3D. Seu grande diferencial é a **não obstrução da navegação**: o background é composto por geometrias e uma câmera matematicamente vinculadas à rolagem de tela (Scroll) do usuário, criando a forte sensação imersiva de *Parallax* enquanto se lê o currículo em primeiro plano.

**Funcionalidades de Destaque**:
- **Geometrias Matemáticas Primitivas:** Cubos, esferas e icosaedros renderizados em tempo-real.
- **Scroll Parallax Inertial:** Movimentos e câmeras fluídas vinculadas ao estado da barra de rolagel do navegador via `useScroll`.
- **Lighting Dinâmico:** Fontes de luz neon cruzadas criando profundidade nos objetos.

---

## ⚡ Como Rodar o Projeto

Você precisa ter o [Node.js](https://nodejs.org/) instalado em seu computador para rodar os comandos a seguir.

1. **Clone o repositório** e entre na pasta:
```bash
git clone https://github.com/SeuUsuario/3D-Portifolio.git
cd 3D-Portifolio
```

2. **Instale as dependências** (utilizei as versões que dão suporte máximo à bibliotecas 3D):
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento ultra-rápido:**
```bash
npm run dev
```

Abra seu navegador na porta similar instruída pelo CLI para visualizar o portfólio.

---

## 📚 Documentação Técnica (Avançada)
Quer explorar como a matemática funciona por baixo dos panos na cena renderizada pelo WebGL, por que escolhi tais tecnologias em vez de abstrações de animação antigas e como o `ScrollControls` funciona?

👉 Acesse a **[Documentação Arquitetural Completa na pasta docs/](./docs/project_documentation.md)**.

---

<br/>
<div align="center">
  <i>Desenvolvido com ☕, Matemática e React.</i>
</div>
