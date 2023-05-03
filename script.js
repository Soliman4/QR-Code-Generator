const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrimage = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener('click', ()=>{
    let qrvalue = qrinput.value;
    if(!qrvalue) return ; // if the input empty return from here
    generateBtn.innerText = "Generating QR Code ...";
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ${qrvalue}`
    qrimage.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"
    })
})
