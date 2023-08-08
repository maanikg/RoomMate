![image](https://github.com/maanikg/RoomMateUofT/assets/98338848/1007b874-53f9-44e6-a36e-bd7bc4077af9)# 🏡 RoomMate 

[Check out the full project Devpost here!](https://devpost.com/software/roommate-w51k46)

The previous process of finding roommates was unappealing, difficult, and at many times ineffective. A more modern model would help with the user experience of securing a compatible roommate.

About the project:
- The program is a fully functional full stack web app that allows users to log in or create a profile, and find other students for roommates
- The app includes a chat functionality which creates a chat room between two people who have matched each other that allows users to communicate in realtime
- Users are automatically recommended by an AI model based on users' preferences (ex. program of study, sleep schedule, etc.)

The process:
- Created the application frontend with `React.js`
- Set up up a database using `MonogoDB` to act as our backend to the project and to store our users profiles, data, and messages
- Implemented the AI model to curate roomate recommendations via a `Python` backend using the `pandas` library (reading through the database and computing a compatibility score between 2 people)
- Integrated the database, backend, and frontend together using the `Flask` and `PyMongo` libraries

----

### 💻 Tech Stack: 
<img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffdd55" height="30" alt = "Python" /> <img src="https://img.shields.io/badge/-pandas-150458?style=flat&logo=pandas&logoColor=white" height="30" alt = "Pandas" />
<img src="https://img.shields.io/badge/-JavaScript-31322f?style=flat&logo=javascript&logoColor=F7DF1E" height="30" alt = "Javascript"/>
<img src="https://img.shields.io/badge/-ReactJS-61DAFB?style=flat&logo=react&logoColor=282c34" height="30" alt = "ReactJS" /> 
<img src="https://img.shields.io/badge/-Flask-black?style=flat&logo=flask&logoColor=white" height="30" alt = "Flask" />
<img src="https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js&logoColor=77b65d" height="30" alt = "NodeJS" />
<img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=darkgreen" height="30" alt = "MongoDB" />
