const Router = require('express');
const router = new Router();

app.post('/server/upload', upload.single('image'), (req, res) => {
  res.send({ status: 'success' });
});

module.export = router;
