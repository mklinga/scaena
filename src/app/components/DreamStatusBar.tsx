'use client';

import { DreamDto } from '@/types';
import { NeutralButton } from './Button';

export default function DreamStatusBar({ dream }: { dream: DreamDto }) {
  const status = Boolean(dream.description) ? 'dream' : 'draft';

  return (
    <div className="mb-6 flex justify-between">
      <span className="capitalize">{status}</span>
      {status === 'draft' ? (
        <NeutralButton className="ml-4" onClick={() => {}}>
          Transcribe
        </NeutralButton>
      ) : null}
    </div>
  );
}
