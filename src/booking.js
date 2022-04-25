import JustValidate from 'just-validate';

// customer total variables
const subtractBtn = document.querySelector('.btn--subtract');
const addBtn = document.querySelector('.btn--add');
const customerTotal = document.querySelector('.customer-total');

/**********************************************
    EVENT LISTENERS
**********************************************/
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

addBtn.addEventListener('click', e => {

    let total = Number.parseInt(customerTotal.value, 10);

    if (total < 30) {
        total++;
        customerTotal.value = `${total} People`;
    }
});

/**********************************************
    FORM VALIDATION
**********************************************/

// define a varibale that represents the max attribute for days depending on the selected month
// months30days = [04, 06, 09, 11];
// Determine the value using a function and the array above
// Replace days maxNumber with value variable

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
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
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
            value: 01
        },
        {
            rule: 'maxNumber',
            value: 12
        }
    ])
    .addField('#day', [
        {
            rule: 'required',
            errorMessage: 'Please enter a valid day for the corresponding month'
        },
        {
            rule: 'minNumber',
            value: 01
        },
        {
            rule: 'maxNumber',
            value: 31
        }
    ])
    .addField('#year', [
        {
            rule: 'required',
            errorMessage: 'Please choose a year from 2022 to 2024'
        },
        {
            rule: 'minNumber',
            value: 2022
        },
        {
            rule: 'maxNumber',
            value: 2024
        }
    ])
    .addField('#hour', [
        {
            rule: 'required',
            errorMessage: 'Hour field is required'
        },
        {
            rule: 'minNumber',
            value: 01
        },
        {
            rule: 'maxNumber',
            value: 12
        }
    ])
    .addField('#minute', [
        {
            rule: 'required',
            errorMessage: 'Minute field is required'
        },
        {
            rule: 'minNumber',
            value: 00
        },
        {
            rule: 'maxNumber',
            value: 59
        }
    ])
    .onFail(e => {
        console.log('Invalid', e);
    })
    .onSuccess(e => {
        console.log('Passed', e);
    })