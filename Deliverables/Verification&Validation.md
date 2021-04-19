
# Verification & Validation

*Group 06 – `PinPlay`\
Date: `04/17/2021`\
Group Members: Karina Anaya, Sophia Frohna, Samantha Milligan, Jacob Penney, Emily Ramirez Serrano, Lucina de la Rosa*

## 1. Description
PinPlay is a web application that automatically generates playlists to add to a user's Spotify library. Users can supply the generator with a preferred genre, whether or not to allow explicit songs in the playlist, and a city for finding popular music by location. PinPlay is designed especially for use by businesses and workers, so they can create playlists customized to local taste that customers will enjoy.

## 2. Verification (tests)

### 2.1. Unit Test

### 2.2. Integration Test
2.2.1: Selenium CLI

2.2.2: https://github.com/emily-ramirez/PinPlay/tree/master/Testing/IntegrationTest
 
2.2.3: https://github.com/emily-ramirez/PinPlay/blob/master/Testing/IntegrationTest/integration_test.py
       - This test exercises the entire pipeline of our application as it is now: It logs the user in, selects a set of filters which modify the playlist, submits the information so that the playlist can be generated, and logs the user out.

2.2.4: https://www.youtube.com/watch?v=aAaGVVCSRH8

### 2.3. Acceptance Test
Selenium IDE was used to perform the acceptance tests. 
Acceptance test folder: https://github.com/emily-ramirez/PinPlay/tree/master/Testing/AcceptanceTests
Example test link: https://github.com/emily-ramirez/PinPlay/blob/master/Testing/AcceptanceTests/test_loginandplaylistgenerationNonexplicitDancePhx.py
Here, the feature tested is the generation of a Phoenix-local, non-explicit, dance music playlist. This test includes login and is successful on the current build.
Video of this test executing: https://github.com/emily-ramirez/PinPlay/blob/master/Testing/AcceptanceTests/AcceptanceTestVideo.mp4

## 3. Validation

### Script
**Tasks** 
* Ask the user to log into their spotify account 
* Have user create two different playlists with different customization options
* Have user verify that the playlists were created on their account

**Collection**
* How long it takes for the user to create a playlist
* Ensure that the correct amount of playlists were created 
* Any errors that come up in the process

**Questions**
* How simple is it to use the website?
* Is there anything that is missing that is offered by similar services?
* On a scale of 1 to 10, how satisfied were you with the playlists that were generated. 
* On a scale of 1 to 10, how would you rate the layout of the application?


### Results

#### *Interviewed user 1: Isabel Flores*

**Tasks**
- The user logged into her spotify account without any issues. 
- The first playlist was creating with LA, explicit on, and party filters.
- The second playlist was created with PHX, explicit off, and on preferred genre.
- The playlists were addded to their account successfully.

**Collection**
- It took about 40 seconds to create each playlist
- The user repeatedly clicked "Submit" during loading and ended up with multiple redundant playlists. 
- The website displayed an empty playlist in the preview even though it was filled in their Spotify account. 

**Questions**

Q: *How simple is it to use the website?*\
A: Everything was really clear and the user was not confused on what to do

Q:  *Is there anything that is missing that is offered by similar services?*
A: The user would have wanted the ability to update the playlist after it's been created

Q: *On a scale of 1 to 10, how satisfied were you with the playlists that were generated?*
A: 7/10, The user was looking for popular music and got it 

Q: *On a scale of 1 to 10, how would you rate the layout of the application?*\
A: 8/10, The layout is simple but the user mentioned that there could be more done to make it stand out more. 
  
#### *Interviewed user 2: Skyler Bolton*

**Tasks**
- The user was able to log into his spotify account without any issues.

**Collection**
- Making the playlist took less than 20 seconds, and only one playlist was created for each attempt.
- The user verified his account and confirmed that the playlist was created on said account.
- The first playlist worked well, but attempting to make a playlist with the indie pop genre resulted in an empty playlist.
- Attempting to log out on the '/filters' page gave the user a 404 error.
- Clicking on the Pinplay logo in the header sent the user to a blank index.html page.

