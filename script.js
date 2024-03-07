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

