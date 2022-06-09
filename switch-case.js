// switch case in javascript is same as C

let city;

switch (city) {
    case 'Pokhara':
        console.log("Welcome to Pokhara");
        break;

    case 'Kathmandu':
        console.log("Welcome to Kathmandu");
        break;

    // NO need of break cause control will automatically switch out of the block
    default:
        console.log("Welcome to Nepal");
}