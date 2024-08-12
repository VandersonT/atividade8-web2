import Livro from "../models/livro.mjs";

const LivroController = {
    "new": async (req, res) => {
        const created = await Livro.create({
            titulo: req.body.titulo,
            ano_publicacao: req.body.ano_publicacao,
            categoria: req.body.categoria,
            altor: req.body.altor
        })
        res.status(201).send(created)
    },

    "one": async (req, res) => {
        const livro = await Livro.findOne({
            where: {id: req.params.id}
        })
        res.json(livro)
    },
    
    "all": async (req, res) => {
        res.json(await Livro.findAll())
    },

    "edit": async (req, res) => {
        const livro = await Livro.findOne({
            where: {id: req.body.id}
        })

        livro.titulo = req.body.titulo;
        livro.ano_publicacao = req.body.ano_publicacao;
        livro.categoria = req.body.categoria;
        livro.altor = req.body.altor;
        
        await livro.save()
        res.json(livro)
    },

    "remove": async (req, res) => {
        const livro = await Livro.findOne({
            where: {id: req.body.id}
        });
        await livro.destroy()
        res.status(204).json()
    }


}

export default LivroController;