import { ReactNode } from 'react';
import { getListOfDreams } from '../actions/fetch';
import DreamList from '../components/DreamList';
import { Header } from '../components/Header';

export default async function DreamsLayout({ children }: { children: ReactNode }) {
  const dreams = await getListOfDreams();

  return (
    <main className="min-h-screen p-24 flex flex-col">
      <Header />
      <div className="flex grow">
        <div className="basis-1/4">
          <DreamList dreams={dreams} />
        </div>
        <div className="flex grow">{children}</div>
      </div>
    </main>
  );
}
