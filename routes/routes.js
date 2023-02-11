const db = require('../data/database');

const router = app => {
  app.get('/', (request, response) => {
      response.send({
          message: 'REST API for RS-Clone'
      });
  });

  app.use((request, response, next) => {
    response.set('Cache-Control', 'no-store');
    next();
  })

  app.get('/api/brands', (request, response) => {
		response.send(db.brands);
	});

  app.get('/api/flavors', (request, response) => {
		response.send(db.flavors);
	});

  app.get('/api/mixes', (request, response) => {
		response.send(db.mixes);
	});

  app.get('/api/flavors/:id', (request, response) => {
    const id = Number(request.params.id.slice(1));
    const indexElement = db.flavors.findIndex((el) => el.id === id);
    if (indexElement === -1) {
      response.status(404).send('404');
    } else {
      response.status(200).send(db.flavors[indexElement]);
   }
	});

  app.get('/api/mixes/:id', (request, response) => {
    const id = Number(request.params.id.slice(1));
    const indexElement = db.mixes.findIndex((el) => el.id === id);
    if (indexElement === -1) {
      response.status(404).send('404');
    } else {
      response.status(200).send(db.mixes[indexElement]);
   }
	});

  app.get('*', (request, response) => {
    response.status(404).send('404');
  });
}

module.exports = router;
