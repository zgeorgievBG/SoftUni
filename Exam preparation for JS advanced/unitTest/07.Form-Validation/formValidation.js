function validate() {

    let inputUserName = document.getElementById("username");
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    let inputConfirmedPassword = document.getElementById("confirm-password");
    let checkBox = document.getElementById('company');
    let divValidElement = document.getElementById("valid");

    document.getElementById('company').addEventListener('change', (ev) => {

        if(ev.target.checked) {
            document.getElementById('companyInfo').style.display = 'inline'
  
        } else {
            document.getElementById('companyInfo').style.display = 'none'
            
        }
    })


  document.getElementById("submit").addEventListener("click", (ev) => {

    ev.preventDefault()
    const userNamePattern = /^[A-Za-z0-9]{3,20}$/g;
    const passwordPattern = /^\w{5,15}$/g;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    let isValid = true;

    if(userNamePattern.test(inputUserName.value) == false) {
        inputUserName.style.borderColor = 'red';
        isValid = false;
    } else {
        inputUserName.style.borderColor = '';
    }

    if(emailPattern.test(inputEmail.value) == false) {
        inputEmail.style.borderColor = 'red';
        isValid = false;
    } else {
        inputEmail.style.borderColor = '';
    }

    if(passwordPattern.test(inputPassword.value) == false || inputPassword.value !== inputConfirmedPassword.value) {
        inputPassword.style.borderColor = 'red';
        inputConfirmedPassword.style.borderColor = 'red';
        isValid = false;
    } else {
        inputPassword.style.borderColor = '';
        inputConfirmedPassword.style.borderColor = '';
    }

    if(checkBox.checked) {
        let inputCompanyNumber = document.getElementById('companyNumber');
        if(inputCompanyNumber.value < 1000 || inputCompanyNumber.value > 9999) {
            inputCompanyNumber.style.borderColor = 'red';
            isValid = false;
        } else {
            inputCompanyNumber.style.borderColor = '';
        }
    }

    if(!isValid) {
        divValidElement.style.display = 'none'
    } else {
        divValidElement.style.display = 'inline'
    }
  });

}

// function validate() {
//     document.querySelector("#submit").type = "button";
//     document.querySelector("#company").addEventListener("change", (e) => {
//       console.log(e.target);
//       if (document.querySelector("#company").checked) {
//         document.querySelector("#companyInfo").style.display = "block";
//       } else {
//         document.querySelector("#companyInfo").style.display = "none";
//       }
//     });

//     document.querySelector("#submit").addEventListener("click", (e) => {
//       let validOut = [];
//       let userName = document.querySelector("#username");
//       let email = document.querySelector("#email");
//       let passWord = document.querySelector("#password");
//       let confirmPass = document.querySelector("#confirm-password");
//       let checkBox = document.querySelector("#company");
//       let userTest = /^[A-Za-z0-9]{3,20}$/;
//       let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
//       let passTest = /^[\w]{5,15}$/;

//       //console.log(checkBox.checked);

//       if (userTest.exec(userName.value) === null) {
//         userName.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         userName.style.borderColor = "";
//         validOut.push(true);
//       }

//       if (emailTest.exec(email.value) === null) {
//         email.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         email.style.borderColor = "";
//         validOut.push(true);
//       }

//       if (
//         passWord.value === confirmPass.value &&
//         passTest.exec(confirmPass.value) != null &&
//         passTest.exec(passWord.value) != null
//       ) {
//         confirmPass.style.borderColor = "";
//         passWord.style.borderColor = "";
//         validOut.push(true);
//       } else {
//         confirmPass.style.borderColor = "red";
//         passWord.style.borderColor = "red";
//         validOut.push(false);
//       }

//       if (checkBox.checked) {
//         let company = document.querySelector("#companyNumber");
//         if (company.value < 1000 || company.value > 9999) {
//           company.style.borderColor = "red";
//           validOut.push(false);
//         } else {
//           company.style.borderColor = "";
//           validOut.push(true);
//         }
//       }

//       if (!validOut.includes(false)) {
//         document.querySelector("#valid").style.display = "block";
//       } else {
//         document.querySelector("#valid").style.display = "none";
//       }
//     });
//   }
