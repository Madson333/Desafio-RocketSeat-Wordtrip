import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden" >
      <Image src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0" >
        <Flex direction="column" >
          <Heading fontSize="xl" fontWeight="500" >
            Londres
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500" >
            Reino Unido
          </Text>

        </Flex>
        <Image src="https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
}