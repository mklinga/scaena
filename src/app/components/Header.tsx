import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { H1 } from './Headers';

export function Header() {
  return (
    <header className="mb-6">
      <Link href="/">
        <H1>Dreams</H1>
      </Link>
      <nav>
        <Link
          href="/dreams/new"
          className="px-4 py-2 border rounded inline-flex text-neutral-100 bg-lime-500 hover:bg-lime-700"
        >
          <PlusCircleIcon className="size-6 inline-block pr-1" />
          <span>New</span>
        </Link>
      </nav>
    </header>
  );
}
