import { getDream } from '@/app/actions/fetch';
import { DreamRenderer } from '@/app/components/DreamRenderer';
import DreamStatusBar from '@/app/components/DreamStatusBar';
import { H1 } from '@/app/components/Headers';
import { DeleteButton } from './DeleteButton';

export default async function DreamPage({ params }: { params: { id: number } }) {
  const dream = await getDream(params.id);

  return (
    <div className="flex flex-col grow">
      <div className="flex justify-between items-center">
        <H1>{dream.title}</H1>
        <DeleteButton id={params.id} />
      </div>
      <div className="grow border p-6 my-6">
        <DreamRenderer content={dream.description ?? dream.draft} />
      </div>
      <DreamStatusBar dream={dream} />
    </div>
  );
}
