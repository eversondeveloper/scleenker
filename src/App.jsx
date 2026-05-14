import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
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
        alert("Ops! Algo deu errado. Tente novamente.");
      }
    } catch (error) {
      setStatus("erro");
      console.error("Erro ao enviar:", error);
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
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Em Desenvolvimento para 2026</span>
            <h1>
              O futuro do seu balcão é <span className="highlight">uma gestão inteligente.</span>
            </h1>
            <p>
              Estamos construindo o $cleenker: a tecnologia que protege o lucro do lojista através de uma cadeia de gestão total. Um PDV modular, intuitivo e que vem com uma grande inovação tecnológica.
            </p>
            
            <form className="waitlist-container" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="input-waitlist" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" disabled={status === "enviando"}>
                {status === "enviando" ? "Salvando..." : "Entrar na Lista de Espera"}
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
            <p>Organização financeira completa para o pequeno comércio, transformando o balcão em uma empresa de alta performance.</p>
          </div>
          <div className="value-item">
            <span className="value-letter">E</span>
            <h3>Evolutivo</h3>
            <p>Arquitetura modular que se adapta e cresce conforme a maturidade e a necessidade do seu comércio.</p>
          </div>
        </section>

        <section className="features" id="solucao">
          <div className="section-header">
            <h2>Tecnologia de elite para todos!</h2>
            <p>
              O sistema que simplifica a complexidade e conversa direto com o cliente.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Processamento Ágil</h3>
              <p>
                Fluxo de dados otimizado para que cada registro seja instantâneo, garantindo que o lojista tenha o controle total do lucro em tempo real.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Pix Integrado</h3>
              <p>
                QR Code dinâmico gerado diretamente no PDV. Fechamento de caixa sem atritos e segurança total em cada transação digital.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Módulos Adaptáveis</h3>
              <p>
                Pague apenas pelo que usar. Evolua de um PDV simples para uma gestão de estoque e finanças completa de forma estratégica.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Foco Operacional</h3>
              <p>
                Interface "Zero Distração". Desenhada para reduzir cliques, evitar erros humanos e manter o foco no que importa: o cliente.
              </p>
            </div>
          </div>
        </section>

        <section className="cta" id="diferenciais">
          <h2>Seja um dos primeiros a transformar o seu balcão.</h2>
          <p>
            Estamos selecionando os primeiros parceiros para o lançamento piloto. Garanta sua vaga na revolução do varejo.
          </p>
          <form className="waitlist-container" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="input-waitlist" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" disabled={status === "enviando"}>
                {status === "enviando" ? "Salvando..." : "Quero Ser Notificado"}
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
          <p className="footer-contact">contato@scleenker.com.br</p>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} $cleenker Brasil.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;