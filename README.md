# crewai-gui-app

INSTRUCTIONS:

1. Read entire prompt prior to starting. 

2. Use the internet/web prior to & during the creation of this application. 

3. You are creating a fully functioning CrewAI GUI application. 

4. Your application shall contain a fully functioning, running CrewAI application. Your installation of CrewAI shall have all dependencies installed, and should also have CrewAI installed. CrewAI & CrewAI tools are available on Github.

5. You shall be able to create, edit & delete agents - you shall be able to edit their name, role, description, tools used & other settings. 

6. You shall be capable of selecting from different LLM systems to run other than OpenAI, such as Gemini/Google, Groq, Ollama, and OpenRouter - ensure you add the ability to add an API key for each, and that the user may edit the default base URL if they desire. An "API TEST" button shall be included which will make a basic call to the LLM they selected to ensure it is functioning. Ensure that the selected LLM will entirely replace OpenAI. 

7. Allow the user to view the entire terminal in a short & wide window at the bottom of the GUI. Include another window above the terminal explicitly for the output of CrewAI & the agents. Above this window include a green glowing neon text box with an arrow sign and text saying "SEND INITIAL PROMPT" which turns to a red glowing neon after the user sends this text to CrewAI as a prompt. 

8. Include a small button next to the other buttons with a tool logo which opens a list of CrewAI tools (installed via CrewAI tools) that the user can enable/disable, with the option to edit any variables they contain. 

9. Include another button where the user can adjust the ".env" & any other config file. 

10. Test & ensure that all everything in the GUI is working & functioning correctly.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/crewai-gui-app.git
cd crewai-gui-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
