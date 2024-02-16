#!usr/bin/env mode
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const userName = welcomeUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const task = () => {
	const q = Math.round(Math.random() * 100);
	let a = '';
	if (q % 2 === 0) {
		a = 'yes';
	} else { 
		a = 'no';
	}

	return [q, a];
	
};

for (let i = 1; i <= 3; i += 1) {
	const step = task(); // [q, a]
	console.log(`Question: `)

} 

console.log(task());