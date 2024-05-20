import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Textarea, Select, Box, IconButton, useToast, Switch, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { testApiKey, sendInitialPrompt, fetchTools, updateToolStatus, fetchConfig, updateConfig } from "../api";
import { FaPlus, FaEdit, FaTrash, FaTools, FaCog, FaCheck } from "react-icons/fa";

const Index = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [llmSettings, setLlmSettings] = useState({ apiKey: "", baseUrl: "" });
  const [llmType, setLlmType] = useState("OpenAI");
  const [initialPrompt, setInitialPrompt] = useState("");
  const [terminalOutput, setTerminalOutput] = useState("");
  const [crewAIOutput, setCrewAIOutput] = useState("");
  const [tools, setTools] = useState([]);
  const [envConfig, setEnvConfig] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleAddAgent = () => {
    const newAgent = { name: "", role: "", description: "", tools: [] };
    setAgents([...agents, newAgent]);
    setSelectedAgent(newAgent);
  };

  const handleEditAgent = (index) => {
    setSelectedAgent(agents[index]);
  };

  const handleDeleteAgent = (index) => {
    const updatedAgents = agents.filter((_, i) => i !== index);
    setAgents(updatedAgents);
    setSelectedAgent(null);
  };

  const handleSaveAgent = () => {
    const updatedAgents = agents.map((agent) => (agent === selectedAgent ? selectedAgent : agent));
    setAgents(updatedAgents);
    setSelectedAgent(null);
  };

  const handleApiTest = () => {
    // Implement API test logic here
    toast({
      title: "API Test",
      description: "API test successful!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSendInitialPrompt = () => {
    // Implement sending initial prompt logic here
    setCrewAIOutput("CrewAI response...");
    setTerminalOutput("Terminal output...");
  };

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4} width="100%">
          <Button leftIcon={<FaPlus />} onClick={handleAddAgent}>
            Add Agent
          </Button>
          <Button leftIcon={<FaTools />} onClick={onOpen}>
            Tools
          </Button>
          <Button leftIcon={<FaCog />} onClick={onOpen}>
            Config
          </Button>
        </HStack>
        <HStack spacing={4} width="100%">
          <Select placeholder="Select LLM" value={llmType} onChange={(e) => setLlmType(e.target.value)}>
            <option value="OpenAI">OpenAI</option>
            <option value="Gemini">Gemini/Google</option>
            <option value="Groq">Groq</option>
            <option value="Ollama">Ollama</option>
            <option value="OpenRouter">OpenRouter</option>
          </Select>
          <Input placeholder="API Key" value={llmSettings.apiKey} onChange={(e) => setLlmSettings({ ...llmSettings, apiKey: e.target.value })} />
          <Input placeholder="Base URL" value={llmSettings.baseUrl} onChange={(e) => setLlmSettings({ ...llmSettings, baseUrl: e.target.value })} />
          <Button onClick={handleApiTest}>API TEST</Button>
        </HStack>
        <Textarea placeholder="Initial Prompt" value={initialPrompt} onChange={(e) => setInitialPrompt(e.target.value)} />
        <Button colorScheme="green" onClick={handleSendInitialPrompt}>
          SEND INITIAL PROMPT
        </Button>
        <Box width="100%" height="200px" bg="gray.800" color="white" p={4} overflowY="scroll">
          <Text>{crewAIOutput}</Text>
        </Box>
        <Box width="100%" height="100px" bg="black" color="white" p={4} overflowY="scroll">
          <Text>{terminalOutput}</Text>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tools</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {tools.map((tool, index) => (
              <FormControl display="flex" alignItems="center" key={index}>
                <FormLabel htmlFor={`tool-${index}`} mb="0">
                  {tool.name}
                </FormLabel>
                <Switch
                  id={`tool-${index}`}
                  isChecked={tool.enabled}
                  onChange={() => {
                    const updatedTools = tools.map((t, i) => (i === index ? { ...t, enabled: !t.enabled } : t));
                    setTools(updatedTools);
                  }}
                />
              </FormControl>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Config</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea value={envConfig} onChange={(e) => setEnvConfig(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
