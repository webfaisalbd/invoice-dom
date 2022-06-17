## `INVOICE DOM PROJECT`

### Features:
- User can store information
- Items information
- user and item null data can't insert
- store items and cost and show it on tabular form
- user can download invoice


#### Link That I used to this Project

```javascript
<!-- bootstrap cdn add  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">  
  
```

```javascript

    
  <!-- fontawesome icon cdn -->
  <script src="https://kit.fontawesome.com/017682a526.js" crossorigin="anonymous"></script>
  
```

```javascript

    
 
  <!-- html2canvas cdn and need to the link html2canvas.min.js  -->
  <!-- Website Link  https://cdnjs.com/libraries/html2canvas -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  
```




##### index.html file
```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice Dom</title>

  <!-- bootstrap cdn add  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

  <!-- fontawesome icon cdn -->
  <script src="https://kit.fontawesome.com/017682a526.js" crossorigin="anonymous"></script>


  <!-- html2canvas cdn and need to the link html2canvas.min.js  -->
  <!-- Website Link  https://cdnjs.com/libraries/html2canvas -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  
  

</head>

<body>

  <section class="main">


    <!-- title  -->
    <div class="">
      <div class="bg-info col-12 text-center">
        <h1 class="py-2"> <span><i class="fas fa-file-invoice-dollar"></i></span> invocice</h1>
      </div>
    </div>



    <!-- input section  -->

    <div class=" row w-75 mx-auto mt-5 rounded shadow-lg">

      <!-- buyer details  -->
      <div class="col-md-6 bg-primary">
        <div class="text-center mt-2">
          <p>Buyer details</p>
        </div>
        <br>
        <!-- form  -->
        <div>
          <div class="form-group">
            <label for="formGroupExampleInput">User Name</label>
            <input type="text" class="form-control" id="name-input" placeholder="Enter User Name">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">User Email</label>
            <input type="text" class="form-control" id="email-input" placeholder="Enter User Email">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">User Phone No.</label>
            <input type="number" class="form-control" id="phone-input" placeholder="Enter User Phone No.">
          </div>
          <br>
          <div class="user-input-button-div text-center">
            <button class="btn btn-success" id="handleUserInfo">Submit</button>
          </div>
          <br>
        </div>
      </div>





      <!-- buyer products details  -->
      <div class="col-md-6 bg-primary">
        <div class="text-center mt-2">
          <p>Buyer Product Details</p>
        </div>
        <marquee behavior="" direction="" class="text-white">You can add more items using input fields.</marquee>
        <!-- form  -->
        <div>
          <div class="form-group">
            <label for="formGroupExampleInput">Item Name</label>
            <input type="text" class="form-control" id="item-name-input" placeholder="Enter Item Name">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Item Price</label>
            <input type="number" class="form-control" id="item-price-input" placeholder="Enter Item Price">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Item Quantity</label>
            <input type="number" class="form-control" id="item-quantity-input" placeholder="Enter Item Quantity">
          </div>
          <br>
          <div class="user-input-button-div text-center">
            <button class="btn btn-success" id="handleProductInfo">Submit</button>
          </div>
          <br>
        </div>
      </div>

    </div>




    <!-- invoice output  -->
    <div  id="capture" class="bg-info container mt-5 mb-5">

      <div class="invoice-number">
        <h3 class="p-2 text-white">Invoice#<span id="invoice-id"></span></h3>
      </div>

      <hr>


      <div class="buyer-info">
        <div class="row">

          <!-- todays date  -->
          <div class="col ms-4 mx-2 bg-primary rounded">
            <div class="d-flex  align-items-center justify-content-center">
              <h4 class="text-white" id="showDate"></h4>
            </div>

          </div>

          <!-- User details show  -->
          <div class="col mx-4 bg-primary p-2 rounded">
            <p class="text-warning">INVOICE TO</p>
            <p>User Name : <span class="text-white" id="name-output"></span></p>
            <p>User Email : <span class="text-white" id="email-output"></span></p>
            <p>User Phone : <span class="text-white" id="phone-output"></span></p>
          </div>
          <div class="col  me-4 bg-primary p-2 rounded">
            <p class="text-warning">SELLER </p>
            <p> <span class="text-white"> Faisal </span></p>
            <p> <span class="text-white"> faisal-bazar@sell.com </span></p>
            <p> <span class="text-white"> Karwan Bazar, Dhaka, Bangladesh </span></p>

          </div>
        </div>
      </div>




      <div class="buyer-product-info mt-5 bg-white">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody id="table-body">
            <!-- <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> -->
          </tbody>


          <tbody>

            <!-- subTotal  -->
            <tr>
              <!-- 3 ta column nise SubTotal, tar sathe SubTotal text ta k 3 ta column er last e dekhanor jonno text-end dise  -->
              <td colspan="3" class="text-end fw-bold">SubTotal</td>
              <td class="text-right">$<span id="sub-total">0</span></td>
            </tr>

            <!-- tax  -->
            <tr>
              <td colspan="3" class="text-end fw-bold">Tax</td>
              <td class="text-right">$ <span id="tax">0</span></td>
            </tr>

            <!-- grand total  -->
            <tr>
              <td colspan="3" class="text-end fw-bold">Grand Total</td>
              <td class="text-right fw-bold">$ <span id="grand-total">0</span> </td>
            </tr>


          </tbody>
        </table>
      </div>




      <!-- amount  -->
      <div class="amount row bg-primary mt-5 p-2">
        <div class="bank-details col-md-8">
          <p class="text-warning">Bank Transfer</p>
          <p><span class="text-danger">Account Name</span>: Faisal Ahmed <br>
            <span class="text-danger">Account Number</span>: 0012345678
            <br>
            <span class="text-danger">Code</span>: 1234567890
          </p>
        </div>
        <div class="amount-details col-md-4">
          <p class="text-warning text-end">Total Amount</p>

          <h4 class="text-end"> $ <span id="final-total" class="text-warning">0</span></h4>
          <p class="text-end"><small>Taxes Included</small></p>
        </div>
      </div>




    </div>

    <!-- make screenshot  -->
    <div class="my-4 text-center">
      <button class="bg-primary text-white rounded"  onclick="downloadInvoice()">Download Invoice</button>
    </div>


    <!-- footer  -->
    <footer class="bg-info p-3">
      <p class="text-center">All rights reserve faisal-bazar@sell.com</p>
    </footer>




  </section>

  <!-- sweet alert cdn  -->
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <!-- ----------------  -->
  <script src="app.js"></script>
  
</body>

</html>
```

##### app.js file
```javascript
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


```