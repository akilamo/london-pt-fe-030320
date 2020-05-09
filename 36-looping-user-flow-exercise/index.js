// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require('readline-sync');


let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function menuBooks() {
	console.log("Here is a list of books: ");
	books.forEach((selectedBook, index) => {
	  console.log(`${index + 1}: ${selectedBook}`);
	});

	const choice = readlineSync.keyInSelect(books, 'Select a book', {cancel: 'Main Menu'});
	/* const choice = readlineSync.question("Choose a book from the list: "); */
	const choiceAsNumber = parseInt(choice);
	selectedItems.book = books[choiceAsNumber - 1];

	switch (choice) {
		case 0:
			console.log(`You chose ${selectedItems.book}!`);
			break;
		
		case 1:
			console.log(`You chose ${selectedItems.book}!`);
			break;

		case 2:
			console.log(`You chose ${selectedItems.book}!`);
			break;

		case 3:
			console.log(`You chose ${selectedItems.book}!`);
			break;
	
		case 4:
			console.log(`You chose ${selectedItems.book}!`);
			break;

		case 5:
			console.log(`You chose ${selectedItems.book}!`);
			break;
		
		case 6:
			console.log(`You chose ${selectedItems.book}!`);
			break;
					
		default:
			console.log('Back to main menu');
			topMenu();
			break;
	}

}
  

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

function menuMovies() {
	console.log("Here is a list of movies: ");
	movies.forEach((selectedMovie, index) => {
	  console.log(`${index + 1}: ${selectedMovie}`);
	});

	const choice = readlineSync.keyInSelect(movies, 'Select a movie', {cancel: 'Main Menu'});
	/*const choice = readlineSync.question("Choose a movie from the list: ");*/
	const choiceAsNumber = parseInt(choice);
	selectedItems.movie = movies[choiceAsNumber - 1];
  
	switch (choice) {
		case 0:
			console.log(`You chose ${selectedItems.movie}!`);
			break;
		
		case 1:
			console.log(`You chose ${selectedItems.movie}!`);
			break;

		case 2:
			console.log(`You chose ${selectedItems.movie}!`);
			break;

		case 3:
			console.log(`You chose ${selectedItems.movie}!`);
			break;
	
		case 4:
			console.log(`You chose ${selectedItems.movie}!`);
			break;

		case 5:
			console.log(`You chose ${selectedItems.movie}!`);
			break;
		
		case 6:
			console.log(`You chose ${selectedItems.movie}!`);
			break;
					
		default:
			console.log('Back to main menu');
			topMenu();
			break;
	}
  }


/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */


function menuNextDestination() {
	console.log("Here is a list of destinations: ");
	countries.forEach((selectedDestination, index) => {
	  console.log(`${index + 1}: ${selectedDestination}`);
	});

	const choice = readlineSync.keyInSelect(countries, 'Select a destination', {cancel: 'Main Menu'});
	/*const choice = readlineSync.question("Choose a destination from the list: ");*/
	const choiceAsNumber = parseInt(choice);
	selectedItems.nextTrip = countries[choiceAsNumber - 1];
  
	switch (choice) {
		case 0:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;
		
		case 1:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;

		case 2:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;

		case 3:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;
	
		case 4:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;

		case 5:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;
		
		case 6:
			console.log(`You chose ${selectedItems.nextTrip}!`);
			break;
					
		default:
			console.log('Back to main menu');
			topMenu();
			break;
	}
	
  }


/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */


const menuSelect = ['Book', 'Movie','Next Trip'];

function topMenu() {

	const chosenMenu = readlineSync.keyInSelect(menuSelect, 'Choose a category: ',{cancel: 'Exit'});

	switch (chosenMenu) {
		case 0:
			menuBooks();
			break;

		case 1:
			menuMovies();
			break;
		
		case 2:
			menuNextDestination();
			break;

	}

}

topMenu();

