var moment = require('moment');

console.log(moment().format());


var now = moment();



console.log('Current timestamp', now.unix());


var timestamp = 1492078713;




var CurrentMoment = moment.unix(timestamp);



console.log('Current moment', CurrentMoment.format('MMM D, YY @ hh:mm a'));

console.log('Current moment', CurrentMoment.format('MMMM Do, YYYY @ hh:mm A'));