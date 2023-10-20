const txt = [
	'print 0',
	'guardarS Hello world',
	'print 1',
	'guardarN 2 + 3 + 5',
];

const commands = [];
const data = [];
let f = 0;

const loader = () => {
	txt.forEach((cmd) => {
		const splited = cmd.split(' ');
		const func = splited[0];
		const args = splited.splice(1);

		if (func == 'guardarN') {
			guardarN(args.join(''));
		} else if (func == 'guardarS') {
			guardarS(args.join(' '));
		} else {
			commands.push(cmd);
		}
	});
};

const print = (args) => {
	args.forEach((index) => {
		index = Number.parseInt(index);

		console.log(data[index]);
	});
};

const guardarN = (args) => {
	const calc = eval(args);
	guardarS(calc);
};

const guardarS = (args) => {
	data.push(args);
};

const run = () => {
	commands.forEach((cmd) => {
		const splited = cmd.split(' ');
		const func = splited[0];
		const args = splited.slice(1);

		if (func == 'print') {
			print(args);
		}
	});
};

loader();
run();
