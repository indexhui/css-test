import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100%"
        textAlign="center"
        fontSize="xl"
        justify="center"
        pt="80px"
      >
        <Flex
          w="200px"
          border="1px solid"
          borderColor="blue.500"
          h="52px"
          overflowX="scroll"
          wrap="nowrap"
        >
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red"></Flex>
          <Flex flexShrink="0" w="50px" h="50px" border="1px solid red">
            last
          </Flex>
          <Flex flexShrink="0" w="10px" h="50px">
            <Flex
              w="50px"
              h="50px"
              ml="-40px"
              bg="linear-gradient(270deg, #3A3A3A 0%, rgba(65, 65, 65, 0.00) 100%)"
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
