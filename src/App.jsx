import { useState } from "react";
import "./App.css";
import LogoScleenker from "./components/icons/LogoScleenker";

function App() {
  const [emailHero, setEmailHero] = useState("");
  const [statusHero, setStatusHero] = useState("");
  const [emailCta, setEmailCta] = useState("");
  const [statusCta, setStatusCta] = useState("");
  const [emailInvestor, setEmailInvestor] = useState("");
  const [statusInvestor, setStatusInvestor] = useState("");

  const handleSubscribe = async (e, email, setStatus, setEmail, endpoint) => {
    e.preventDefault();
    if (!email) return;

    setStatus("enviando");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const rawText = await response.text();
      const data = JSON.parse(rawText.trim());

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
      alert("Erro de conexão. Verifique se o arquivo PHP está ativo no servidor.");
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <a href="#">
            <LogoScleenker width="180px" color="#F3931A" />
          </a>
        </div>
        <nav>
          <a href="#solucao">A Plataforma</a>
          <a href="#pilares">Nossa Essência</a>
          <a href="#fundador">Liderança</a>
          <a href="#investidores" style={{ color: "var(--brand-orange)", fontWeight: "bold" }}>Investidores</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Em Desenvolvimento para 2026</span>
            <h1>
              O futuro da sua empresa está em <span className="highlight">uma gestão financeira inovadora.</span>
            </h1>
            <p>
              Estamos construindo o Scleenker: um ecossistema de <strong>controle financeiro corporativo</strong>. Muito mais que um sistema tradicional, entregamos uma arquitetura modular que revoluciona a forma de pagamento e a relação financeira entre empresa e cliente.
            </p>

            <form
              className="waitlist-container"
              onSubmit={(e) => handleSubscribe(e, emailHero, setStatusHero, setEmailHero, "./save_email.php")}
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail corporativo"
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
            <p>Design de elite que elimina a complexidade visual e prioriza a precisão máxima nas operações financeiras.</p>
          </div>
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Eficaz</h3>
            <p>Organização corporativa completa, transformando a análise de caixa em uma ferramenta de alta performance.</p>
          </div>
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Evolutivo</h3>
            <p>Arquitetura tecnológica que se adapta e escala conforme a maturidade e a expansão da sua empresa.</p>
          </div>
        </section>

        <section className="features" id="solucao">
          <div className="section-header">
            <h2>Tecnologia de elite para operações complexas</h2>
            <p>Gestão 360° que simplifica a tesouraria e o fluxo financeiro do seu negócio.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Checkouts Dinâmicos</h3>
              <p>Interface otimizada para liquidar transações instantaneamente, eliminando atritos no momento do pagamento.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Inteligência de Caixa</h3>
              <p>Visibilidade total de entradas e saídas com relatórios de performance gerados em tempo real.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Revolução em Pagamentos</h3>
              <p>Integração nativa para liquidação instantânea e conciliação bancária 100% automatizada.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Módulos Adaptáveis</h3>
              <p>Ative apenas o que faz sentido para sua operation: auditoria, faturamento ou gestão de recebíveis.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Foco Operacional</h3>
              <p>Interface "Zero Distração" desenhada para automatizar processos complexos e zerar erros humanos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Proteção de Receita</h3>
              <p>Alertas de margem e auditoria sistêmica para garantir a rentabilidade e a saúde financeira da empresa.</p>
            </div>
          </div>
        </section>

        <section className="features" id="investidores" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
          <div className="section-header">
            <span className="badge" style={{ backgroundColor: 'var(--brand-orange)', color: '#000' }}>Smart Money</span>
            <h2>
              Oportunidade para <span className="highlight">Investidores</span>
            </h2>
            <p>Participe da estruturação do SaaS que vai redefinir o fluxo de pagamentos no mercado corporativo.</p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div className="feature-card" style={{ border: '1px solid #333' }}>
                <h3 style={{ color: 'var(--brand-orange)' }}>Potencial de Mercado</h3>
                <p>Demanda latente por ecossistemas unificados de controle financeiro em empresas que buscam modernização e eficiência em transações.</p>
              </div>
              <div className="feature-card" style={{ border: '1px solid #333' }}>
                <h3 style={{ color: 'var(--brand-orange)' }}>Tecnologia Escalável</h3>
                <p>SaaS Modular Corporativo. Arquitetura robusta preparada para suportar alto volume de liquidações com máxima segurança de dados.</p>
              </div>
            </div>

            <div style={{ background: '#151515', padding: '40px', borderRadius: '12px', border: '1px solid #333', textAlign: 'center' }}>
              <h3>Receba nosso Pitch Deck Corporativo</h3>
              <p style={{ color: '#888', marginBottom: '25px' }}>Deixe seu e-mail para receber nossas projeções, roadmap de desenvolvimento e detalhes sobre o modelo de monetização.</p>

              <form
                className="waitlist-container"
                style={{ justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}
                onSubmit={(e) => handleSubscribe(e, emailInvestor, setStatusInvestor, setEmailInvestor, "./save_investor.php")}
              >
                <input
                  type="email"
                  placeholder="Seu e-mail corporativo ou LinkedIn"
                  className="input-waitlist"
                  value={emailInvestor}
                  onChange={(e) => setEmailInvestor(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ backgroundColor: 'var(--brand-orange)', color: '#000' }} disabled={statusInvestor === "enviando"}>
                  {statusInvestor === "enviando" ? "Enviando..." : "Solicitar Pitch Deck"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="features" id="fundador" style={{ backgroundColor: '#151515' }}>
          <div className="section-header">
            <span className="badge">Liderança & Visão</span>
            <h2>
              Criado por quem entende
              <span className="highlight"> de tecnologia e gestão</span>
            </h2>
            <p>Conheça a visão estratégica por trás da plataforma Scleenker</p>
          </div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div className="feature-card" style={{
              flex: '2',
              minWidth: '300px',
              textAlign: 'left'
            }}>
              <div className="feature-icon" style={{ textAlign: 'center' }}>👨‍💻</div>
              <h3 style={{ textAlign: 'center' }}>Everson Silva</h3>
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
                  "A tecnologia deve simplificar, não complicar. O Scleenker nasceu para dar às empresas o controle absoluto sobre suas finanças, com uma nova dinâmica de pagamentos que realmente funciona."
                </p>
                <div style={{ marginTop: '15px', textAlign: 'right' }}>
                  <div style={{ width: '50px', height: '2px', background: 'var(--brand-orange)', marginLeft: 'auto', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Everson Silva • Fundador</p>
                </div>
              </div>
            </div>

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
                <p>Transformar a gestão financeira de grandes operações com uma plataforma escalável, poderosa e blindada.</p>
              </div>

              <div className="feature-card" style={{ textAlign: 'center', height: '100%' }}>
                <div className="feature-icon">💡</div>
                <h3>Missão</h3>
                <p>Redefinir o fluxo de pagamentos e a relação comercial entre empresas e seus clientes através da tecnologia.</p>
              </div>

              <div className="feature-card" style={{ textAlign: 'center', height: '100%' }}>
                <div className="feature-icon">🎯</div>
                <h3>Propósito</h3>
                <p>Empoderar corporações com ferramentas de controle de elite que impulsionam segurança e resultados reais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="diferenciais">
          <h2>Seja um dos primeiros a transformar sua operation.</h2>
          <p>
            Estamos selecionando os primeiros parceiros corporativos para o lançamento. Garanta acesso a essa revolução financeira.
          </p>
          <form
            className="waitlist-container"
            onSubmit={(e) => handleSubscribe(e, emailCta, setStatusCta, setEmailCta, "./save_email.php")}
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail corporativo"
              className="input-waitlist"
              value={emailCta}
              onChange={(e) => setEmailCta(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={statusCta === "enviando"}>
              {statusCta === "enviando" ? "Salvando..." : "Quero Acesso Antecipado"}
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">
              <LogoScleenker width="120px" color="#F3931A" />
            </a>
          </div>
          <p className="footer-contact">contato@scleenker.com.br</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Scleenker Brasil. Criado por Everson Silva.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;