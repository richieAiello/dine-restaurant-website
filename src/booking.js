import JustValidate from 'just-validate';
// import JustValidatePluginDate from 'just-validate-plugin-date';

// btn--day-night variables
const dayNightBtn = document.querySelector('.btn--day-night');
const dayNightText = document.querySelector('.day-night__text');
const dayNightArrow = document.querySelector('.day-night__arrow');
const dayNightContainer = document.querySelector('.day-night-container');

// btn--am variables
const amBtn = document.querySelector('.btn--am');
const amCheck = document.querySelector('.btn--am .check');

// btn--pm variables
const pmBtn = document.querySelector('.btn--pm');
const pmCheck = document.querySelector('.btn--pm .check');

// customer total variables
const subtractBtn = document.querySelector('.btn--subtract');
const addBtn = document.querySelector('.btn--add');
const customerTotal = document.querySelector('.customer__total');
const customerText = document.querySelector('.customer__text');

/**********************************************
    EVENT LISTENERS
**********************************************/
dayNightBtn.addEventListener('click', e => {

    dayNightArrow.classList.toggle('flip');
    dayNightContainer.classList.toggle('hidden');
});

amBtn.addEventListener('click', e => {

    dayNightText.textContent = 'AM'
    amCheck.classList.remove('hidden');
    pmCheck.classList.add('hidden');
});

pmBtn.addEventListener('click', e => {

    dayNightText.textContent = 'PM'
    pmCheck.classList.remove('hidden');
    amCheck.classList.add('hidden');
});

subtractBtn.addEventListener('click', e => {

    let total = Number.parseInt(customerTotal.textContent, 10);

    if (total > 1) {
        total--;
        customerTotal.textContent = total;
    } 
    
    if (total === 1) {
        customerText.textContent = 'Person';
    }
});

addBtn.addEventListener('click', e => {

    let total = Number.parseInt(customerTotal.textContent, 10);

    if (total < 30) {
        total++;
        customerTotal.textContent = total;
        customerText.textContent = 'People';
    }
});

/**********************************************
    FORM VALIDATION
**********************************************/

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
    // .onSuccess(e => {
    //     console.log('Passed', e);
    // })