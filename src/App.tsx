import { Scene3D } from './components/Scene3D';
import { Portfolio } from './components/Portfolio';
import { LoadingScreen } from './components/LoadingScreen';

/**
 * Componente principal da aplicação.
 * Gerencia a estrutura global, incluindo a tela de carregamento, 
 * o cenário 3D de fundo e o conteúdo do portfólio.
 */
export function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Tela de carregamento inicial */}
      <LoadingScreen />
      
      {/* Cenário 3D interativo */}
      <Scene3D />

      <div className="relative">
        {/* Conteúdo textual e seções do portfólio */}
        <Portfolio />
      </div>

      {/* Camada de gradiente para suavizar a transição no fundo */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-950/20 z-0" />
    </div>
  );
}

