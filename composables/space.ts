import { useStorage } from '@vueuse/core'
import type { Galaxy, Planet, Space, System } from "~/typings"

const galaxiesCount = 3
const maxSystemsPerGalaxy = 9
const maxPalnetPerSystem = 5
const starImages = 3
const planetImages = 28

/*

  Space
    - Galaxy
      - System
        - Star
        - Planet
        - Planet
      - System
        - Star
        - Planet
        - Planet
    - Galaxy
      - System
        - Star
        - Planet
        - Planet

*/
export const useSpace = () => {

  const utils = useUtils()
  const names = useNames()  
  const data = useStorage('space', (): string | null => null)
  const usedNames: String[] = []

  function getLocationName() {
    const name = names.getLocationName(usedNames)
    usedNames.push(name)
    return name
  }

  function generate() {
    const space: Space = {
      galaxies: []
    }

    for (let gIdx = 0; gIdx < galaxiesCount; gIdx++) {
      const galaxy: Galaxy = {
        name: getLocationName(),
        systems: []
      }

      space.galaxies.push(galaxy)

      for (let sIdx = 0; sIdx < utils.randomInt(3, maxSystemsPerGalaxy); sIdx++) { 
        const system: System = {
          star: {
            name: getLocationName(),
            imageIndex: utils.randomInt(0, starImages - 1)
          },
          name: `${galaxy.name} ${utils.intToRoman(sIdx + 1)}`,
          planets: []
        }

        galaxy.systems.push(system)

        for (let pIdx = 0; pIdx < utils.randomInt(2, maxPalnetPerSystem); pIdx++) { 
          const planet: Planet = {
            name: getLocationName(),
            imageindex: utils.randomInt(0, planetImages - 1),
            size: utils.randomInt(1, 3),
            distance: (pIdx * 1000) + utils.randomInt(10, 900)
          }          
          system.planets.push(planet)
        }
      }
    }
  
    return space
  }

  function save(space:Space) {    
    data.value = JSON.stringify(space)
  }

  function load(): Space|null {
    if (!data.value) {
      return null
    }
    return JSON.parse(data.value) as Space
  }
  
  return { generate, save, load }
}
