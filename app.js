// function handleUserInfoFunction () {

//     const data = document.getElementById('name-input');
//     console.log(data.value);

// }

const handleUserInfo = document.getElementById('handleUserInfo').addEventListener('click',function(){
    //  for taking input 
    const nameInput = document.getElementById('name-input').value;
    const emailInput = document.getElementById('email-input').value;
    const phoneInput = document.getElementById('phone-input').value;
    // console.log(nameInput, emailInput, phoneInput);

    // for showing input 
    const nameOutput = document.getElementById('name-output');
    const emailOutput = document.getElementById('email-output');
    const phoneOutput = document.getElementById('phone-output');
    nameOutput.innerText = nameInput;
    emailOutput.innerText = emailInput;
    phoneOutput.innerText = phoneInput;
})