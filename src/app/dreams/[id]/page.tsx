import { DreamRenderer } from '@/app/components/DreamRenderer';
import { H1 } from '@/app/components/Headers';
import TabView from '@/app/components/TabView';
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

  const tabs = [
    {
      id: 'draft',
      title: 'Draft',
      content: (
        <div>
          <DreamRenderer content={dream.description} />
        </div>
      ),
    },
    {
      id: 'dream',
      title: 'Dream',
      content: (
        <div>
          <DreamRenderer content={dream.description} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <H1>{dream.title}</H1>
        <DeleteButton id={params.id} />
      </div>
      <TabView tabs={tabs} defaultValue={dream.description ? 'dream' : 'draft'} />
    </div>
  );
}
