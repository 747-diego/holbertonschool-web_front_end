function countPrimeNumbers() {
    for (var counter = 0; counter <= 100; counter++) {

        var nonPRIME = false;
        for (var index = 2; index <= counter; index++) {
            if (counter % index === 0 && index !== counter) {
                // then counter is not a prime number 
                nonPRIME = true;
            }
        }

        if (nonPRIME === false) {
            // then it is a prime
                    console.log(counter);
        }
    }
}

var counter = 0;
var TimeExecuted = performance.now();

while (counter < 100) {
    countPrimeNumbers();
}
var TimeEnded = performance.now();
setTimeout (function() { console.log("Execution time of calculating prime numbers 100 times was " + (TimeEnded - TimeExecuted)); }, 0);
