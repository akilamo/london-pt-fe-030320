// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const target = document.querySelector(".click button");
  target.addEventListener("click", () => {
    console.log("the button was clicked");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
    const target = document.querySelector('.mouseover a');
    target.addEventListener("mouseover", () => {
        console.log("click the link");
    })
}


/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

const handleLeave = () => {
    const target = document.querySelector('.mouseover a');
    target.addEventListener("mouseout", () => {
        console.log("message alert");
    })
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
    const target = document.querySelector('.input input');
    target.addEventListener('focus', () => {
        console.log('focus!')
    })
}

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
    const target = document.querySelector('.input input');
     target.addEventListener('blur', () => {
         console.log('you clicked somewhere else');
     })
 }

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
   const target = document.querySelector('.input input');
    target.addEventListener('keydown', () => {
        console.log('a key was pressed');
    })
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
    const target = document.querySelector('.input input');
     target.addEventListener('keyup', () => {
         console.log('a key was released');
     })
 }

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

 const inputToUpperCase = () => {
  const targetInput = document.querySelector(".input input");
  targetInput.addEventListener("keyup", () => {
    targetInput.value = targetInput.value.toUpperCase();
  });
};

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

const handleSelectChange = () => {
  const target = document.querySelector("#items");
  target.addEventListener("change", (event) => console.log(event.target.value));
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 *
 * const submitFormHandler = () => {
  const form = document.querySelector("form");
  const formInput = document.querySelectorAll("form > input");
  const obj = {};

  form.addEventListener("submit", (event) => {
    formInput.forEach((input, objectIndex) => {
      if (objectIndex === 0) {
        obj.firstName = input.value;
      } else if (objectIndex === 1) {
        obj.lastName = input.value;
      }
    });

    console.log(obj);
    event.preventDefault(); 
  });
};

submitFormHandler();
 * 
 */

const submitFormHandler = () => {
  const form = document.querySelector("form");
  const formInput = document.querySelectorAll("form > input");
  const obj = {};

  form.addEventListener("submit", (event) => {
    formInput.forEach(input  => {obj[input.name] = input.value});
    
    console.log(obj);
    event.preventDefault(); 
  });
};

submitFormHandler();



/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
    })
}