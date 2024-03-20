import { addRxPlugin, createRxDatabase, type RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { gameSchema, playerSchema } from '~/schemas';
import type { Game, PlayerStats } from "~/typings"



const space = useSpace()
// const player = usePlayer()

export const useGame = () => {

  const { $db } = useNuxtApp()
  const db = $db as RxDatabase

  function save(game:Game) {
    // serialized.value = JSON.stringify(game)
  }

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

  async function setShipIndex(shipIndex: number) {
    const game = await load()
    await game.patch({
      player: {
        ...game.toJSON().player,
        shipIndex
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
    await save(game)
  }
  
  async function load() {
    const game = await db.games.find().exec()
    return game[0]
  }

  async function loadJSON() {
    const game = await db.games.find().exec()
    return game[0].toJSON()
  }

  async function start() {  

    const existing = await $db.games.find().exec()    
    if (existing.length) {      
      return existing[0].toJSON()
    }

    const spaceData = space.generate()    
    const game: Game = {
      space: spaceData,
      player: {
        nickname: '',
        money: 1000,
        shipIndex: 0,
        faceIndex: 0,
        stats: {
          pilot: 0,
          hacker: 0,
          engineer: 0,
          trader: 0
        }
      }
    }
    
    $db.games.insert({
      id: `${new Date().getTime()}`,
      ...game
    })

    return game
  }  

  return { start, load, loadJSON, setNickname, setStats, setFaceIndex, setShipIndex }
} 
