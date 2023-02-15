import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Inter } from "@next/font/google";
import {  Grid} from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemons";



interface Props {
  pokemons: SmallPokemon[];
}

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémon">
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name}/>
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151"); // your fetch function here
  const pokemons: SmallPokemon[] = data.results.map((pokemon, id) => ({
    ...pokemon,
    id: id + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      id + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
