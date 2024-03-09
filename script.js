console.log(scrollY)

const bottomFixed =document.getElementById("bottom-fixed");

document.addEventListener("scroll" , ()=>{
    console.log(scrollY);
    if(scrollY > 250 && scrollY < 2400 && screen.width < 600){
        bottomFixed.style.visibility = "visible"
    }else{
        bottomFixed.style.visibility = "hidden"
    }
})

const expandIconOne = document.getElementById('expand-icon1')
const expandIconTwo = document.getElementById('expand-icon2')
const expandIconThree = document.getElementById('expand-icon3')
const expandIconFour = document.getElementById('expand-icon4')
const expandIconFive = document.getElementById('expand-icon5')
const expandIconSix = document.getElementById('expand-icon6')

const aOne = document.getElementById('a1')
const aTwo = document.getElementById('a2')
const aThree = document.getElementById('a3')
const aFour = document.getElementById('a4')
const aFive = document.getElementById('a5')
const aSix = document.getElementById('a6')

expandIconOne.addEventListener("click" , ()=>{
    console.log(expandIconOne.style.transform);
    if(expandIconOne.style.transform == "rotate(45deg)"){
        expandIconOne.style.transform = "rotate(0deg)"
        aOne.style.height = "0"
        aOne.style.padding = "0"
    }else{

        expandIconOne.style.transform = "rotate(45deg)"
        aOne.style.height = "auto"
        aOne.style.padding = "1.5rem"

    }
})

expandIconTwo.addEventListener("click" , ()=>{
    console.log(expandIconTwo.style.transform);
    if(expandIconTwo.style.transform == "rotate(45deg)"){
        expandIconTwo.style.transform = "rotate(0deg)"
        aTwo.style.height = "0"
        aTwo.style.padding = "0"
    }else{

        expandIconTwo.style.transform = "rotate(45deg)"
        aTwo.style.height = "auto"
        aTwo.style.padding = "1.5rem"

    }
})

expandIconThree.addEventListener("click" , ()=>{
    console.log(expandIconThree.style.transform);
    if(expandIconThree.style.transform == "rotate(45deg)"){
        expandIconThree.style.transform = "rotate(0deg)"
        aThree.style.height = "0"
        aThree.style.padding = "0"
    }else{

        expandIconThree.style.transform = "rotate(45deg)"
        aThree.style.height = "auto"
        aThree.style.padding = "1.5rem"

    }
})

expandIconFour.addEventListener("click" , ()=>{
    console.log(expandIconFour.style.transform);
    if(expandIconFour.style.transform == "rotate(45deg)"){
        expandIconFour.style.transform = "rotate(0deg)"
        aFour.style.height = "0"
        aFour.style.padding = "0"
    }else{

        expandIconFour.style.transform = "rotate(45deg)"
        aFour.style.height = "auto"
        aFour.style.padding = "1.5rem"

    }
})

expandIconFive.addEventListener("click" , ()=>{
    console.log(expandIconFive.style.transform);
    if(expandIconFive.style.transform == "rotate(45deg)"){
        expandIconFive.style.transform = "rotate(0deg)"
        aFive.style.height = "0"
        aFive.style.padding = "0"
    }else{

        expandIconFive.style.transform = "rotate(45deg)"
        aFive.style.height = "auto"
        aFive.style.padding = "1.5rem"

    }
})


expandIconSix.addEventListener("click" , ()=>{
    console.log(expandIconSix.style.transform);
    if(expandIconSix.style.transform == "rotate(45deg)"){
        expandIconSix.style.transform = "rotate(0deg)"
        aSix.style.height = "0"
        aSix.style.padding = "0"
    }else{

        expandIconSix.style.transform = "rotate(45deg)"
        aSix.style.height = "auto"
        aSix.style.padding = "1.5rem"

    }
})


const emailInput = document.getElementById('emailInput');
  const emailValidationMessage = document.getElementById('emailValidationMessage');
  const emailValidationMessageTwo = document.getElementById('emailValidationMessage2');
  emailInput.addEventListener('change', function () {
    const email = emailInput.value.trim();

    // Simple email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailValidationMessage.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r8:" role="img" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg> Invalid email address';
      emailValidationMessageTwo.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r8:" role="img" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg> Invalid email address';
    emailInput.style.border = 'solid 1px red'
    } else {
      emailValidationMessage.textContent = '';
      emailValidationMessageTwo.textContent = '';
    emailInput.style.border = 'solid 1px green'

    }
  });



const emailInputT = document.getElementById('emailInputT');
const emailValidationMessageT = document.getElementById('emailValidationMessageT');
const emailValidationMessageTwoT = document.getElementById('emailValidationMessage2T');
emailInputT.addEventListener('change', function () {
  const email = emailInputT.value.trim();

  // Simple email validation using regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    emailValidationMessageT.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r8:" role="img" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg> Invalid email address';
    emailValidationMessageTwoT.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r8:" role="img" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg> Invalid email address';
  emailInputT.style.border = 'solid 1px red'
  } else {
    emailValidationMessageT.textContent = '';
    emailValidationMessageTwoT.TtextContent = '';
  emailInputT.style.border = 'solid 1px green'

  }
});


