import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataAllPokemon } from "../store/actions/pokemon.action";

export default function ListPokemons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);

  const navigateToDetail = (name) => {
    navigate("/detail/" + name);
  };

  useEffect(() => {
    dispatch(getDataAllPokemon());
  }, [dispatch]);

  useEffect(() => {
    console.log(pokemon);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-5 text-center">
        {pokemon?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigateToDetail(item.name)}
              className="bg-red-100 w-10/12 h-78 m-5 items-center flex flex-col justify-between"
            >
              <div className="bg-green-100 mb-10 w-full p-5">
                <div className="">{item.name.toUpperCase()}</div>
              </div>
              <div className="h-full w-32">
                <img
                  className="h-full w-full"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    item.url.split("/")[item.url.split("/").length - 2]
                  }.svg`}
                  alt=""
                />
              </div>
              <button className="mt-10 p-5 mb-5 w-32 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Catch !
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
