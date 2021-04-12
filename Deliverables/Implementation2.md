# Implementation 2
*Group 06 – `PinPlay`\
Date: `04/11/2021`\
Group Members: Karina Anaya, Sophia Frohna, Samantha Milligan, Jacob Penney, Emily Ramirez Serrano, Lucina de la Rosa*

## 1. Introduction
Pinplay is a web application that allows users to quickly and easily create playlists based on popular music preferences in their area of interest. It seeks to add to Spotify’s existing functionality by offering more personalized playlists to the user. The system draws upon location data from Shazam to provide the top hits of the area for the new playlist. Users are able to securely log into their Spotify account on Pinplay to start accessing the functionality of the website. After the user  has been authenticated, a playlist can be created directly to their Spotify account with minimal work from the user. 

Github - https://github.com/emily-ramirez/PinPlay \
Trello - https://trello.com/b/7oDcPr7u/issue-tracker 
## 2. Implemented Requirements

Note: Many of our implemented requirements involved contributions from several team members. All contributors to an implemented requirement will be listed, in no particular order.

In addition, not all requirements were implemented in a single pull, and not all pulls impacted only one requirement. For clarity, only one Github link will be provided as a representative for each requirement described. This may mean a team member can be listed as both a contributor and a reviewer for a requirement. This does not mean they reviewed their own pull request. It just means they were QA for the one specific pull request shown.

**Issue: "Add ability to log out"**

Trello link: https://trello.com/c/lKdr0r6D/27-add-ability-to-log-out

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/63

Team members who contributed: Lucina

Pull request reviewed by: Emily

**Issue: "Update visual aspect of website"**

Trello link: https://trello.com/c/STm05jYR/26-update-visual-aspect-of-website

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/64

Team members who contributed: Karina

Pull request reviewed by: Emily

**Issue: "Add filters for playlist customization"**

Trello link: https://trello.com/c/yZjb85rw/29-add-filters-for-playlist-customization

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/61

Team members who contributed: Lucina

Pull request reviewed by: Emily

**Issue: "Add button to make an additional playlist"**

Trello link: https://trello.com/c/yyCeOa4f/30-add-button-to-make-an-additional-playlist

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/62

Team members who contributed: Lucina

Pull request reviewed by: Emily

**Issue: “Develop simple playlist generator”**

Trello link: https://trello.com/c/5eHKN1mp/14-develop-simple-playlist-generator

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/22

Team members who contributed: Jacob, Emily, Samantha, Lucina

Pull request reviewed by: Sophia

Screenshot of feature:

<img width="316" alt="Screen Shot 2021-04-08 at 2 39 28 PM" src="https://user-images.githubusercontent.com/75813227/114103219-939ff600-987d-11eb-94de-8e217dddeaee.png">

**User story: "As a business owner, I want to select my business location so that customers can find playlists near them."**

Trello link: https://trello.com/c/a5fpuTpp/3-as-a-business-owner-i-want-to-select-my-business-location-so-that-customers-can-find-playlists-near-them

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/27

Team members who contributed: Jacob

Pull request reviewed by: Sophia


**User story: "As a desktop user, I want to discover new music around me so that I may support my local music scene."**

Trello link: https://trello.com/c/Lv2GGzkk/7-as-a-desktop-user-i-want-to-discover-new-music-around-me-so-that-i-may-support-my-local-music-scene

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/23

Team members who contributed: Lucina, Karina

Pull request reviewed by: Sophia

**Issue: “Creating visual aspects of website design”**

Trello link: https://trello.com/c/MmeYb8px/18-creating-visual-aspects-of-website-design

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/59

Team members who contributed: Lucina, Sophia, Karina

Pull request reviewed by: Emily

Screenshot of feature:

<img width="1236" alt="Screen Shot 2021-04-08 at 2 34 29 PM" src="https://user-images.githubusercontent.com/75813227/114103238-9d295e00-987d-11eb-9297-6d0eb988ef5b.png">

**Issue: “Need to coordinate with front-end on Spotify login info”**

Trello link: https://trello.com/c/dvebGKYf/16-need-to-coordinate-with-front-end-on-spotify-login-info

Representative pull request link: https://github.com/emily-ramirez/PinPlay/pull/38

Team members who contributed: Lucina, Samantha, Jacob, Karina, Emily

Pull request reviewed by: Emily

Screenshot of feature:

<img width="339" alt="Screen Shot 2021-04-08 at 3 06 34 PM" src="https://user-images.githubusercontent.com/75813227/114103247-a4e90280-987d-11eb-9ba9-a03a90968c0a.png">


## 3. Demo
Video Link: https://youtu.be/belj8mO9anI

## 4. Code Quality
* **Division of labor** - our team has varied proficiencies and interests. It felt fitting to divide our team into teams, where our members could devote their time to the area which they understood best and were most interested in cultivating skills in.

* **Peer review** - Both code development teams (back end and front end) internally reviewed team members' codes, looking for potential improvement in readability and logic.

* **Utilization of varied technologies** - We examined code through a variety of linting tools. Where IDEs and some text editors have their own linting utilities built-in, others allow for more control over what tools the code can be examined with. Errors in our code were found using some tools but not with others.

* **Planned redundancy** - After serious struggle to deploy our backend to production, our back end team members collaborated on as well as independently created functionality for this deliverable in an attempt to safeguard against failure.

## 5. Lessons Learned
1. **Anticipating hurdles is difficult** - During the course of implementing a database to store the information that our back end relies upon for this deliverable, we ran into unforeseen complications where our deployment container service and database intersect; Heroku, the platform that we rely upon to contain our backend, clears its own contents periodically. Our database, SQLite3, uses files to store it's contents, allowing it to be used serverless. We felt that this quality made implementing SQLite3 convenient, until one of our members discovered the aforementioned quality of Heroku. To maintain our database, then, we are forced to either create a new database file on the server or host the database file that we need someplace else and upload it to our server every 24 hours. This exemplary issue, as well as others we experienced, elucidates the need for either thorough planning at the outset, as a team might do using the waterfall model in a professional setting, as well as/or a flexible and incremental approach, as a team might use when employing Agile principles. 
2. **More and more thorough planning and documentation would be useful** - A constant theme throughout our implementation and deployment processes, we departed from the plans we created earlier in the semester as we began to experience issues with the actual creation of our project. The reasons feel varied: sometimes, our plans felt as though they didn’t reflect the reality of what we were trying to create and, other times, we could not solve how to implement something using the technologies we planned to. 
3. **For a group of neophytes, it can be difficult to adhere to relatively unfamiliar software engineering practices** - Some of the documentation that we prepared earlier in the semester, such as user stories, and the plans that we had for those pieces of documentation fell by the wayside as we changed the plans for our project. It feels as though, as we scaled back the amount and changed the types of functionality that we planned to implement for our project, the plans we created no longer served us and we began to work not from new documentation but from plans spoken about in meetings and written in our group communication space. A more seasoned group of developers may have, because of their training and experience, instead begun to refactor documentation or create new pieces which accurately discussed the new direction that the project was taking. 
