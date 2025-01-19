import { useFetch } from "../assets/useFetch";

function DataFetch() {
    
}

export default function PokedexButtons({ children }) {
  const { data, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/dialga"
  );
  function handleFetch() {
    <div>
      <h2>{data?.name}</h2>
      <ul>
        <h3>Skills</h3>
        {loading && <h1>Loading...</h1>}
        {data?.abilities?.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
        <h3>Movements</h3>
        {data?.moves?.slice(0, 4).map((moves, index) => (
          <li key={index}>{moves.move.name}</li>
        ))}
        <img src={data?.sprites?.front_default} alt={data?.name} />
      </ul>
    </div>;
  }
  return (
    <>
      <button onClick={handleFetch}>{children}</button>
    </>
  );
}
