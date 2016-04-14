//Used to connect and interact with the database

var mysql 		= require('mysql');

var connection	= mysql.createConnection({
	host	: 'localhost',
	user	: 'user',
	password: 'secret',
	database: 'bike'
});



function athenticate(username, password){
	connection.connect(); //Create connection

	connection.query('SELECT * FROM user WHERE=' + mysql.escape(username)){
		if(){

		}

	}

	connection.end();
}
