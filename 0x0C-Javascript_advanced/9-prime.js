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

var TimeExecuted = performance.now();
countPrimeNumbers();
var TimeEnded = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (TimeEnded - TimeExecuted) + " milliseconds.");
