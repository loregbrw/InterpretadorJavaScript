import fs from 'fs';

const file = 'intermediario.txt';

fs.readFile(file, 'utf8', (err, data) => {
	if (err) {
		console.error(`Error: ${err}`);
		return;
	}
	data = data.replace(/[\n\r]/g, '');
	data = data.split(';');
	data = data.filter((item) => item.trim() !== '');
	loader(data);
});

const commands = [];
var data = [];
var index = 0;
var flag = true;

const loader = (script) => {
	script.forEach((cmd) => {
		const splited = cmd.split(' ');
		const func = splited[0];
		const args = splited.splice(1).join(' ');

		commands.push(func);
		formatArgs(args);
	});

	run();
};

const formatArgs = (args) => {
	if (!args.includes('"')) {
		data.push(eval(args));
		return;
	}

	args = args.replace(/"/g, '');
	const letters = [args.length, ...args];

	data = [...data, ...letters];
};

const run = () => {
	commands.forEach((cmd) => {
		if (cmd == 'if') {
			ifFunc();
		}

		if (cmd == 'print') {
			print();
		}
	});
};

const print = () => {
	if (
		typeof data[index] === 'number' &&
		typeof data[index + 1] === 'string'
	) {
		const start = index + 1;
		const end = index + data[index] + 1;
		let word = data.slice(start, end);
		index += data[index] + 1;

		let charFlag = false;
		word = word.map((c, i) => {
			if (charFlag) {
				charFlag = false;
				return;
			}

			if (c == '\\' && word[i + 1] == 'n') {
				charFlag = true;
				return '\n';
			}

			return c;
		});

		word = word.join('');

		if (flag) {
			console.log(word);
		}

		return;
	}

	if (flag) {
		console.log(data[index]);
	}

	index++;
};

const ifFunc = () => {
	flag = data[index];
	index++;
};
