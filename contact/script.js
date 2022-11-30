let form = document.getElementById('form') 







// let form = document.getElementById('validationForm') 
// let forName = document.getElementById('firstName')
// let lastName = document.getElementById('lastName')
// let email = document.getElementById('email')
// let textarea = document.getElementById('yolo')

// form.addEventListener('submit', e =>{
//     e.preventDefault(); 
//     console.log("works")
//     validateInputs()
// })

// forName.addEventListener('click', (e) => {
//     console.log("You clicked ", e.target);
//     console.log("My next element", e.target.nextElementSibling)
//     e.target.nextElementSibling.innerText = "";
// })



// const setError = (element, message) => {
//     const InputControl = element.parentElement
//     const errorDisplay = InputControl.querySelector('.error')

//     errorDisplay.innerText = message
//     InputControl.classList.add('error')
//     InputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const InputControl = element.parentElement
//     const errorDisplay = InputControl.querySelector('.error')

//     errorDisplay.innerText = '';
//     InputControl.classList.add('success')
//     InputControl.classList.remove('error')
// }

// const isValidEmail = email => {
//     const regEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
//     return regEX.test(String(email).toLowerCase())


// }


// const validateInputs = () =>{
//     const forNameValue = forName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const textAreaValue = textarea.value.trim();

//     if(forNameValue === ""){
//         setError(forName, 'Förnamn please')
//     } else {
//         setSuccess(forName)
//     }
//     if(lastNameValue === ""){
//         setError(lastName, 'Efternamn please')
//     } else {
//         setSuccess(lastName)
//     }
//     if(emailValue === ""){
//         setError(email, 'Email please')
//     } else if (!isValidEmail(emailValue)){
//         setError(email, 'provide a valid email')
//     } else {
//         setSuccess(email)
//     }

//     if(textAreaValue === ""){
//         setError(textarea, 'skriv some text is ')
//     } else {
//         setSuccess(textarea)
//     }
   



// }

