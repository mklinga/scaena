
async function getHelloMessage() {
  const response = await fetch('http://localhost:8080/hello', { cache: 'no-store' });

  if (response.ok) {
    return response.text();
  }

  throw new Error("Server did not respond correctly!");
}

export default async function Home() {
  const message = await getHelloMessage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{message}</h1>
    </main>
  );
}
