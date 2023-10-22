# WeatherChat
Experimental project Rasa chatbot designed to interpret user intentions and provide weather forecasts for specified location. It reads enteties form chats and discovers the intent, it uses the entity to call the weather function after determining the location using the coordinates function and displays that on the screen.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
1. **Weather Intent Identification**: Basic intent identification for weather output using custom javascript functions and not python actions.


## Installation
1. Clone the repository to your directory.
2. Install Python - (check if you have python installed python --version.)
3. Install rasa - pip install rasa

## Configuration and setup

### Rasa:
1. From the directory where you want to install the rasa app run => rasa init - to initialize a new rasa project.
2. Select current directory when prompted
3. When prompted "Do you want to train an initial model"? select=> No
### Open `config.yaml` edit the pipeline
### Open `domain.yaml` and edit
4. Copy weather.js to the project folder
5. Copy coordinates.js to the project folder
6. Copy chat.html to the project folder
7. replace the nlu, rules and stories.yaml files in data folder with the repository file
8. replace test_stories.yaml in test folder
9. run rasa train (take a while)
10. rasa run (you may need to run it with api enabled) -> rasa run -m models --enable-api --cors "*"
11. Open chat.html and check the weather for a location

## Contributing
Contributions are welcome!.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
