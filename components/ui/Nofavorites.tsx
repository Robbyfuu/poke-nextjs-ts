import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh-100px)",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        }
        height={250}
        width={250}
        alt={"pokemon"}
      />
    </Container>
  );
};
