import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi} from 'celebrate'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//index,show,create,update,d

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemscontroller = new ItemsController();

routes.get('/items', itemscontroller.index);

routes.post('/points', 
upload.single('image') ,
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        whasapp: Joi.number().required(),
        latitude:Joi.string().required(),
        longitude:Joi.string().required(),
        city:Joi.string().required(),
        uf:Joi.string().required().max(2),
        items:Joi.string().required(),
    })
}, {
    abortEarly: false
}),
pointsController.create);


routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);




export default routes;
