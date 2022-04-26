import JustValidate from 'just-validate';

// date validation variables
const months30days = ['4', '6', '9', '11'];
const monthInput = document.querySelector('#month');
const dayInput = document.querySelector('#day');

// date-time variables
const dateTimeInputs = document.querySelectorAll('.date-time');

// customer total variables
const subtractBtn = document.querySelector('.btn--customer-subtract');
const addBtn = document.querySelector('.btn--customer-add');
const customerTotal = document.querySelector('.customer-total');

// Global variable for max days to be used with form validation and listeners 
let maxDays = 31;

/**********************************************
    FORM VALIDATION
**********************************************/
// Implements JustValidate to add custom form validation
const validation = new JustValidate(
    '#form',
    {
        errorFieldCssClass: 'invalid',
        errorLabelCssClass: 'invalid-label',
        focusInvalidField: true,
        errorsContainer: 'div.invalid-container'
    }
);

validation
    .addField('#name', [
        {   
            rule: 'required',
            errorMessage: 'Name is required',
        },
        {
            rule: 'customRegexp',
            value: /^[A-Za-z]*$/,
            errorMessage: 'Name may only contain letters'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Name must contain a minimum of 3 characters'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Name must contain a maximum of 30 characters'
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Email is required',
        },
        {
            rule: 'email',
            errorMessage: 'Please enter a valid email address (******@gmail.com)'
        },
    ])
    .addField('#month', [
        {
            rule: 'required',
            errorMessage: 'Please enter a month'
        },
        {
            rule: 'minNumber',
            value: 01,
            errorMessage: 'Month should be at least 01'
        },
        {
            rule: 'maxNumber',
            value: 12,
            errorMessage: 'Month should be at most 12'
        }
    ])
    .addField('#day', [
        {
            rule: 'required',
            errorMessage: 'Please enter a day'
        },
        {
            rule: 'minNumber',
            value: 01,
            errorMessage: 'Day should be atleast 01'
        },
        {
            validator: () => maxDays >= dayInput.value,
            errorMessage: 'Please enter a valid day for the corresponding month'
        }
    ])
    .addField('#year', [
        {
            rule: 'required',
            errorMessage: 'Please choose a year from 2022 to 2024'
        },
        {
            rule: 'minNumber',
            value: 2022,
            errorMessage: 'Year should be at least 2022'
        },
        {
            rule: 'maxNumber',
            value: 2024,
            errorMessage: 'Month should be at most 2024'
        }
    ])
    .addField('#hour', [
        {
            rule: 'required',
            errorMessage: 'Hour field is required'
        },
        {
            rule: 'minNumber',
            value: 01,
            errorMessage: 'Hour should be at least 01'
        },
        {
            rule: 'maxNumber',
            value: 12,
            errorMessage: 'Hour should be at most 12'
        }
    ])
    .addField('#minute', [
        {
            rule: 'required',
            errorMessage: 'Minute field is required'
        },
        {
            rule: 'minNumber',
            value: 00,
            errorMessage: 'Minute should be at least 00'
        },
        {
            rule: 'maxNumber',
            value: 59,
            errorMessage: 'Minute should be at most 59'
        }
    ])
    .onFail(e => {
        console.log('Invalid', e);
    })
    .onSuccess(e => {
        console.log('Passed', e);
    })

/**********************************************
    EVENT LISTENERS
**********************************************/
// Listens for change in the month field
// Determines the max attribute value for the days field based on the current month
// Updates the global maxDays value based on the current month
monthInput.addEventListener('change', e => {

    if (months30days.includes(monthInput.value)) {

        dayInput.setAttribute('max', '30');
        maxDays = 30;

    } else if (monthInput.value === "2") {

        dayInput.setAttribute('max', '28');
        maxDays = 28;

    } else {

        dayInput.setAttribute('max', '31');
        maxDays = 31;
    }
});

// Two digit appearence for date-time fields
dateTimeInputs.forEach(input => {

    input.addEventListener('change', e => {

        const value =  Number.parseInt(e.currentTarget.value, 10);
    
        if (value < 10) {
            e.currentTarget.value = `0${value}`;
        }
    });
});

// Displays the total customers when booking a reservation
// Subtracts from total customers on click
subtractBtn.addEventListener('click', e => {

    let total = Number.parseInt(customerTotal.value, 10);

    if (total > 1) {
        total--;
        customerTotal.value = `${total} People`;
    } 
    
    if (total === 1) {
        customerTotal.value = `1 Person`;
    }
});

// Displays the total customers when booking a reservation
// Adds to total customers on click
addBtn.addEventListener('click', e => {

    let total = Number.parseInt(customerTotal.value, 10);

    if (total < 30) {
        total++;
        customerTotal.value = `${total} People`;
    }
});