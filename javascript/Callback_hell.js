(function() {
    'use strict';

    function wait(delay, cb) {
        if (typeof delay !== 'number' || delay < 1 || delay > 5000) {
            cb(new Error(`delay must be a number between 1 and 5000 (ms) but received ${delay}`));
            return;
        }
        setTimeout(cb, delay);
    }

    console.log('Running...');

    let theDelay = 1000;

    wait(theDelay, err => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(`${theDelay} ms have passed`);
        theDelay += 1000;
        wait(theDelay, err => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(`${theDelay} ms have passed`);
            theDelay += 4000;
            wait(theDelay, err => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log(`${theDelay} ms have passed`);
                theDelay += 4000;
                wait(theDelay, () => {});
            });
        });
    });
}());
