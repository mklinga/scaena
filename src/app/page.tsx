import DreamList from "./components/DreamList";

import type { DreamDto } from '../types';
import { H1 } from "./components/Headers";

async function getHelloMessage() {
  const response = await fetch('http://localhost:8080/hello', { cache: 'no-store' });

  if (response.ok) {
    return response.text();
  }

  throw new Error("Server did not respond correctly!");
}

async function getListOfDreams() {
  const response = await fetch('http://localhost:8080/dreams', { cache: 'no-store' });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Server did not respond correctly!");
}

export default async function Home() {
  const message = await getHelloMessage();
  const dreams = await getListOfDreams() as DreamDto[];

  return (
    <main className="min-h-screen p-24">
      <H1>{message}</H1>
      <DreamList dreams={dreams} />
    </main>
  );
}
