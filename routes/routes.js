const db = require('../data/database');
const randomMix = require('../components/random_mix/random_mix')
const apiController = require('../components/api_controllers/api_controller');


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

  app.get('/api/brands', apiController.getBrands);

  app.post('/api/brands', apiController.setBrand);

  app.post('/api/flavors', apiController.setFlavor);

  app.get('/api/flavors', apiController.getFlavors);

  app.get('/api/mixes', (request, response) => {
		response.send(db.mixes);
	});

  app.get('/api/flavors/:id', apiController.getFlavor);
  
  app.get('/search/:phrase', apiController.searchAccessor);

  app.post('/flavorpreference', apiController.flavorPreferenceAccessor);

  app.get('/api/mixes/:id', (request, response) => {
    const id = Number(request.params.id.slice(1));
    const indexElement = db.mixes.findIndex((el) => el.id === id);
    if (indexElement === -1) {
      response.status(404).send('404');
    } else {
      response.status(200).send(db.mixes[indexElement]);
   }
	});


  app.get('/api/randommix', (req, res) => {
    res.status(200).json(randomMix.getRandomMix());
	});

  app.get('*', (request, response) => {
    response.status(404).send('404');
  });
}

module.exports = router;
