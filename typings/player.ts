import type { Spaceship } from "./spaceship"

export type PlayerStats = {
	pilot: number
	engineer: number
	trader: number
	hacker: number
}
export type Player = {
	nickname: string
	money: number,
	shipIndex: number,
	faceIndex: number,
	stats: PlayerStats,
	coordinates: number[]	
	spaceship: Spaceship
}