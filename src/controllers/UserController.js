import User from './models/User';

class UserController {
    async index(req, res) {
        const novoUser = await User.create({
        nome: 'Nathan',
        sobrenome: 'Souza',
        email: 'than@gmail.com',
        idade: 15,
        peso: 90,
        altura: 1.80
        });
        res.json(
            novoUser
        );
    }

}
    export default new UserControllerController();
