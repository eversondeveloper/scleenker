import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <span className="logo-symbol">$</span>
          <span className="logo-text">cleenker</span>
        </div>
        <nav>
          <a href="#solucao">Solução</a>
          <a href="#diferenciais">Diferenciais</a>
          <button className="btn-nav">Contato</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>O sistema de caixa que continua vendendo, <span className="highlight">mesmo sem internet.</span></h1>
            <p>
              Proteção do lucro e organização financeira para o seu balcão. 
              Abandone o caderninho de papel e tenha uma cadeia de gestão total desenhada para a sua realidade.
            </p>
            <button className="btn-primary">Testar o Sistema</button>
          </div>
        </section>

        <section className="features" id="solucao">
          <div className="section-header">
            <h2>Por que escolher o $cleenker?</h2>
            <p>Tecnologia robusta com interface minimalista, focada na eficiência do pequeno negócio.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Resiliência Offline</h3>
              <p>A conexão caiu? Sua loja não para. Operação offline com sincronização automática quando a rede voltar.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Pix Nativo na Tela</h3>
              <p>Gerador de QR Code Pix integrado diretamente ao PDV, agilizando o fechamento e evitando erros de troco.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Gestão Modular</h3>
              <p>Comece pelo essencial e adicione controle de estoque e finanças conforme o seu negócio prospera.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Design Clean</h3>
              <p>Interface direta e ultraleve, construída para evitar fadiga visual durante rotinas sob pressão.</p>
            </div>
          </div>
        </section>

        <section className="cta" id="diferenciais">
          <h2>Pronto para proteger o seu lucro?</h2>
          <p>Junte-se à revolução do comércio e leve tecnologia de ponta para o seu balcão.</p>
          <button className="btn-primary">Assine Agora</button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-symbol">$</span>
            <span className="logo-text">cleenker</span>
          </div>
          <p className="footer-contact">contato@scleenker.com.br</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} $cleenker. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;