import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  id: number;
}

export const FavoritesCardPokemon: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const handlePokemonClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: "10px" }}
        onClick={(e) => handlePokemonClick(id)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="pokemon"
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
