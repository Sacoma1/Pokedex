import React, { useEffect, useState } from "react";
import PokedexButtons from "./PokedexButton";
import { useFetch } from "../assets/useFetch";

export default function Fetch() {
  const {data, loading} = useFetch("https://pokeapi.co/api/v2/pokemon/dialga")

  return (
    <>
      <PokedexButtons>Sort</PokedexButtons>
      <PokedexButtons>Order</PokedexButtons>
      
    </>
  );
}

 

