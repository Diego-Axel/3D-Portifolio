import { useEffect, useState } from 'react';

/**
 * Componente de tela de carregamento.
 * Exibe uma animação de carregamento e o nome do desenvolvedor por 2 segundos
 * antes de permitir a visualização do conteúdo principal.
 */
export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento para garantir que os assets 3D tenham tempo de inicializar
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Se o carregamento terminou, não renderiza nada
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24">
            {/* Círculo de fundo estático */}
            <div className="absolute inset-0 rounded-lg border-4 border-slate-700"></div>
            {/* Círculo de carregamento animado (spin) */}
            <div className="absolute inset-0 rounded-lg border-4 border-transparent border-t-cyan-400 border-r-blue-400 animate-spin"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Diêgo Axel</h1>
        <p className="text-slate-400">Carregando Experiência 3D...</p>
      </div>
    </div>
  );
}

