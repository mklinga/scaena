import DreamList from './components/DreamList';

import { getListOfDreams } from './actions/fetch';
import { Header } from './components/Header';

export default async function Home() {
  const dreams = await getListOfDreams();

  return (
    <main className="min-h-screen p-24">
      <Header />
      <div className="flex">
        <div className="basis-1/4">
          <DreamList dreams={dreams} />
        </div>
        <div>Dashboard...</div>
      </div>
    </main>
  );
}
