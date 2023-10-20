const txt = ['print 0', 'guardarN 1 + 2', 'print 1', 'guardarS Oiii'];

const commands = [];
const data = [];

const loader = () => {
	txt.forEach((cmd) => {
		const splited = cmd.split(' ', 1);
		const func = splited[0];
		const args = splited[1];

		if (func == 'guardarN') {
			guardarN(args);
		} else if (func == 'guardarS') {
			guardarS(args);
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
