# The Pokedex Problem

This repository is a base template for an interview coding problem. It is setup with React Router v7 and TypeScript.

## Setup

```bash
pnpm install
```

To run the development server:

```bash
pnpm dev
```

## The Pokedex Problem

Problem summary

### Part 1

Provided a Pokemon javascript object structured as such:

```typescript
const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: ['grass'],
  sprite: 'https://pokemon.com/pictures/bulbasaur.png',
};
```

...create a reusable `<PokemonRow />` component (or the equivalent in your framework) that takes in `bulbasaur` as a property and renders a row with the name, id, type and sprite image

### Part 2

Provided a Pokemon javascript array structured as such:

```typescript
const pokemonArray = [
{
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite: "https://pokemon.com/pictures/bulbasaur.png"
}, {
  id: 2,
  ...
}, ...]
```

...create a `<PokedexTable />` component that takes in the array and renders all the pokemon in that array.

### Part 3

Provided a <PokemonTypeSelection /> component with the following props

```typescript
type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};
```

...create a `<FilterablePokedexTable />` component that renders both the `<PokemonTypeSelection />` component and `<PokedexTable />` component. Make sure you only display Pokemon with the selected type!
