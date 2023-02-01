const db = require('../data/database');

const router = app => {
  app.get('/', (request, response) => {
      response.send({
          message: 'REST API for RS-Clone'
      });
  });

  app.get('/api/brands', (request, response) => {
		response.send(db.brands);
	});

  app.get('/api/flavors', (request, response) => {
		response.send(db.flavors);
	});

  app.get('/api/mixes', (request, response) => {
		response.send(db.mixes);
	});
}


module.exports = router;