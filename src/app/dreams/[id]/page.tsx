import { H1 } from "@/app/components/Headers";
import { DreamDto } from "@/types";

async function getDream(id: number): Promise<DreamDto> {
  const response = await fetch(`http://localhost:8080/dreams/${id}`, { cache: 'no-store' });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Server did not respond correctly!");
}

export default async function DreamPage({ params }: { params: { id: number } }) {
    const dream = await getDream(params.id);

    return (
    <main className="min-h-screen p-24">
      <H1>{dream.title}</H1>
      <p>{dream.description}</p>
    </main>
    )
}