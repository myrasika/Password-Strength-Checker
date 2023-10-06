# Password-Strength-Checker
Live demo [here](https://passwordchecks.herokuapp.com).

This application allows the user to register and login to the server by utilizing passport.js local method. During signup, the password's strength will be tested against Dropbox's zxcvbn.
# Prerequisites
- Node.js - Download and install [here](https://nodejs.org/en/download).
- MongoDB - Download and install [here](https://www.mongodb.com/download-center).
# Installation
- Clone the Repository.
```
$ git clone https://github.com/nashkenazy/Password-Strength-Checker.git
```
- Navigate to the root directory in command line and run the following command to install the package.json dependencies:
```
$ npm install
```
# Running the Application
There are a couple of methods to start the application.
## First option: start-site.bat
Run start-site.bat, which will open two command prompts and run their commands. Edit the first line of the .bat file to your path of mongod.exe (as it is set to my configurations).
## Second Option: Manually Run the Servers
1. Run mongod.exe (either through the command line or .exe file).
2. Open the command line in the root directory and run Node.js server.
```
$ npm start
```
## License
No license.
