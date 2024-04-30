import React, { useState } from "react";
import { Box, Flex, Text, Button, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue, IconButton, Icon, Spacer } from "@chakra-ui/react";
import { FaPlus, FaRegChartBar, FaRegListAlt, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [leads, setLeads] = useState(120);
  const [newSales, setNewSales] = useState(80);
  const [oldSales, setOldSales] = useState(200);
  const [isDark, setIsDark] = useState(false);

  const toggleColorMode = () => {
    setIsDark(!isDark);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} minH="100vh" p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Sales Dashboard
        </Text>
        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} size="md" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={8} mt={10}>
        <StatGroup title="New Leads" statNumber={leads} icon={<FaPlus />} onIncrement={() => setLeads(leads + 1)} />
        <StatGroup title="New Sales" statNumber={newSales} icon={<FaRegChartBar />} onIncrement={() => setNewSales(newSales + 1)} />
        <StatGroup title="Old Sales" statNumber={oldSales} icon={<FaRegListAlt />} onIncrement={() => setOldSales(oldSales + 1)} />
      </VStack>
    </Box>
  );
};

const StatGroup = ({ title, statNumber, icon, onIncrement }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor={useColorModeValue("gray.200", "gray.600")} borderRadius="md" bg={useColorModeValue("white", "gray.800")}>
      <HStack>
        <Box p={3} bg={useColorModeValue("gray.200", "gray.600")} borderRadius="md">
          <Icon as={() => icon} w={6} h={6} color={useColorModeValue("blue.500", "blue.300")} />
        </Box>
        <VStack align="start">
          <StatLabel fontWeight="medium" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl">{statNumber}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23% since last month
          </StatHelpText>
        </VStack>
        <Spacer />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onIncrement}>
          Increment
        </Button>
      </HStack>
    </Stat>
  );
};

export default Index;
