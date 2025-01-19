import "./nav.css";

function Pokedex() {
  return (
    <section>
      <header>
        <h3>you choose this pokemon</h3>
      </header>
      <div className="black-box">

      </div>
    </section>
  );
}

export default function PokemonSearch() {
  return (
    <>
      <section className="search-container">
        <div className="controls">
          <button className="button">Sort</button>
          <button className="button">Order</button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="search-input"
          />
          <button className="search-button">Search</button>
          <div className="toggle">
            <label>
              <input type="checkbox" />
              <span>Search By: Name</span>
            </label>
          </div>
        </div>
      </section>
      <Pokedex />
    </>
  );
}
