'use server'

import { revalidateTag } from "next/cache";

export async function deleteDream(id: number) {
    const response = await fetch(`http://localhost:8080/dreams/${id}`, { method: 'DELETE', cache: 'no-store' });

    if (!response.ok) {
        console.error("Not deleting this dream:", id);
    }

    revalidateTag('dreams');
}