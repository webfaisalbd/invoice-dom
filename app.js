// function handleUserInfoFunction () {

//     const data = document.getElementById('name-input');
//     console.log(data.value);

// }

const handleUserInfo = document.getElementById('handleUserInfo').addEventListener('click', function () {
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




// product info get and show on table 

const handleProductInfo = document.getElementById('handleProductInfo').addEventListener('click', function () {
    //  for taking input 
    const itemNameInput = document.getElementById('item-name-input').value;
    const itemPriceInput = document.getElementById('item-price-input').value;
    const itemQuantityInput = document.getElementById('item-quantity-input').value;
    // console.log(itemNameInput, itemPriceInput, itemQuantityInput);

    // for showing output

    const tableBody = document.getElementById('table-body');
    
    // <tr>
    //     <th scope="row">1</th>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    // </tr>

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');


    th.innerText = itemNameInput;
    td1.innerText = itemPriceInput;
    td2.innerText = itemQuantityInput;
    td3.innerText = Number(itemPriceInput)* Number(itemQuantityInput);


    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableBody.appendChild(tr);


})

















// current date 
const todayDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
const dateValue = todayDate.toLocaleDateString('en-US', options);
console.log(dateValue);

const showDate = document.getElementById('showDate');
showDate.innerText = dateValue;
