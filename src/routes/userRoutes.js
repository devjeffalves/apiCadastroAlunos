import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();
router.post('/', userController.store);


export default router;

/*
index -> Lista todos usuários -> GET
store/Create -> Cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> Atualiza um usuário -> PATCH or PUT
*/