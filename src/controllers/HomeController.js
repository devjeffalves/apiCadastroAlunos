import Aluno from './models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
        nome: 'Nathan',
        sobrenome: 'Souza',
        email: 'than@gmail.com',
        idade: 15,
        peso: 90,
        altura: 1.80
        });
        res.json(
            novoAluno
        );
    }

}
    export default new HomeController();
