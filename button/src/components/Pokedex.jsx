import mainScreen from "../img/mainIMG.png";
import dataScreen from "../img/sideImg.png";
import "./pokedex.css";
import { useFetch } from "../assets/useFetch";

function MainScrn() {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/dialga");
  return (
    <>
      <div>
        <img src={mainScreen} alt="Pokedex Screen" />
        <div className="pokemon-info">
          <h1>{data?.name}</h1>
          <img src={data?.sprites?.front_default} alt="" />
        </div>
      </div>
    </>
  );
}

function SideScreen() {
    const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/dialga");
  return (
    <div>
      <div>...</div>
      <div>...</div>
      <img src={dataScreen} alt="" />
      <div>
        {data?.abilities?.map((abitlity, index) => (
          <li key={index}>{abitlity.ability.name}</li>
        ))}
        {data?.moves?.splice(0,4).map((moves,index) => (<li key ={index} >{moves.move.name}</li>))}
      </div>
    </div>
  );
}

export default function Pokedex() {
  return (
    <>
      <div className="container">
        <MainScrn />
        <SideScreen />
      </div>
    </>
  );
}
