function speedCheck(speed) {
    if (speed <= 70)
        return 'OK';

    if (speed > 70 && speed < 120)
        return Math.floor(((speed - 70) / 5));

    if (speed > 120)
        return "Suspended";
}

let points = speedCheck(75);
console.log(points);