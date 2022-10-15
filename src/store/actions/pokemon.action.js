import axios from "axios";
import { pokemonTypes } from "../constants/pokemon.types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const myApi = "http://localhost:5000/pokemon"

export const getDataAllPokemon = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}?limit=100`);
    dispatch({
      type: pokemonTypes.LIST_POKEMON_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailPokemon = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl +'/'+ id}`);
    console.log(res)
    dispatch({
      type: pokemonTypes.DETAIL_POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }

};

export const getDataMyPokemon = () => async(dispatch) => {
    try {
        const res = await axios.get(myApi);
        dispatch({
          type: pokemonTypes.MY_POKEMON_SUCCESS,
          payload: res.data,
        });
    } catch (error) {
        console.log(error)
    }
}

export const renameMyPokemon = (pokemonName) => async(dispatch) => {
    try {
        const res = await axios.patch(`${myApi}/rename`, {oldName: pokemonName})
        dispatch({
            type: pokemonTypes.RENAME_POKEMON_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const realeseMyPokemon = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`${myApi}/${id}`)
        dispatch({
            type: pokemonTypes.REALESE_POKEMON_SUCCESS,
        })
    } catch (error) {
        
    }
}

export const generatePrimeNum = () => async (dispatch) => {
    try {
        const res = await axios.get(`${myApi}/generate-prime-number`)
        dispatch({
            type:pokemonTypes.PRIME_NUMBER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        
    }
}
