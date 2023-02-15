import React, { useState, useEffect } from "react";
import { Card, Grid } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useRouter } from "next/router";
import { FavoritesPokemon } from "@/components/pokemons";
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    setFavorites(localFavorites.favPoke());
  }, []);


  return (
    <Layout title="Favorites">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
