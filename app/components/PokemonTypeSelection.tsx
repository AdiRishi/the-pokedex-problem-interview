interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

// Common Pokemon types
const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export function PokemonTypeSelection({
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="type-select" style={{ marginRight: '10px' }}>
        Filter by type:
      </label>
      <select
        id="type-select"
        value={selectedType || ''}
        onChange={(e) => {
          const value = e.target.value;
          selectType(value === '' ? undefined : value);
        }}
      >
        <option value="">All types</option>
        {POKEMON_TYPES.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
