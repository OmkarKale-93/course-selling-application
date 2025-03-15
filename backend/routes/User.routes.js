import { Router } from 'express';
import { userLogin, userRegister , updatePassword} from '../controllers/User.controller.js';

const userRouter = Router();

userRouter.post('/signup',userRegister);
userRouter.post('/login',userLogin);
userRouter.post('/update-password',updatePassword);

export default userRouter;