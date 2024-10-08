import { type RxDatabase } from 'rxdb';
import type { Game, PlayerStats, System } from "~/typings"
import type { Spaceship } from '~/typings/spaceship';

const space = useSpace()

export const useGame = () => {

  const { $db } = useNuxtApp()
  const db = $db as RxDatabase

  async function setNickname(nickname: string) {
    const game = await load()
    await game.patch({      
      player: {
        ...game.toJSON().player,
        nickname
      }
    })
  }

  async function setFaceIndex(faceIndex: number) {
    const game = await load()
    await game.patch({
      player: {
        ...game.toJSON().player,
        faceIndex
      }
    })
  }

  async function setPlayerShip(shipIndex: number) {
    const game = await load()
    const spaceships = useShips()
    await game.patch({
      player: {
        ...game.toJSON().player,
        shipIndex,
        spaceship: {
          fuel: spaceships.value[shipIndex].fuel_max,
          hull: spaceships.value[shipIndex].hull,
        }
      }
    })
  }

  async function setStats(stats: PlayerStats) {
    const game = await load()
    await game.patch({
      player: {
        ...game.toJSON().player,
        stats
      }      
    })
  }
  
  async function load() {
    const game = await db.games.find().exec()
    return game[0]
  }

  async function loadJSON() {
    const game = await db.games.find().exec()
    if (game.length == 0) {
      return null
    }
    return game[0].toJSON() as Game
  }

  async function getPlayerPlanet() {
    const game = await loadJSON()
    const coordinates = game.player.coordinates
    return game.space?.galaxies[coordinates[0]].systems[coordinates[1]].planets[coordinates[2]]
  }

  async function getPlayerSystem() {
    const game = await loadJSON()
    const coordinates = game.player.coordinates
    return game.space?.galaxies[coordinates[0]].systems[coordinates[1]] as System
  }

  async function getPlayerStar() {
    const game = await loadJSON()
    const coordinates = game.player.coordinates
    return game.space?.galaxies[coordinates[0]].systems[coordinates[1]].star
  }

  async function start() {  
    const existing = await $db.games.find().exec()    
    if (existing.length) {    
      await existing[0].remove()
    }

    const spaceships = useShips()

    const spaceData = space.generate()    
    const game: Game = {
      space: spaceData,
      player: {
        nickname: '',
        money: 1000,
        shipIndex: 0,
        faceIndex: 0,
        coordinates: [0, 0, 0],
        stats: {
          pilot: 0,
          hacker: 0,
          engineer: 0,
          trader: 0
        },
        spaceship: {
          fuel: spaceships.value[0].fuel_max,
          hull: spaceships.value[0].hull,
        }
      }
    }
    
    $db.games.insert({
      id: `${new Date().getTime()}`,
      ...game
    })

    return game
  }  

  return {
    start,
    load,
    loadJSON,
    setNickname,
    setStats,
    setFaceIndex,
    setShipIndex: setPlayerShip,
    getPlayerPlanet,
    getPlayerStar,
    getPlayerSystem
  }
} 
