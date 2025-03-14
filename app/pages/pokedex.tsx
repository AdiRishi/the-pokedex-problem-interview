import { FilterablePokedexTable } from '../components/FilterablePokedexTable';
import type { Pokemon } from '../types/pokemon';

// Sample Pokemon data
const samplePokemon: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['fire'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['water'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 25,
    name: 'Pikachu',
    types: ['electric'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    id: 152,
    name: 'Chikorita',
    types: ['grass'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
  },
];

export function Pokedex() {
  return (
    <div style={{ padding: '20px' }}>
      <FilterablePokedexTable pokemon={samplePokemon} />
    </div>
  );
}
