// Import ascii-art logo
const logo = require('asciiart-logo');

const art = function(){
    const subtext1 = 'TRACK YOUR EMPLOYEES';
    const subtext2 = '(not in a creepy way)';

    console.log(
        logo({
            name: 'Employee Tracker',
            font: 'Standard',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
        .emptyLine()
        // .right('version 3.7.123')
        .emptyLine()
        .right(subtext1)
        .right(subtext2)
        .render()
    );
}





module.exports = art;