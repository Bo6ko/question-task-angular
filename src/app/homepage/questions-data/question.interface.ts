import { Answear } from "./answear.interface"

export interface Question {
    id: number,
    question: string,
    answears: Answear[],
    marked?: boolean
}