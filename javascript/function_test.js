
function f1(err, id) {
    console.log('Error passed to f1 was: ', err);
    if (err) {
        console.log("There was an error calling function"); 
    }
    else {
        console.log(id);
    }
}

function f2(callback) {
    var whoami = 'I am f2()';
    var err;
    for (var i=0; i<100000000; i++) {
        err = 1;
    }
    callback(err, whoami);
}


f2(f1);

