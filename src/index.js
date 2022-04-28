// Variables for section events
const eventsImages = document.querySelectorAll(".image--events");
const eventsBtns = document.querySelectorAll(".btn--events");
const eventsAccents = document.querySelectorAll(".btn--events .accent");
const eventsHeading = document.querySelector(".events__heading");
const eventsText = document.querySelector(".events__text");

// Varibales for family gathering button
const familyBtn = document.querySelector(".btn--events.family");
const familyHeading = `Family Gathering`;
const familyText = `We love catering for entire families. So please 
    bring everyone along for a special meal with your 
    loved ones. We’ll provide a memorable experience for all.`;

// Variables for special events button
const specialBtn = document.querySelector(".btn--events.special");
const specialHeading = `Special Events`;
const specialText = `Whether it’s a romantic dinner or special date you’re 
    celebrating with others we’ll look after you. We’ll be 
    sure to mark your special date with an unforgettable meal.`;

// Variables for social events button
const socialBtn = document.querySelector(".btn--events.social");
const socialHeading = `Social Events`;
const socialText = `Are you looking to have a larger social event? No problem! 
    We’re more than happy to cater for big parties. We’ll work 
    with you to make your event a hit with everyone.`;

/**********************************************
    FUNCTIONS
**********************************************/
// Disables all buttons for section events
// Enables all buttons for section events after 500ms to allow animations to finish.
const btnTimeout = () => {
  eventsBtns.forEach((btn) => btn.setAttribute("disabled", "disabled"));

  setTimeout(() => {
    eventsBtns.forEach((btn) => btn.removeAttribute("disabled"));
  }, "650");
}

const animate = (element, animation) => {
  element.classList.add(animation);

  element.addEventListener('animationend', e => {
    e.currentTarget.classList.remove(animation)
  })
};

// Checks each image in events for the provided class name.
// Uses the ternary operator to decide the display status of each image.
// Uses the ternary operator and animate function to animate the current image.
const imageContainsClass = (string) => {
  eventsImages.forEach((image) => {
    const classes = image.classList;

    classes.contains(string) ? 
    classes.remove("hidden") : 
    classes.add("hidden");

    classes.contains(string) ? 
    animate(image, "slide-in-left") :
    null;
  });
};

// Checks each accent in events for the provided class name.
// Uses the ternary operator to decide the display status of each accent.
// Uses the ternary operator and animate function to animate the current accent.
const accentContainsClass = (string) => {
  eventsAccents.forEach((accent) => {
    const classes = accent.classList;

    classes.contains(string) ? 
    classes.remove("hidden") : 
    classes.add("hidden");

    classes.contains(string) ? 
    animate(accent, "fade-in") :
    null;
  });
};

// Checks each button in events for the provided class name.
// Uses the ternary operator to decide the active state of each button.
const btnContainsClass = (string) => {
  eventsBtns.forEach((btn) => {
    const classes = btn.classList;

    classes.contains(string) ? 
    classes.add("active") : 
    classes.remove("active");
  });
};

// Uses the animate function to animate events heading and text
const animateContext = () => {
  animate(eventsHeading, "slide-in-right");
  animate(eventsText, "slide-in-right");
};

// Changes content of events heading and text
const changeContext = (heading, text) => {
  eventsHeading.textContent = heading;
  eventsText.textContent = text;
};

/**********************************************
    EVENT LISTENERS
**********************************************/

// Family Gathering button
familyBtn.addEventListener("click", (e) => {
  if (eventsHeading.textContent !== familyHeading) {
    btnTimeout();

    imageContainsClass("family");
    btnContainsClass("family");
    accentContainsClass("accent--family");

    animateContext();
    changeContext(familyHeading, familyText);
  }
});

// Special Events button
specialBtn.addEventListener("click", (e) => {
  if (eventsHeading.textContent !== specialHeading) {
    btnTimeout();

    imageContainsClass("special");
    btnContainsClass("special");
    accentContainsClass("accent--special");

    animateContext();
    changeContext(specialHeading, specialText);
  }
});

// Social Events button
socialBtn.addEventListener("click", (e) => {
  if (eventsHeading.textContent !== socialHeading) {
    btnTimeout();

    imageContainsClass("social");
    btnContainsClass("social");
    accentContainsClass("accent--social");

    animateContext();
    changeContext(socialHeading, socialText);
  }
});