import dayjs from 'dayjs';

var updateLocale = require('dayjs/plugin/updateLocale')
var calendar = require('dayjs/plugin/calendar')

dayjs.extend(calendar)
dayjs.extend(updateLocale)


dayjs.updateLocale('en', {
    calendar: {
        sameDay: '[Today!]', // The same day ( Today at 2:30 AM )
        nextDay: '[Tomorrow!]', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
        lastDay: '[Yesterday!]', // The day before ( Yesterday at 2:30 AM )
        lastWeek: '[Last] dddd', // Last week ( Last Monday at 2:30 AM )
        sameElse: 'MM/DD/YYYY' // Everything else ( 7/10/2011 )
    }
})


export { dayjs as default }