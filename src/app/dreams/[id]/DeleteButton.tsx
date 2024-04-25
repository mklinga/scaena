"use client"

import { deleteDream } from "@/app/actions/dreamActions"

export function DeleteButton({ id } : { id: number }) {
    return <button type="button" onClick={() => deleteDream(id)}>Delete</button>
}