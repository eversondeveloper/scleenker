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
          <a href="#fundador">Fundador</a>
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

        {/* Seção do Fundador - Layout Corrigido */}
        <section className="features" id="fundador" style={{ backgroundColor: '#151515' }}>
          <div className="section-header">
            <span className="badge">Liderança & Visão</span>
            <h2>
              Criado por quem entende 
              <span className="highlight"> de tecnologia e gestão</span>
            </h2>
            <p>Conheça o visionário por trás da plataforma $cleenker</p>
          </div>
          
          {/* Container flexível para o layout do fundador */}
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {/* Card principal do Everson - maior */}
            <div className="feature-card" style={{ 
              flex: '2',
              minWidth: '300px',
              textAlign: 'left'
            }}>
              <div className="feature-icon" style={{ textAlign: 'center' }}>👨‍💻</div>
              <h3 style={{ textAlign: 'center' }}>Everson Silva de Souza</h3>
              <p className="highlight" style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '10px 0', textAlign: 'center' }}>
                CEO & Fundador
              </p>
              
              <div style={{ margin: '20px 0' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Formação:</span>
                  <span style={{ fontWeight: '500' }}>Engenharia de Software</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Expertise:</span>
                  <span style={{ fontWeight: '500' }}>Gestão Estratégica & Inovação</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '10px 0'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Experiência:</span>
                  <span style={{ fontWeight: '500' }}>+8 anos em desenvolvimento</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '20px', 
                padding: '20px', 
                background: 'rgba(0,0,0,0.3)', 
                borderRadius: '8px', 
                borderLeft: '3px solid var(--brand-orange)'
              }}>
                <p style={{ fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  "A tecnologia deve simplificar, não complicar. O $cleenker nasceu para dar aos empresários o controle total sobre suas finanças com uma ferramenta que realmente funciona."
                </p>
                <div style={{ marginTop: '15px', textAlign: 'right' }}>
                  <div style={{ width: '50px', height: '2px', background: 'var(--brand-orange)', marginLeft: 'auto', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Everson Silva • Fundador</p>
                </div>
              </div>
            </div>

            {/* Cards laterais - Visão e Missão */}
            <div style={{ 
              flex: '1',
              minWidth: '250px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              <div className="feature-card" style={{ textAlign: 'center', height: '100%' }}>
                <div className="feature-icon">🚀</div>
                <h3>Visão 2026</h3>
                <p>Transformar a gestão financeira de milhares de empresas com uma plataforma acessível, poderosa e intuitiva.</p>
              </div>
              
              <div className="feature-card" style={{ textAlign: 'center', height: '100%' }}>
                <div className="feature-icon">💡</div>
                <h3>Missão</h3>
                <p>Democratizar o acesso a ferramentas de gestão de elite, antes restritas a grandes corporações.</p>
              </div>
              
              <div className="feature-card" style={{ textAlign: 'center', height: '100%' }}>
                <div className="feature-icon">🎯</div>
                <h3>Propósito</h3>
                <p>Empoderar pequenos e médios empresários com tecnologia que impulsiona resultados reais.</p>
              </div>
            </div>
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
          <p>&copy; {new Date().getFullYear()} $cleenker Brasil. Criado por Everson Silva.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;