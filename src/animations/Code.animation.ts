import { gsap } from 'gsap'
import { MutableRefObject } from 'react'

export function moveRight(element: MutableRefObject<null>) {
    const { current } = element
    gsap.to(current, {
        x: 150,
        duration: 3,
        scale: 2,
        rotation: 360,
        color: "blue",
        ease: 'elastic'
    })
}
export function gsapTo(element: MutableRefObject<null>, styleObj: {}) {
    const { current } = element
    gsap.to(current, styleObj)
}