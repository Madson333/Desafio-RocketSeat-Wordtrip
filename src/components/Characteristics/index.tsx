import { Grid, GridItem } from "@chakra-ui/react";
import Features from "./feature";

export default function Characteristics() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={["1", "5"]}
    >
      <GridItem>
        <Features icon="cocktail" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Features
          icon="surf"
          text="Praia" />
      </GridItem>
      <GridItem>
        <Features icon="Building" text="Moderno" />
      </GridItem>
      <GridItem>
        <Features icon="museum" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]} >
        <Features icon="earth" text="E mais..." />
      </GridItem>
    </Grid>
  )
}