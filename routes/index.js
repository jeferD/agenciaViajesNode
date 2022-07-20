import  express from 'express';
import {paginaInicio, paginaNosotros,paginaTestimoniales,paginaViajes, paginaDetalleViaje} from '../controllers/paginaController.js';

import { guardarTestimoniales } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales );
router.post('/testimoniales',guardarTestimoniales );


export default router;