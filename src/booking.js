import JustValidate from 'just-validate';
import JustValidatePluginDate from 'just-validate-plugin-date';

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
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
            fontSize: '12px',
            color: "#dc3545",
        },
        focusInvalidField: true
    }
);

validation
    .addField('#name', [
        {   
            rule: 'required',
            errorMessage: 'This field is required',
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
            errorMessage: 'This field is required',
        },
        {
            rule: 'email',
            errorMessage: 'Please enter a valid email address e.g. (*********@gmail.com)'
        },
    ])
    .addField('#date', [
        {
            plugin: JustValidatePluginDate(() => ({
              required: true,  
              format: 'MM dd yyyy',
              isBefore: '01 01 2025',
              isAfter: '12 31 2021',
            })),
            errorMessage: 'Date should be between 01 01 2022 and 12 31 2024',
          },
    ])
    // .onSuccess(e => {
    //     console.log('Passed', e);
    // })