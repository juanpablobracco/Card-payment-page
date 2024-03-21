// Event Handler to the submit event 
document.getElementById('form').addEventListener("submit", (event) => {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number');
    const number = document.getElementById('number').value;
    const errorSpan = document.getElementById('card-number-error');

    const cardName = document.getElementById('card-name');
    const cName = document.getElementById('name').value;
  
    const date = document.getElementById('date');
    const mm = document.getElementById('mm').value;
    const yy = document.getElementById('yy').value;
    const expiryError = document.getElementById('expiry-error');


    const cvv = document.getElementById('cvv');
    const cvvNum = document.getElementById('cvv-number').value;
    const cvvError = document.getElementById('cvv-error');

    if (number.trim() === '') {
        errorSpan.textContent = 'Please enter a card number.';
    } else {
        errorSpan.textContent = ''; //Clear previous error

        const digitsRegex = /^\d+$/;

        if (!digitsRegex.test(number)) {
            errorSpan.textContent = 'Wrong format.';
        } else if (number.length !== 16) {
            errorSpan.textContent = 'Please enter a valid 16-digit card number.';
        } else {
            // If the card number is ValidityState and not empty you can proceed with the form submission
            cardNumber.innerHTML = number;
            cardName.innerHTML = cName;

            if (mm.trim() === '') {
                expiryError.textContent = "Can't be blank";
            } else if (yy.trim() === '') {
                expiryError.textContent = "Can't be blank";
            } else if (mm.length !== 2) {
                expiryError.textContent = "2 digits";
            } else if (yy.length !== 2) {
                expiryError.textContent = "2 digits";
            } else {
                date.innerHTML = mm + '/' + yy;

                if (cvvNum.trim() === ''){
                    cvvError.textContent = "Can't be blank";
                } else if (cvvNum.length !== 3) {
                    cvvError.textContent = "3 digits";
                } else {
                    cvv.innerHTML = cvvNum;
                    document.getElementById('done').style.display = 'flex';
                    document.getElementById('form').style.display = 'none';
                    // document.getElementById('myForm').submmit();

                }
            } 
        }
    }
})

document.getElementById('continue').addEventListener('click', ()=> {
    location.reload()
})