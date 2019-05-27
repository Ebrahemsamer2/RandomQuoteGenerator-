let quotes = [
	{
		text: "Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy.",
		author: "Ahmed omar",
		background: "red"
	},
	{
		text: "Other times we come downstairs feeling sunny already. Those are great days!",
		author: "Michel Ali",
		background: "blue"
	},
	{
		text: "Whether you’re feeling a little blue, or you’re fired up ready to have the best day ever…",
		author: "Sayed Ali",
		background: "lightblue"
	},
	{
		text: "Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.",
		author: "Shen Soky",
		background: "orange"
	},
	{
		text: "So here are 17 wonderful, short positive quotes that my amazing colleague Hayley has collected for you.",
		author: "Mark Idan",
		background: "white"
	},
	{
		text: "They will brighten up ANY day, so much that you’ll be having to wear sunglasses all the time 🙂",
		author: "Oliver Twist",
		background: "green"
	},


];

let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let main = document.querySelector('#main');

setInterval( function() {

	let randomNumber = Math.floor(Math.random() * 6) + 1;

	quote.innerHTML = quotes[randomNumber].text;
	author.innerHTML = quotes[randomNumber].author;
	main.style.backgroundColor = quotes[randomNumber].background;

}, 5000);




let button = document.querySelector('button');

button.addEventListener('click', ()=> {

	let randomNumber = Math.floor(Math.random() * 6) + 1;

	quote.innerHTML = quotes[randomNumber].text;
	author.innerHTML = quotes[randomNumber].author;
	main.style.backgroundColor = quotes[randomNumber].background;

});