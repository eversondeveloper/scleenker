import { useState } from "react";
import "./App.css";

function App() {
  const [emailHero, setEmailHero] = useState("");
  const [statusHero, setStatusHero] = useState("");
  const [emailCta, setEmailCta] = useState("");
  const [statusCta, setStatusCta] = useState("");

  const handleSubscribe = async (e, email, setStatus, setEmail) => {
    e.preventDefault();
    if (!email) return;

    setStatus("enviando");

    try {
      const response = await fetch("https://scleenker.com.br/save_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();

      if (data.status === "sucesso") {
        setStatus("sucesso");
        setEmail("");
        alert("Ótimo! Você será notificado em breve.");
      } else {
        setStatus("erro");
        alert(data.message || "Ops! Algo deu errado. Tente novamente.");
      }
    } catch (error) {
      setStatus("erro");
      console.error("Erro ao enviar:", error);
      alert("Erro de conexão. Verifique se o arquivo PHP está no servidor.");
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const team = [
    { name: "Everson Silva de Souza", role: "CEO & Fundador", education: "Engenharia de Software" },
    { name: "Arlindo Lopes Galvão Júnior", role: "CTO & Co-fundador", education: "Engenharia de Software" },
    { name: "Jairo da Silva Sobrinho Junior", role: "COO & Co-fundador", education: "Engenharia de Software" },
    { name: "Cláudio Gonçalves da Silva", role: "CPO & CMO & Co-fundador", education: "Análise e Desenv. de Sistemas" },
    { name: "Christian de Andrade Silva", role: "CSO & Co-fundador", education: "Engenharia de Software" },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">
            <span className="logo-symbol">$</span>cleenker
          </span>
        </div>
        <nav>
          <a href="#solucao">O Projeto</a>
          <a href="#pilares">Nossa Essência</a>
          <a href="#equipe">Equipe</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Em Desenvolvimento para 2026</span>
            <h1>
              O futuro do seu negócio é <span className="highlight">uma gestão inteligente.</span>
            </h1>
            <p>
              Estamos construindo o $cleenker: uma plataforma de <strong>controle financeiro completo</strong> para empresas. Muito mais que um PDV, entregamos uma cadeia de gestão total, intuitiva e modular.
            </p>
            
            <form 
              className="waitlist-container" 
              onSubmit={(e) => handleSubscribe(e, emailHero, setStatusHero, setEmailHero)}
            >
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="input-waitlist" 
                value={emailHero}
                onChange={(e) => setEmailHero(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" disabled={statusHero === "enviando"}>
                {statusHero === "enviando" ? "Salvando..." : "Entrar na Lista de Espera"}
              </button>
            </form>
          </div>
        </section>

        <section className="values-section" id="pilares">
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Excelente</h3>
            <p>Design de elite que elimina a fadiga visual e prioriza a agilidade máxima no atendimento.</p>
          </div>
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Eficaz</h3>
            <p>Organização financeira completa, transformando o fluxo de caixa em uma ferramenta de alta performance.</p>
          </div>
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Evolutivo</h3>
            <p>Arquitetura modular que se adapta e cresce conforme a maturidade e a necessidade da sua empresa.</p>
          </div>
        </section>

        <section className="features" id="solucao">
          <div className="section-header">
            <h2>Tecnologia de elite para todos!</h2>
            <p>Gestão 360° que simplifica a complexidade financeira do seu negócio.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>PDV Ultra-Ágil</h3>
              <p>Interface otimizada para vendas instantâneas e registros sem atrito no balcão.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Fluxo de Caixa</h3>
              <p>Visibilidade total de entradas e saídas com relatórios gerados em tempo real.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Pix Integrado</h3>
              <p>QR Code dinâmico gerado no checkout com conciliação bancária automática.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Módulos Adaptáveis</h3>
              <p>Ative apenas o que precisa: estoque, notas fiscais, ou gestão de pessoal.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Foco Operacional</h3>
              <p>Interface "Zero Distração" desenhada para reduzir erros humanos e cliques desnecessários.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Proteção de Lucro</h3>
              <p>Alertas de margem e auditoria inteligente para garantir a saúde financeira do lojista.</p>
            </div>
          </div>
        </section>

        <section className="team-section" id="equipe">
          <div className="section-header">
            <h2>Quem está por trás da revolução</h2>
            <p>Especialistas dedicados a transformar a gestão do varejo brasileiro.</p>
          </div>
          <div className="features-grid">
            {team.map((member, index) => (
              <div key={index} className="feature-card">
                <h3>{member.name}</h3>
                <p className="highlight" style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '10px 0' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Graduando em {member.education}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="diferenciais">
          <h2>Seja um dos primeiros a transformar a sua gestão.</h2>
          <p>
            Estamos selecionando os primeiros parceiros para o lançamento piloto. Garanta sua vaga na revolução financeira.
          </p>
          <form 
            className="waitlist-container" 
            onSubmit={(e) => handleSubscribe(e, emailCta, setStatusCta, setEmailCta)}
          >
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="input-waitlist" 
              value={emailCta}
              onChange={(e) => setEmailCta(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={statusCta === "enviando"}>
              {statusCta === "enviando" ? "Salvando..." : "Quero Ser Notificado"}
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">
              <span className="logo-symbol">$</span>cleenker
            </span>
          </div>
          <p className="footer-contact">scleenker@gmail.com</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} $cleenker Brasil.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;