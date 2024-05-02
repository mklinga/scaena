import { DreamDto } from '@/types';

export async function getListOfDreams(): Promise<DreamDto[]> {
  const response = await fetch('http://localhost:8080/dreams', { next: { tags: ['dreams'] } });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Server did not respond correctly!');
}

export async function getDream(id: number): Promise<DreamDto> {
  const response = await fetch(`http://localhost:8080/dreams/${id}`, { cache: 'no-store' });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Server did not respond correctly!');
}