**Questions**

Q: *How simple is it to use the website?*\
A: The user found the process of using the website very simple.

Q: *Is there anything that is missing that is offered by similar services?*\
A: The one thing the user said was missing was a way to deal with empty playlists other than just creating and displaying them, such as making the user choose a different option.

Q: *On a scale of 1 to 10, how satisfied were you with the playlists that were generated.*\
A: The user rated playlist satisfaction at an 8: the playlists were created correctly according to the parameters, but having the empty playlist issue brought the score down.

Q: *On a scale of 1 to 10, how would you rate the layout of the application?*\
A: The user rated the layout as a 7: he had some confusion with the "choose a city" dropdown and also wishes there was a loading screen to show that the playlist was in the process of being created.

#### *Interviewed user 3: Jared Tee*

**Tasks**
- User was able to login to Spotify without issue but needed to refresh the page.
- User selected NYC , Explicit, and EDM as the first playlist.
- User selected LA, NonExplicit, and Rap as the second playlist.
- User selected PHX, Explicit, and Country as the third playlist.
- User ran the filter page without selecting any options.
- User clicked logout on the Filter page.
- User click the header to the homepage.

**Collection**
- The User created 3 playlists with different results and many had at least one song or none at all.
- User clicked to logout on the Filter selection page getting an Error.
- User can create multiple playlist without selecting any filter options just by click Select one of multiple times.
- User can create playlist with just one option selected.
- User clicking the header to the homepage sents the user to index.html and not the actual homepage.

**Questions**

Q:*How simple is it to use the website?*\
A: It is simple, simple enough not complicated.

Q:*Is there anything that is missing that is offered by similar services?*\
A: Larger database of songs. I would also like to have something that compares what's trending on Youtube vs Tik tok vs Spotify.

Q:*On a scale of 1 to 10, how satisfied were you with the playlists that were generated.*\
A: 10, The playlist I've created by hand I rarely listen to so getting an auto-generated playlist that has the latest music trends makes it easier for me.

Q:*On a scale of 1 to 10, how would you rate the layout of the application?*\
A: 7, Its nice when you generate the playlist filter options but the window is too small. Make it bigger. As well as the playlist itself is too small make it bigger.

### Reflections

* User 1

The website was working as intended and the user did not much find much difficulty in creating a playlist. When the playlist is being generated there should be  a loading page so that the user does not repeatedly click "Submit" which creates multiple unintended playlists. There is no learning curve, but sometimes there will be impatient users who will click the buttons repeatedly. The user was able to perform the tasks given to them without any issue and they liked how easy it was to create the actual playlist. Based on the feedback, I would say that the value proposition was a success. 

* User 2

Overall, it seems that the website worked well, with only a few minor errors that need fixing. The website's way of handling web pages needs some work since logging out can give a 404 error and the link in the header does not work, but the rest of it works correctly. There is no learning curve, other than a bit of confusion with what the city selection dropdown does. The user was able to perform tasks as expected and the actions produced the expected results, with the exception of the indie pop issue. The user liked the simplicity of using the website the most, since the process was very streamlined and simple. Based on this feedback, I would say that the value proposition was accomplished.

* User 3

The website worked as expected, the user was able to go through the steps as instructed but then when I left the user to mess with the website with the intention to see any errors or break the issues appeared. The first issue appears with logging in and logging out can break the site if done on a page that's not the homepage. Another issue of playlists being inconsistant on the number of songs it generates. The user also added additional comments such as "maybe add a loading screen when generating the playlists". As well as "Change the name of what the playlist is called after generation". Overall, the user did enjoyed the simplitiy of the site and expressed they will plan to use it if available. In this interview, I say that we accomplished the value proposition.
