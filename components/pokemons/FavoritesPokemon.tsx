import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoritesCardPokemon } from './FavoritesCardPokemon'

interface Props {
    favorites: number[]
}

export const FavoritesPokemon: React.FC<Props> = ({favorites}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
    {favorites.map((id) => (
        <FavoritesCardPokemon id={id} key={id} />
    ))}
  </Grid.Container>
  )
}
