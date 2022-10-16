import { pokemonTypes } from "../constants/pokemon.types";

const initState = {
  isLoading: true,
  pokemon: [],
};

const pokemon = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case pokemonTypes.LIST_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.LIST_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: payload,
      };
    case pokemonTypes.LIST_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.DETAIL_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.DETAIL_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: payload,
      };
    case pokemonTypes.DETAIL_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.MY_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.MY_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listMyPokemon: payload,
      };
    case pokemonTypes.MY_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.RENAME_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.RENAME_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rename: payload,
      };
    case pokemonTypes.RENAME_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.REALESE_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.REALESE_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        delete: payload,
      };
    case pokemonTypes.REALESE_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.PRIME_NUMBER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.PRIME_NUMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        primeNumber: payload,
      };
    case pokemonTypes.PRIME_NUMBER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case pokemonTypes.CATCH_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case pokemonTypes.CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        catchPokemon: payload,
      };
    case pokemonTypes.CATCH_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default pokemon;
