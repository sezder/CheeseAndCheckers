## Summary
Cheese & Checkers is a board game website inspired by goodReads. It is designed for all users to explore a variety of board games and to see reviews to any individual game. Logged-in users can post reviews to an individual game as well as make their own game shelves to save board games to.

## Overall Structure
### List of Features
  * Create an account
  * Login and logout
  * Login as a demo user
  * View board games
  * Search board games
  * View individual board games and it's reviews
  * Add, edit, and delete own reviews
  * Change played status to "Want to Play" or "Played"
  * Add/delete board games to/from game shelves
  * Add, edit, and delete new game shelves

### Back-end
The app was built in express using a sequelize database. The add and edit function on game shelves, the delete functions on reviews, my board games, and game shelves, and the ability to change played status and add books to shelves are AJAX requests that update dynamically on the page. The rest of the posts requests are form request that re-direct to another page.  
### Front-end
The app used Pug to design front-end.
### Libraries used
* bcryptjs for authorization 
* express-session for session authentication
* express-validator
* pugjs for front-end development
* sequelize for database management

## CheeseAndCheckers Pages
### Splash Page
When the user goes to the website, they will see option to sign up, log in, or be re-directed for the boardgames page. 

![alt](https://i.imgur.com/lUcmwFF.png)

### User Authentication
When the user signs up to the website, their confirmed password is translated into a hashed string using bcrypt and stored in the database. When the user logs in, their password is rehashed and compared to the same stored value in the database to verify credentials. Authorization restrictions are applied to adding/editing/deleting reviews and anything dealing with Game Shelves to limit visibility of those features to logged-in users only.

![alt](https://i.imgur.com/my9MZOC.png)

### Board Games Page
When the user clicks on the logo or the "Board Games" button on the navigation bar, they are directed to this page which displays a list of board games and their details. The user is able to click on a game and get redirected to a page that has more information on that individual board game. The User is also able to use the search functionality in the navigation bar and filter the board games to show only those that include the letters/words being searched.

![alt](https://i.imgur.com/B8xkOga.png)

### Individual Board Game Page
When the user clicks on a specific board game in the Board Games page, they are redirected to this page which displays the board game, details of that board games, and a list of reviews on that board game. If the user is logged-in, the user can change their played status and add the board game to a number of shelves. The logged-in user can also write a review, as well as edit and delete any review they wrote on that page.

![alt](https://i.imgur.com/Mr8EAO7.png)

### Add and Edit a Review Pages
When a logged-in user clicks on the "Write a Review" button on the Individual Board Game page, they are redirected to the Add a Review page, which is similar to the Individual Board Game Page, with the added functionality of being able to add a review. 
When a logged-in user clicks on the "edit" button on their own review, they are redirected to the Edit a Review page, which is similar to the Individual Board Game Page, with the added functionality of being able to edit a review. 
When a logged-in user clicks on the "delete" button on their own review, their review is deleted from the page.

![alt](https://i.imgur.com/UkDDGvr.png)

### My Board Games Page
When a logged-in user clicks on the "My Board Games" button on the navigation bar, they are redirected to this page which displays a list of board games that have been saved to the user's Game Shelves. The user is able to click on a Game Shelf and display only the board games saved to that particular shelf. The user can also add a Game Shelf, edit the name, and delete the shelf entirely. The user is also able to click on a game and get redirected to a page that has more information on that individual board game. 

![alt](https://i.imgur.com/8ZEJT3H.png)

### About Us Page
When a user clicks on the "About Us" button on the navigation bar, they are redirected to this page which displays all the developers that worked on this website and some information about each of them.

![alt](https://i.imgur.com/37VXuMT.png)
