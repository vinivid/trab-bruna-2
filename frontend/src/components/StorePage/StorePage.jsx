import { useRef, useState } from "react";
import "./StorePage.css";
import { ShineButton } from "../ShineButton/ShineButton";
import { ProductCard } from "../ProductCard/ProductCard";
import casa from "../../assets/casa.jpg";
import faust from "../../assets/faustian.jpeg";

const Sidebar = ({ isOpen, user, isAdmin, onLogin, onLogout, onToggle }) => (
  <>
    <button className="sidebar__toggle" onClick={onToggle} aria-label="Toggle sidebar">
      <span /><span /><span />
    </button>

    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__header">
        <span className="sidebar__logo">⚗️ Poções e soluções</span>
      </div>

      <nav className="sidebar__nav">
        <p className="sidebar__section-label">Navigate</p>
        <a href="#history" className="sidebar__link" onClick={() => window.innerWidth < 768 && onToggle()}>📜 História</a>
        <a href="#products" className="sidebar__link" onClick={() => window.innerWidth < 768 && onToggle()}>🧪 Produtos</a>
      </nav>

      {isAdmin && (
        <nav className="sidebar__nav">
          <p className="sidebar__section-label">Admin</p>
          <a href="#admin" className="sidebar__link sidebar__link--admin">🛡️ Admin Panel</a>
        </nav>
      )}

      <div className="sidebar__auth">
        {user ? (
          <>
            <p className="sidebar__user">👤 {user.name}</p>
            <button className="sidebar__auth-btn" onClick={onLogout}>Log out</button>
          </>
        ) : (
          <button className="sidebar__auth-btn sidebar__auth-btn--login" onClick={onLogin}>Log in</button>
        )}
      </div>
    </aside>

    {isOpen && <div className="sidebar__backdrop" onClick={onToggle} />}
  </>
);

const StorePage = ({
  historyImageSrc,
  historyImageAlt = "Store image",
  secondImageSrc,
  secondImageAlt = "Store image 2",
  secondText = "",
  products = [],
  user,
  isAdmin,
  onLogin,
  onLogout,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar
        isOpen={sidebarOpen}
        user={user}
        isAdmin={isAdmin}
        onLogin={onLogin}
        onLogout={onLogout}
        onToggle={() => setSidebarOpen((v) => !v)}
      />

      <main className="main">

        <section id="history" className="section">
          <h1 className="section__title">História da loja</h1>

          <div className="history__row history__row--text-image">
            <p className="history__text">
              Em 1867 eu, Annabelle Merigold, retornei de Uqbar após um encontro com os membros do Orbis Tertius. Lá adquiri informações proibidas até aos arcanjos, conversei com Mimir e observei, por alguns instantes, o Aleph. <br />
              Retornei para este local devido a perseguições e maldições. Para sobreviver me aposentei neste nicho, abandonado, velho, sujo e já amaldiçoado seria um local perfeito para me alojar e fundar este estabelecimento. <br />
              Desde então comecei a fabricar poções em troca de favores, artefatos e outros bens de valores significativos. Inicialmente eram vendidas poções apenas para uma clientela reservada, magos com barbas até os pés. Com o tempo, mortais simplórios começaram a se sacrificarem e imploraram diariamente pelos meus serviços. O incômodo me enjoou, então comecei a vender poções mais simples para um público mais amplo.
           </p>

            <div className="history__image-wrapper">
                <img src={casa} alt="Minha casa, encontrada em 1867" className="history__image" />
            </div>
          </div>

          <div className="history__row history__row--image-text">
            <div className="history__image-wrapper history__image-wrapper--sm">
                <img src={faust} alt="Um exemplo de uma oferta de Mephistofeles" className="history__image" />
            </div>
            <p className="history__text">
              Recentemente Mephistopheles apareceu em meu abrigo. Ofereceu-me riquezas infinitas. Aceitei, afinal, quem é Mephistopheles para tentar me prejudicar?. <br />
              Este site, aparentemente, é a forma que ele cumprirá sua promessa. Tenho de dizer que para tanto não precisava de ajuda de um demônio. Entretanto, um contrato é um contrato, e agora tenho isto como meu.
            </p>
          </div>
        </section>

        <hr className="divider" />

        <section id="products" className="section">
          <h2 className="section__title">Products</h2>
          <div className="products__grid">
            {products.length > 0
              ? products.map((p, i) => (
                  <ProductCard key={i} {...p} />
                ))
              : [0, 1, 2, 3].map((i) => (
                  <ProductCard key={i} name="Potion" description="" />
                ))}
          </div>
        </section>
        
        <hr className="divider" />

        <section id="contato" className="section">
          <h2 className="section__title">Contatos</h2>
            <p>
              Minha porta telepatica é 666.128.0451::2666, envie mensagems que eu eventualmente responderei.
            </p>
            <p style={{marginTop: "30px"}}>
              Para o envio de cartas, coloque como endereço "Lugar presente mas intocavel". Eu recomendo o uso de aguias, considerando as criaturas que rondam onde eu moro.
            </p>
        </section>

      </main>
    </div>
  );
};

export default function Store() {
  const [user, setUser] = useState(null);

  const mockUser = { name: "Merlin", isAdmin: true };

  return (
    <StorePage
      user={user}
      isAdmin={user?.isAdmin}
      onLogin={() => setUser(mockUser)}
      onLogout={() => setUser(null)}
      products={[
        { name: "Health Potion", description: "", onBuyClick: () => alert("Health Potion!") },
        { name: "Mana Potion",   description: "", onBuyClick: () => alert("Mana Potion!")   },
        { name: "Speed Elixir",  description: "", onBuyClick: () => alert("Speed Elixir!")  },
        { name: "Shadow Brew",   description: "", onBuyClick: () => alert("Shadow Brew!")   },
      ]}
    />
  );
}
