const urlBox=document.getElementById('urlBox');
const submitButtons=document.getElementById('submitButtons');
const qrimage=document.getElementById('qr-img');

submitButtons.addEventListener('click', ()=> {
    const inputs=urlBox.value;

    if(!inputs)
    {
        alert("Enter any url!!!")
    }

    else
    {
        qrimage.src =`//api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputs}`;
        qrimage.alt=`QR Code for ${inputs}`
    }
});

