import { createEffect } from "effector";


export const fetchTask = createEffect(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, text: 'lorem ispum', completed: false, priority: 2},
                {id: 2, text: 'lorem ispum dolar', completed: false, priority: 1},
                {id: 3, text: 'Lorem ipsum dolor sit amet.', completed: false, priority: 3},
            ])
        }, 1500)
    })
})