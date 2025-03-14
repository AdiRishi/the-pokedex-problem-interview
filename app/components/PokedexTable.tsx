import type { Pokemon } from '../types/pokemon';
import styles from './PokedexTable.module.css';
import { PokemonRow } from './PokemonRow';

interface PokedexTableProps {
  pokemon: Pokemon[];
}

export function PokedexTable({ pokemon }: PokedexTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.idHeaderCell}>ID</th>
          <th className={styles.nameHeaderCell}>Name</th>
          <th className={styles.typesHeaderCell}>Types</th>
          <th className={styles.spriteHeaderCell}>Sprite</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((p) => (
          <PokemonRow key={p.id} pokemon={p} />
        ))}
      </tbody>
    </table>
  );
}
