import React,{ useState} from "react";


import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";

import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon: { id, name, sprites } }) => {
  
    const [isFavorite, setIsFavorite] = useState(localFavorites.existInFavorites(id))
    const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id)
    setIsFavorite(!isFavorite)
    if(!isFavorite){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle:-100,
        origin: { x: 1 }
      });
    }
  };

    return (
    <Layout title={name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || "no-image.png"}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
           <Card>
            <Card.Header css={{display:'flex', justifyContent:'space-between' }} >
                <Text transform="capitalize" h1>
                    {name}
                </Text>
                <Button color={'gradient'} onClick={onToggleFavorite} ghost={!isFavorite} >
                    {isFavorite? 'Eliminar de Favoritos'  :'Guardar en Favoritos'}
                </Button>
            </Card.Header>
            <Card.Body>
                <Text size={30} >
                    Sprites:
                    <Container direction="row" gap={0} >
                        <Image src={sprites.front_default} alt={name} width={100} height={100} />
                        <Image src={sprites.back_default} alt={name} width={100} height={100} />
                        <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
                        <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
                    </Container>
                </Text>
            </Card.Body>
            </Card> 
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false,
    }
  }
}

  return {
    props: {
      pokemon
    },
    revalidate: 86400, // 24 hours
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
