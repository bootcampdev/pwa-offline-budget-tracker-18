# Unit 18 PWA Homework: Online/Offline Budget Trackers
## pwa-offline-budget-tracker-18

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
* Application Mongo Atlas [Budget-Tracker](https://github.com/bootcampdev/pwa-offline-budget-tracker-18)


## Local Development

$ npm install

$ npm start

Navigate to localhost:3000
