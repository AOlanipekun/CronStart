# CronStart
EJB in NODEJS using cron

This example can be used to automate email or SMS sending at any stipulated time.

But for this tutorial the **cron** will be executed every 1 mins

**console.log("Mail Sender Started!!!");

let counter = 1;
var cron = require('node-cron');

cron.schedule('* * * * *', () => {
	console.log('running a task every minute');
	console.log('sending email...');
	console.log('email sent>>>');
	counter++;
});
