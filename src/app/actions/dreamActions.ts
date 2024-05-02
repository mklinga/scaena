'use server';

import { revalidateTag } from 'next/cache';

export async function deleteDream(id: number) {
  const response = await fetch(`http://localhost:8080/dreams/${id}`, { method: 'DELETE', cache: 'no-store' });

  if (!response.ok) {
    console.error('Not deleting this dream:', id);
  }

  revalidateTag('dreams');
}

export async function createDream(formData: FormData) {
  const dreamDto = { title: formData.get('title'), draft: formData.get('draft') };

  const result = await fetch('http://localhost:8080/dreams', {
    method: 'POST',
    body: JSON.stringify(dreamDto),
    headers: { 'Content-type': 'application/json' },
  });

  revalidateTag('dreams');
}
