import Link from 'next/link';
import { ReactNode } from 'react';

export default function DreamsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="p-3">
        <Link href="/">root</Link>
        <span> - Dreams</span>
      </nav>
      {children}
    </div>
  );
}
