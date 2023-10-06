const moment = require ('moment')

moment.locale('es')

console.log(' Naci ' + moment(19970617).startOf('day').fromNow())