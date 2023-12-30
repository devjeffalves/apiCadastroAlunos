import User from '../models/User';

class UserController {
    async store(req, res) {
        const novoUser = await User.store({
        nome: 'Nathan',
        email: 'than@gmail.com',
        password: '123456',
      
        });
        res.json(novoUser);
    }

}
    export default new UserController();
