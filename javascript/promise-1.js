
function ValueException(reason) {
    this.reason = reason;
}

function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
            resolve(setTimeout(function () {
                console.log('x was even')
                var x = Math.random();
                console.log(x);
                if (Math.floor((x * 100) % 2) === 0) {
                    //throw new Error('x was odd');
                    //Promise.reject('x was odd')
                }
            }, Math.random() * 2000));
        });
}

asyncFunc()
    .then(result => {
        console.log('success')
    })
    .catch(error => {
        console.log('error')
    });