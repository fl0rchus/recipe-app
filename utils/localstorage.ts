import { Meal } from "@interfaces";

interface Item {
    id: number
    idMeal: string
    name: string
    image: string
}

export const toggleSave = (recipe: Item) => {
    let saved: Item[] = JSON.parse(localStorage.getItem("saved") || "[]")


    saved.map(item => {
        if (item.id == recipe.id) {
            saved = saved.filter(rec => rec.id != recipe.id)
        } else {
            saved.push(item)
        }
    })

    localStorage.setItem("saved", JSON.stringify(saved))
}