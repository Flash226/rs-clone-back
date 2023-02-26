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

  app.get('/api/mixes', (req, res) => {
		res.send(db.mixes);
	});

  app.get('/api/flavors/:id', apiController.getFlavor);
  
  app.get('/search/:phrase', apiController.searchAccessor);

  app.post('/flavorpreference', apiController.flavorPreferenceAccessor);

  app.get('/api/mixes/:id', apiController.getMix);


  app.get('/api/randommix', (req, res) => {
    res.status(200).json(randomMix.getRandomMix());
	});


  app.get('/api/top10', apiController.getTop10);

  app.get('/api/allrate', apiController.getAllRate);

  app.get('*', (request, response) => {
    response.status(404).send('404');
  });
}

module.exports = router;
