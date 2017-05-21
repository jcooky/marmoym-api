
import * as express from 'express';


import user from './userRoute';

let router = express['Router']();

router.use('/users', user);

export default router;