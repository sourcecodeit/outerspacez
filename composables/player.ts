import { useStorage } from '@vueuse/core'
import type { Player } from '~/typings'

export const usePlayer = () => {

  const face = useStorage('face', () => 0)
  const ship = useStorage('ship', () => 0)
  const nickname = useStorage('nickname', () => '')
  const money = useStorage('money', () => 1000)

  const player:Player = {
    faceIndex: face.value,
    shipIndex: ship.value,
    nickname: nickname.value,
    money: money.value
  }

  return ref(player)
}
