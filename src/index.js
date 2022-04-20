// Variables for section events
const eventsImages = document.querySelectorAll('.image--events');
const eventsBtns = document.querySelectorAll('.btn--events');
const eventsAccents = document.querySelectorAll('.btn--events .accent');
const eventsHeading = document.querySelector('.events__heading');
const eventsText = document.querySelector('.events__text');

// Varibales for family gathering button
const familyBtn = document.querySelector('.btn--events.family');
const familyHeading = `Family Gathering`;
const familyText = 
    `We love catering for entire families. So please 
    bring everyone along for a special meal with your 
    loved ones. We’ll provide a memorable experience for all.`;

// Variables for special events button
const specialBtn = document.querySelector('.btn--events.special');
const specialHeading = `Special Events`;
const specialText = 
    `Whether it’s a romantic dinner or special date you’re 
    celebrating with others we’ll look after you. We’ll be 
    sure to mark your special date with an unforgettable meal.`;

// Variables for social events button
const socialBtn = document.querySelector('.btn--events.social');
const socialHeading = `Social Events`;
const socialText = 
    `Are you looking to have a larger social event? No problem! 
    We’re more than happy to cater for big parties. We’ll work 
    with you to make your event a hit with everyone.`;

// Checks each image in events for the provided class name.
// Uses the ternary operator to decide the display status of each image.
const imageContainsClass = (string => {

    eventsImages.forEach(image => {
        const classes = image.classList;
        
        classes.contains(string) ? classes.remove('hidden') : classes.add('hidden');
    });
});

// Checks each button in events for the provided class name.
// Uses the ternary operator to decide the active state of each button.
const btnContainsClass = (string => {

    eventsBtns.forEach(btn => {
        const classes = btn.classList;
        
        classes.contains(string) ? classes.add('active') : classes.remove('active');
    });
});

// Checks each accent in events for the provided class name.
// Uses the ternary operator to decide the display status of each accent.
const accentContainsClass = (string => {

    eventsAccents.forEach(accent => {
        const classes = accent.classList;
        
        classes.contains(string) ? classes.remove('hidden') : classes.add('hidden');
    });
});

/**********************************************
    EVENT LISTENERS
**********************************************/

// Family Gathering button
familyBtn.addEventListener('click', e => {

    imageContainsClass('family');
    btnContainsClass('family');
    accentContainsClass('accent--family');
    eventsHeading.textContent = familyHeading;
    eventsText.textContent = familyText;
});

// Special Events button
specialBtn.addEventListener('click', e => {

    imageContainsClass('special');
    btnContainsClass('special');
    accentContainsClass('accent--special');
    eventsHeading.textContent = specialHeading;
    eventsText.textContent = specialText;
});

// Social Events button
socialBtn.addEventListener('click', e => {

    imageContainsClass('social');
    btnContainsClass('social');
    accentContainsClass('accent--social');
    eventsHeading.textContent = socialHeading;
    eventsText.textContent = socialText;
});
