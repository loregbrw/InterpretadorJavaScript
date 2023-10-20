import { readFile } from 'fs';

const arquivo = 'test.txt';

readFile(arquivo, 'utf8', (err, data) => {
	if (err) {
		console.error(`Erro ao abrir o arquivo: ${err}`);
		return;
	}

	console.log(`Conteúdo do arquivo:\n${data}`);
});

commands = ["print", "guardar", "Oii"];
data = [];
