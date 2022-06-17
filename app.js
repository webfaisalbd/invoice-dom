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

    if (nameInput == '' || emailInput == '' || phoneInput == '') {

        Swal.fire({
            title: 'Provide All the User Information',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        return;


    }
    else {

        // for showing input 
        const nameOutput = document.getElementById('name-output');
        const emailOutput = document.getElementById('email-output');
        const phoneOutput = document.getElementById('phone-output');



        nameOutput.innerText = nameInput;
        emailOutput.innerText = emailInput;
        phoneOutput.innerText = phoneInput;

        // reset with manual
        // document.getElementById('name-input').value = '';
        // document.getElementById('email-input').value = '';
        // document.getElementById('phone-input').value = '';


        // reset with function 
        reset('name-input');
        reset('email-input');
        reset('phone-input');


        // sweet alert 
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Information Submitted successfully',
            showConfirmButton: false,
            timer: 1500
        })

    }



})




// product info get and show on table 

const handleProductInfo = document.getElementById('handleProductInfo').addEventListener('click', function () {
    //  for taking input 
    const itemNameInput = document.getElementById('item-name-input').value;
    const itemPriceInput = document.getElementById('item-price-input').value;
    const itemQuantityInput = document.getElementById('item-quantity-input').value;

    if (itemNameInput == '' || itemPriceInput < 0 || itemPriceInput == '' || itemQuantityInput < 0 || itemQuantityInput == '') {

        // console.log(itemNameInput, itemPriceInput, itemQuantityInput);
        Swal.fire({
            title: 'Provide Valid Item Information',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        return;
    }

    else {



        // for showing output

        const tableBody = document.getElementById('table-body');

        // create tr th td in manually 
        // const tr = document.createElement('tr');
        // const th = document.createElement('th');
        // const td1 = document.createElement('td');
        // const td2 = document.createElement('td');
        // const td3 = document.createElement('td');

        // create tr th td with function  
        const tr = createElementFunction('tr');
        const th = createElementFunction('th');
        const td1 = createElementFunction('td');
        const td2 = createElementFunction('td');
        const td3 = createElementFunction('td');

        td3.classList.add('item-total');


        th.innerText = itemNameInput;
        td1.innerText = itemPriceInput;
        td2.innerText = itemQuantityInput;
        td3.innerText = Number(itemPriceInput) * Number(itemQuantityInput);


        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableBody.appendChild(tr);


        calculateTotal();

        // sweet alert 
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Information Added on Cart',
            showConfirmButton: false,
            timer: 1500
        })


        // reset with manual
        // document.getElementById('item-name-input').value = '';
        // document.getElementById('item-price-input').value = '';
        // document.getElementById('item-quantity-input').value = ''; 

        // reset with function 
        reset('item-name-input');
        reset('item-price-input');
        reset('item-quantity-input');


    }




})


function calculateTotal() {

    // subTotal 
    const subTotal = calculateSubTotal();
    const displaySubTotal = document.getElementById('sub-total');
    displaySubTotal.innerText = subTotal;


    // tax 
    const tax = Number((subTotal * 0.20).toFixed(2));
    document.getElementById('tax').innerText = tax;

    // grand total 
    document.getElementById('grand-total').innerText = subTotal + tax;

    // final total 
    document.getElementById('final-total').innerText = subTotal + tax;



}


function calculateSubTotal() {
    const itemTotal = document.getElementsByClassName('item-total');
    let subTotal = 0;

    // console.log("subtotal", itemTotal);

    for (let i = 0; i < itemTotal.length; i++) {
        // console.log(itemTotal[i]);
        const price = itemTotal[i].innerText;
        // console.log(price);
        subTotal = subTotal + Number(price);
    }

    return subTotal;

}


function createElementFunction(element) {
    return document.createElement(element)
}


// reset 
function reset(value) {
    return document.getElementById(value).value = '';
}


// random invoice id generate 
const invoiceId = document.getElementById('invoice-id');
const generateInvoiceId = parseInt((Math.random() * 100) * 12345);
invoiceId.innerText = generateInvoiceId;




// current date 
const todayDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
const dateValue = todayDate.toLocaleDateString('en-US', options);
console.log(dateValue);

const showDate = document.getElementById('showDate');
showDate.innerText = dateValue;



// download Invoice 
// document.querySelector("#capture")
function downloadInvoice(){
    // #capture is the id, jei part ta ami capture korte chai, se part er ekta id
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var link = document.createElement('a');
      document.body.appendChild(link)
      link.download = 'invoice.png';
      link.href = canvas.toDataURL('image/png');
      link.target = '_blank';
      link.click();
      
  });
  }

