### 1. Introduction
VP: Pinplay allows business owners to quickly and easily create playlists based on popular music preferences, appealing to local customer taste. 
Our product is a web application that can generate and save a playlist. The user can log into their pre-existing Spotify account through our web app and generate a playlist customized to their liking. The playlist generated can be based on a user’s location and input filters. The playlist can then be saved to a user’s Spotify library. 
Trello: https://trello.com/b/7oDcPr7u/issue-tracker
Github: https://github.com/emily-ramirez/PinPlay

### 2. Implemented Requirements
* User Stories
    * "As a barista, I want to be able to play new, fun music, so me and my customers don't get bored."
* Use Cases
    * Create Playlists
* MVP Requirements 
    * Generate and save a playlist
    * Validate the save feature by logging into a Spotify account through the web app and saving a playlist to the account’s library

### 3. Adopted Technologies
We used Django, a Python-based framework, for much of our development. Django was invaluable for us because it allowed us to write our backend code in a manner that could easily be translated into a web app project. We used React for our frontend. We chose React because we knew it was a good JavaScript library that would allow us to make an easy and flexible website and user interface. The react-router was used to handle navigation We used axios to connect it with the backend, and the react-spotify-auth and react-spotify-api libraries to do react authentication. Our project also involved the Spotify API, since Spotify is the app we’re generating playlists for. We also involved Shazam for fetching the location data of songs.

### 4. Learning/training
The team used a mix of strategies to learn the technologies we adopted for the project. One of these strategies was using Mix & Match Coursera online courses to learn skills and technologies that we could apply to making our app. Another valuable resource to us was a number of online tutorials and crash courses, especially various video series on youtube. We also made sure to use our unique backgrounds and skill sets to our advantage, applying our existing skills where best suited, and helped train each other on technologies that we had strengths in.

### 5. Deployment
To deploy our application to production, we serve it as a static application on a linux-based web host using NPM. Accordingly, we procured web hosting services and a domain name, used a File Transfer Protocol application to move our project's production directory to our host, implemented advised production settings for a Django server, and used NPM to create an optimized production build to be used on the domain and start our server.

Our application in production is located at http://pinplay.me/.

### 6. Licensing

**MIT License** 
* [MIT License](https://choosealicense.com/licenses/mit/)
* [Our License](../LICENSE)

We chose an MIT license because we want to keep our project open source so that anybody can make any changes they want to it. We don't want to restrict people from working with the API so that it can continue to be improved. 

### 7. Readme File
* [README](../README.md)
* [CONTRIBUTING](../CONTRIBUTING.md)
* [LICENSE](../LICENSE)
* [CODE OF CONDUCT](../CODE_OF_CONDUCT.md)

### 8. Look and Feel
We wanted to keep the user interface simple and usable, and pleasing to look at in a way that meshes well with the built-in Spotify API-related UI.

<img width="498" alt="Screen Shot 2021-03-21 at 4 38 08 PM" src="https://user-images.githubusercontent.com/75813227/111925001-3a099000-8a64-11eb-9ab5-903d5c1150d1.png">


Since this is not a finished product, some aspects of the visual design have not been finished. Missing visual elements have been indicated, but all the functional aspects of the UI are still in place.

<img width="1245" alt="Screen Shot 2021-03-21 at 4 37 49 PM" src="https://user-images.githubusercontent.com/75813227/111925042-6c1af200-8a64-11eb-9b22-1f0a56bd9f51.png">


### 9. Lessons Learned
None of us went into this project with any experience deploying complex backend code for a web application. This made the process of implementation very difficult and time consuming, with a sharp learning curve and some team members scrambling to learn web development —  on their own, in their already minimal free time, having never taken a web development class before. In retrospective, we could have benefited from realizing how monumental a task this would be sooner, and getting started on development well before D4 was even assigned. Even with the week-long extension, we struggled to find nearly enough time in our busy schedules to accomplish all of the expected tasks.

For the second release, we will learn from our time constraints on the first, and make sure we’re all on the same page on what problems and struggles we will face over the course of the implementation.

### 10. Demo
Video demo can be found here:
https://youtu.be/Xt7rj18fxn4

