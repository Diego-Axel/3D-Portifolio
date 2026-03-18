import { Code2, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

/**
 * Componente de Portfólio.
 * Contém a estrutura de navegação, seções de projetos, habilidades, 
 * sobre mim e contato.
 */
export function Portfolio() {
  // Lista de projetos em destaque
  const projects = [
    {
      title: 'Landing Page Para Uma Barbearia',
      description: 'Landing page responsiva para uma barbearia, com agendamento online e galeria de fotos.',
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      link: 'https://github.com/Diego-Axel',
    },
    {
      title: 'One Page para uma nutricionista',
      description: 'One page responsiva para uma nutricionista, destacando serviços, informações de contato, como funciona, o que está incluso e dúvidas.',
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      link: 'https://francinele-nutricionista.vercel.app/',
    },
    {
      title: 'Página Web para o incentivo à sáude',
      description: 'Uma página Web destinada a dicas de treino, corrida e alimentação em prol de uma vida mais saudável e ativa.',
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: 'https://diego-axel.github.io/FitnesWeb/',
    },
    {
      title: 'Landing Page para um aplicativo de AutoSaúde',
      description: 'Uma Landing Page para um aplicativo focado em AutoSaúde, oferecendo recursos e informações para promover o bem-estar e a saúde pessoal, tudo isso com uma IA para te ajudar',
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      link: 'https://netfit-ia.vercel.app/',
    },
    {
      title: 'Sistema de Pedidos Online Para Loja de Suplementos',
      description: 'Sistema de pedidos online para uma loja de suplementos, com carrinho de compras, onde os pedidos são enviados diretamente para o WhatsApp da loja.',
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      link: 'https://venus-suplementos.vercel.app/',
    },
    {
      title: 'Landing Page para a Nutritiva',
      description: 'Uma Landing Page para a Nutritiva, uma empresa de Engenharia aplicada para transformar bioeconomia em infraestrutura industrial.',
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      link: 'https://anutritiva.com.br/',
    },
  ];

  // Habilidades categorizadas
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs'] },
    { category: 'Bancos de Dados', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL'] },
    { category: 'Ferramentas & DevOps', items: ['Docker', 'Git', 'AWS', 'GitHub Actions', 'Figma'] },
  ];

  // Experiências profissionais
  const experiences = [
    {
      company: "Viggo Sistemas.",
      period: "Abril 2024 -  Até Novembro 2025",
      role: "Estagiário",
      description: "Análise e organização de dados para elaboração de relatórios dinâmicos, apoiando a tomada de decisão estratégica. Desenvolvimento de dashboards interativos utilizando Power BI para visualização de métricas chave. Coleta, análise e tratamento de informações relevantes para as áreas de negócio. Suporte a chatbots integrados com redes sociais, assistência na conciliação de transações financeiras, participação ativa em reuniões com clientes para levantamento de requisitos."
    },
    {
      company: "Freelancer",
      period: "2024 - Até o momento",
      role: "Desenvolvedor Full Stack",
      description: "Desenvolvimento de aplicações web utilizando JavaScript, TypeScript e frameworks modernos como React e Node.js."
    },
    {
      company: "BarioTech",
      period: "2024 - Ago 2025",
      role: "Desenvolvedor Back-end",
      description: "Desenvolvimento de APIs RESTful e integração com bancos de dados. Implementação de lógica de negócios e otimização de desempenho em aplicações web."
    },
    {
      company: "UFRN",
      period: "2024 - Até o momento",
      role: "Bacharelado em Sistemas de Informação",
      description: "Início da faculdade de Sistemas de Informação."
    }
  ];

  return (
    <div className="relative z-10">
      {/* Navegação fixa */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Diêgo Axel - Portfolio</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">Sobre</a>
            <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition">Experiência</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">Projetos</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">Habilidades</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Seção Hero - Saudação Inicial */}
      <section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Olá, sou Diêgo Axel <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Desenvolvedor Full-Stack</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Eu crio aplicações web de qualidade, responsivas e de alto desempenho. Com experiência em tecnologias modernas como React, Node.js e plataformas de nuvem, transformo ideias em realidade.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105">
              Ver Meu Trabalho
            </button>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition">
              Entrar em Contato
            </button>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Sobre Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-300 text-lg mb-4">
                Sou um desenvolvedor full-stack apaixonado, com mais de 3 anos de experiência no desenvolvimento de software que os usuários adoram. Especializo-me em criar código escalável, de fácil manutenção e interfaces intuitivas.
              </p>
              <p className="text-slate-300 text-lg mb-4">
                Minha jornada na tecnologia começou com a curiosidade de como as coisas funcionam online. Hoje, misturo especialização técnica com pensamento criativo para resolver problemas complexos e entregar resultados excepcionais.
              </p>
              <p className="text-slate-300 text-lg">
                Quando não estou codando, você pode me encontrar contribuindo para projetos de código aberto, escrevendo posts técnicos ou explorando as últimas tecnologias web.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg p-8 border border-cyan-400/30">
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold mb-2">Experiência</p>
                  <p className="text-slate-300">3+ Anos em Desenvolvimento de Software</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold mb-2">Educação</p>
                  <p className="text-slate-300">Bacharelando em Sistemas de Informação - UFRN</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold mb-2">Localização</p>
                  <p className="text-slate-300">Remoto / Atuação Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Experiência Profissional */}
      <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experiência Profissional</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{exp.role}</p>
                  </div>
                  <p className="text-slate-400 text-sm">{exp.period}</p>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projetos em Destaque</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition">
                    Ver Projeto <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Habilidades & Tecnologias</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Vamos Trabalhar Juntos</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Estou sempre interessado em ouvir sobre novos projetos e oportunidades.
          </p>
          <div className="flex gap-6 justify-center flex-wrap mb-8">
            <a href="mailto:diegoaxelbsr@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition">
              <Mail size={24} /> Enviar E-mail
            </a>
            <a href="https://github.com/Diego-Axel" className="flex items-center gap-3 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition">
              <Github size={24} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/di%C3%AAgo-axel-1684452b5/" className="flex items-center gap-3 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition">
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg p-8 border border-cyan-400/30">
            <p className="text-slate-300 text-lg mb-4">E-mail: diegoaxelbsr@gmail.com</p>
            <p className="text-slate-300 text-lg">Disponível para projetos freelance e oportunidades em tempo integral</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>2026 DevPortfolio. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Projetado e Construído com React, Three.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

