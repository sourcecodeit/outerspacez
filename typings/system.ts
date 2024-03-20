import type { Planet, Star } from "."

export type System = {
	name: String
	star: Star
	planets: Planet[]
}