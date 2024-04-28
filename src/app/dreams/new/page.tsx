import { SuccessButton } from '@/app/components/Button';
import { TextArea, TextInput } from '@/app/components/Inputs';
import { revalidateTag } from 'next/cache';

export default function NewDream() {
  async function createDream(formData: FormData) {
    'use server';

    const dreamDto = { title: formData.get('title'), description: formData.get('description') };
    const result = await fetch('http://localhost:8080/dreams', {
      method: 'POST',
      body: JSON.stringify(dreamDto),
      headers: { 'Content-type': 'application/json' },
    });

    revalidateTag('dreams');
  }

  return (
    <form action={createDream}>
      <div className="flex flex-col">
        <label htmlFor="title" className="py-5">
          Title
        </label>
        <TextInput name="title" type="text" />
        <label htmlFor="description" className="py-5">
          Description
        </label>
        <TextArea name="description" rows={20} />
      </div>
      <SuccessButton type="submit">Save</SuccessButton>
    </form>
  );
}
