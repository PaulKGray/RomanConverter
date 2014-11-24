
var frisby = require('frisby');
var GenerateUrl = 'http://localhost:8080/api/generate/';

frisby.create('Successful call to generate end point')
  .get(GenerateUrl + '1')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json')
  .expectJSON({ 'romannumeral': 'I' })
.toss();


frisby.create('Invalid call to generate end point')
  .get(GenerateUrl + 'AAA')
  .expectStatus(400)
.toss();

var ParseUrl = 'http://localhost:8080/api/parse/';

frisby.create('Successful call to parse end point')
  .get(ParseUrl + 'I')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json')
  .expectJSON({ 'number': 1 })
.toss();

frisby.create('Invalid call to parse end point')
  .get(ParseUrl + '999')
  .expectStatus(400)
.toss();