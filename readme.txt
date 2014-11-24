Running the API
Launch node Js console
Navigate to the api root location 
Install node modules Type: npm install
Type: node app.js

To unit test the converter using jasmine
The api does not need be running
Launch node Js console
Install Jasmine Type: npm install jasmine-node -g
Navigate to the api root location
Type: jasmine-node --verbose --color ./spec/romanModule.spec.js

To port level test the api using frisby
The api needs to be running see 'Running the API'
Once the api is running open a new node Js console.
Navigate to the api root location
Type: jasmine-node --verbose --color ./spec/portTests.spec.js
