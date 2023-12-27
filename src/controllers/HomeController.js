import Aluno from '../models/aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
        nome: 'Ana Luiza',
        sobrenome: 'Souza',
        email: 'neneka@gmail.com',
        idade: 1,
        peso: 10,
        altura: 1
        });
        res.json(
            novoAluno
        );
    }

}
    export default new HomeController();
