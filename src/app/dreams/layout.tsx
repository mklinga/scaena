import { ReactNode } from 'react';
import { getListOfDreams } from '../actions/fetch';
import DreamList from '../components/DreamList';
import { Header } from '../components/Header';

export default async function DreamsLayout({ children }: { children: ReactNode }) {
  const dreams = await getListOfDreams();

  return (
    <main className="min-h-screen p-24">
      <Header />
      <div className="flex">
        <div className="basis-1/4">
          <DreamList dreams={dreams} />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
