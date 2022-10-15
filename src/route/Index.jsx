import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Detail from '../pages/Detail'
import ListPokemons from '../pages/ListPokemons'
import MyPokemon from '../pages/MyPokemon'

export default function Index() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ListPokemons/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/my-pokemon' element={<MyPokemon/>}/>
        </Routes>
    </div>
  )
}
