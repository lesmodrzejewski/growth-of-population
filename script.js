

// Main variables
const forms = document.getElementById('forms');
const popNow = document.getElementById('pop-now');
const popInc = document.getElementById('pop-inc');
const newHab = document.getElementById('new-hab');
const popFinal = document.getElementById('pop-final');
const result = document.getElementById('result')

// Add event listener to the submit button
forms.addEventListener('submit', e => {
    e.preventDefault();
    calculateNumbersOfYears()
});


// Calculate number of years
function calculateNumbersOfYears() {


    // Get values and convert them to numbers
    let popNowValue = Number(popNow.value)
    let popIncValue = Number(popInc.value)
    let newHabValue = Number(newHab.value)
    let popFinalValue = Number(popFinal.value)

    let percentToFraction = popIncValue / 100
    let numberOfYears = 0

        // The loop calculating numbers of years
    while(popNowValue < popFinalValue) {
        popNowValue = popNowValue + popNowValue * percentToFraction + newHabValue
        numberOfYears++
    }

    result.textContent = `The populutation will reach ${popFinalValue} inhabitants in ${numberOfYears} years`;

}