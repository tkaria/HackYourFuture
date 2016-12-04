
function equals_else(x) {
    if (x == 10) {
        return 'Equals';
    } else if (x == 7) {
        return 'it is 7 dude';
    } else {
        return 'Not equals';
    }

}

function equals(x) {
    if (x == 10) {
        return 'Equals';
    } else if (x == 7) {
        return 'it is 7 dude';
    }
    return 'Not equals';
}

console.log(equals(5), ' equals(5) ');
console.log(equals(10), ' equals(10) ');

console.log(equals_else(5), ' equals_else(5) ');
console.log(equals_else(10), ' equals_else(10) ');


