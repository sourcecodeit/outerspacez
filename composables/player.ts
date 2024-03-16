import { useStorage } from '@vueuse/core'

export const usePlayer = () => {

  const face = useStorage('face')
  const ship = useStorage('ship')
  const nickname = useStorage('nickname')

  return ref({ face, ship, nickname })
}
