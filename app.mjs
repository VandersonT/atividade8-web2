import path from 'path';
import url from 'url';
import express from 'express';
import LivroController from './controllers/livro_controller.mjs';


const app = express();
const port = 3000;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/livros', LivroController.all);
app.get('/livros/:id', LivroController.one);
app.post('/livros', LivroController.new);
app.put('/livros', LivroController.edit);
app.delete('/livros', LivroController.remove);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
