# Unit 18 PWA Homework: Online/Offline Budget Trackers
## pwa-offline-budget-tracker-18

<p>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
<img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black"/>
 <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
 <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
 </p>

 <br>

Add functionality to our existing Budget Tracker application to allow for offline access and functionality.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

  * In order to cache dynamic content, i.e. users' inputs for withdrawals or deposits, incorporate `indexedDB` from the previous module.

  * When online records are stored on `MongoAtlas` database

- - -

## Application and repository
* Repository [Budget-Tracker](https://github.com/bootcampdev/pwa-offline-budget-tracker-18)
* Application Deployment Mongo Atlas [Budget-Tracker](https://obscure-dawn-40022.herokuapp.com/)

* Technologies include

  ```
  service-worker.js to determine if the application is offline

  IndexDB if the application is offline transaction records are recorded here

  webpack.config.js define an offline environment that will resize and cache icons, set color theme and define a manifest file in the dist folder to bundle all the javascript files
  ```


* Demo

![demo](budget-tracker.gif)



## Local Development

$ npm install

$ npm start

Local navigate to localhost:3000
