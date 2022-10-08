const outerCon = document.querySelector('.outer-con');
const customContainer = document.querySelector('.custom-container');
const formCon = document.querySelector('.form-con');
const playerForm = document.querySelector('.player-form');
const signUpBtn = document.querySelector('.signup-btn');
const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('input');


signUpBtn.addEventListener('click', (e) => {
    console.log('Button Clicked!');
    customContainer.style.display = "none";
    formCon.style.display = "block";
    outerCon.setAttribute('id', 'show-form')
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Submitted!');
    for(i = 0; i < inputs.length; i++) {
        inputs[i].style.display = "none";
    }
    submitBtn.style.display = "none";
    const submitted = document.createElement('h2');
    submitted.textContent = 'Application Submitted!';
    submitted.setAttribute('class', 'submitted');
    playerForm.append(submitted);
})