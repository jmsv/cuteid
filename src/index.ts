import adjectives from './adjectives'
import nouns from './nouns'

const pick = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

const plural = () => (Math.random() >= 0.5 ? 's' : '')

export const generate = () => `${pick(adjectives)}-${pick(nouns)}${plural()}`
