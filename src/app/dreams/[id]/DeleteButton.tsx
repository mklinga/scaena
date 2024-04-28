'use client';

import { deleteDream } from '@/app/actions/dreamActions';
import { DangerButton } from '@/app/components/Button';

export function DeleteButton({ id }: { id: number }) {
  return <DangerButton onClick={() => deleteDream(id)}>Delete</DangerButton>;
}
