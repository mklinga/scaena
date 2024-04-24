import { revalidateTag } from "next/cache";

export default function NewDream() {
    async function createDream(formData: FormData) {
        "use server";

        const dreamDto = { title: formData.get('title'), description: formData.get('description') };
        const result = await fetch(
            "http://localhost:8080/dreams",
            {
                method: "POST",
                body: JSON.stringify(dreamDto),
                headers: { 'Content-type': 'application/json' }
            })

        revalidateTag('dreams');
        console.log({ result: await result.json() })
    }

    return <main className="min-h-screen p-24">
        <form action={createDream}>
            <label htmlFor="title" className="p-5">Title</label>
            <input name="title" type="text" />
            <br />
            <label htmlFor="description" className="p-5">Description</label>
            <textarea name='description'></textarea>
            <button type="submit">Save</button>
        </form>
    </main>
}