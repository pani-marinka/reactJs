
import { Text } from "@chakra-ui/react"
import { Box, Grid } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const Demo = () => {
  return (
    <> 
    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item One
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item Two
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item Three
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
</Grid>
</> 
  );
}
