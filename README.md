# Getting Started - Friend Finder
### 1. Why / Background
  * This is Berkeley Coding Boot Camp (BCBC) week 6 homework assignment.
    * The BCBC curriculum generally focuses on JavaScript along with HTML/CSS, using the MERN (MongoDB, Express, React, Node) software stack, to teach web development skills across the client and server. 
  * FriendFinder is a full-stack application:
    * Takes in results from new user's survey
    * Compares new user's survey response to existing users survey responses 
    * Displays name and picture of existing user that has best overall match
 ### 2. What / Objectives / User Stories
  * This project development, from design through deployment of the application, used Node.js and Express as the primary web development technologies on the server side along with HTML/CSS/JS on the client side:
    * The following npm packages were used:
      * express: fast, unopinionated, minimalist web framework for node web services
      * path: provides way of working with directories and file paths
  * User Stories, by categorization:
    * Application data object structured with name, photo and 10 scores
    * Server requirements (express, path), configuration, routing (HTML, API), listening
    * Views of home, survey pages and JSON of friends data object
 ### 3. How / Design Description
  * The scope of the project fit well into [Agile methodology with Scrum and Kanban frameworks](https://en.wikipedia.org/wiki/Agile_software_development). Due to limited scope and non-group assignment, GitHub's built-in tools were not used to support project execution:
    * [Projects](https://github.com/jkawahara/bamazon-cl/projects) Kanban board for documenting user stories and overall progress
    * [Issues](https://github.com/jkawahara/bamazon-cl/issues) Issue tracking for user stories, features and bug report
  * Functionality - refer to [video of application user flow](https://drive.google.com/open?id=1DEAWLvp-Pw_Qkdidk0QRRQQiEyQG0qUq):
    * Design Description
      * Web application server
        * Configure Express web app server listening on process.env.PORT (Heroku) or default to 8080. Parse URL encoded, any type including nexted objects, and JSON and call appropriate routing based on HTML or API requests.
        * Imported Modules: npm (express)
        * Relevant functions: require(), express(), use(), listen() 
        * Relevant modules: server.js
      * Data:
        * 
      * General design of views
        * Require modules and packages: 
        * 
        * Relevant functions: 
        * Home page view
          * 
          * Relevant functions: 
          * Relevant modules:
        * Survey page view
          * 
          * Relevant functions: 
          * Relevant modules:
      * 
   * Prerequisites for Development:
    * MacBook Air (Intel Core i7, 2.2 GHz, 1 Processor, 2 Cores, 8GB)
    * 64 bit operating system 
    * git version 2.18.0
    * Visual Studio Code Version 1.29.1
    * [GitHub FriendFinder](https://github.com/jkawahara/FriendFinder)
    * Chrome Version 70.0.3538.110 (Official Build) (64-bit)
   * Built With:
    * [Node.js](https://nodejs.org/docs/latest/api/documentation.html)
    * [npm](https://www.npmjs.com/)
      * [express](https://www.npmjs.com/package/express)
      * [path](https://www.npmjs.com/package/path)
   * Installing:
    * For further development or use of this application, clone or download application files from GitHub, which is organized into the following directory structure:
      * /FriendFinder (application root directory level)
        * /app
          * /assets
            * /images - images of friends data objects
          * /data
            * friends.js
          * /public
            * home.html
            * survey.html
          * /routing
            * apiRoutes.js
            * htmlROutes.js
        * /node_modules (ignored by git) - generated first time npm install executes
        * .gitignore
        * LICENSE
        * package-lock.json - generated each time npm install executes
        * package.json - includes dependencies
        * README.md
        * server.js
    * Once the application files are ready per the above structure, go to the application root directory level
      * Enter the following in termminal to install required node packages. This executes by referring to the included dependencies in package.json and creates required node packages in /node_modules and package-lock.json:
        * npm install
   * Running the tests:
    * Unit testing & integration testing was informally executed
   * Deployment:
    * Deployed on Heroku
 ## Versioning
  * For the versions available, see the tags on this repository.
 ## Authors
  * John Kawahara.
  * N/A- See also the list of contributors who participated in this project.
 ## License
  * This project is licensed under the [MIT License](LICENSE).
 ## Acknowledgments
  * Thanks to BCBC program personnel, especially our instructor, David Hallinan, along with our TAs Hannah Bowers and Glo Austin, for their guidance and support.
