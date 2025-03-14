import type { Pokemon } from '../types/pokemon';
import styles from './PokemonRow.module.css';

interface PokemonRowProps {
  pokemon: Pokemon;
}

export function PokemonRow({ pokemon }: PokemonRowProps) {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{pokemon.id}</td>
      <td className={styles.nameCell}>{pokemon.name}</td>
      <td className={styles.cell}>{pokemon.types.join(', ')}</td>
      <td className={styles.spriteCell}>
        <img
          src={pokemon.sprite}
          alt={`${pokemon.name} sprite`}
          className={styles.sprite}
        />
      </td>
    </tr>
  );
}
