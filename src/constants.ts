import heroImage from './img/gothic-hero-idle.png'
import demonImage from './img/demon-idle.png'
import gameConfig from './config'

export type Contender = {
  name: string
  image: string
  health: number
  height: number
  width: number
}

const player: Contender = {
  name: 'Gothic hero',
  image: heroImage,
  health: gameConfig.playerHealth,
  height: 245,
  width: 200,
}

const enemy: Contender = {
  name: 'Demon',
  image: demonImage,
  health: gameConfig.playerHealth,
  height: 288,
  width: 306,
}

export { player, enemy }
