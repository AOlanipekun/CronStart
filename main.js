console.log("Mail Sender Started!!!");

let counter = 1;
var cron = require('node-cron');

cron.schedule('* * * * *', () => {
	console.log('running a task every minute');
	console.log('sending email...');
	console.log('email sent>>>');
	counter++;
});


