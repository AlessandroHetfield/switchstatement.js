
//The switch statement

const day = 'monday';

switch (day) {
    case 'monday':
        console.log( 'Plan course structure' );
        console.log ('Go to coding meetup');
        break; // SI QUITO EL BREAK , SE IMPRIME HASTA QUE SE ENCUENTRE UN BREAK.
    case 'tuesday':
        console.log ('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log ('Write code examples');
        break;
    case 'friday':
        console.log ('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log ('Enjoy the weekend :)');
        break;
    default:
    console.log ('Not a valid day');
