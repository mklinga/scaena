import { H1 } from '@/app/components/Headers';
import { DreamDto } from '@/types';
import { DeleteButton } from './DeleteButton';

async function getDream(id: number): Promise<DreamDto> {
  const response = await fetch(`http://localhost:8080/dreams/${id}`, { cache: 'no-store' });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Server did not respond correctly!');
}

export default async function DreamPage({ params }: { params: { id: number } }) {
  const dream = await getDream(params.id);

  return (
    <div>
      <div className="flex justify-between">
        <H1>{dream.title}</H1>
        <DeleteButton id={params.id} />
      </div>
      <div>{dream.description}</div>
    </div>
  );
}
