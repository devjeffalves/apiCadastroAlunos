import Aluno from '../models/Aluno';

class HomeController {
    async index(_req , res) {
        const novoAluno = await Aluno.create({
        nome: 'Andry ',
        sobrenome: 'Brain',
        email: 'Andrya@teste.com',
        idade: 20,
        peso: 45,
        altura: 1.5,
        });
        res.json(novoAluno);
    }

}
    export default new HomeController();

    