const db = require('../data/database');

const router = app => {
  app.get('/', (request, response) => {
      response.send({
          message: 'Node.js and Express REST API'
      });
  });

  app.get('/brands', (request, response) => {
		response.send(db.brands);
	});

  app.get('/flavors', (request, response) => {
		response.send(db.flavors);
	});

  app.get('/mixes', (request, response) => {
		response.send(db.mixes);
	});
}


module.exports = router;