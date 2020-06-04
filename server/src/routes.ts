import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', async (request, response) => {
  return itemsController.index(request, response);
});

routes.post('/points', async (request, response) => {
  return pointsController.create(request, response);
});

routes.get('/points/:id', pointsController.show);

routes.get('/points', async (request, response) => {
  return pointsController.index(request, response);
});

export default routes;
