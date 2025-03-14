import type { Pokemon } from '../types/pokemon';
import { PokedexTable } from './PokedexTable';
import { PokemonTypeSelection } from './PokemonTypeSelection';
import { useState } from 'react';

interface FilterablePokedexTableProps {
  pokemon: Pokemon[];
}

export function FilterablePokedexTable({
  pokemon,
}: FilterablePokedexTableProps) {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  // Filter pokemon based on selected type
  const filteredPokemon = selectedType
    ? pokemon.filter((p) => p.types.includes(selectedType))
    : pokemon;

  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      <PokedexTable pokemon={filteredPokemon} />
    </div>
  );
}
