import type { Route } from './+types/home';
import { Pokedex } from '~/pages/pokedex';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Pokedex Problem' },
    { name: 'description', content: 'Can you list them all?' },
  ];
}

export default function Home() {
  return (
    <div>
      <Pokedex />
    </div>
  );
}
