document.getElementById('updateProfile').addEventListener('click', function() {
    
    document.getElementById('profilePopup').style.display = 'flex';
    document.body.classList.add('no-scroll');

    document.querySelector('.top_header').classList.add('blur');
    document.querySelector('.bottom_header').classList.add('blur');

    document.getElementById('editButton').style.display = 'inline-block'; 
    document.getElementById('saveButton').style.display = 'none'; 

    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('phone').disabled = true;
});

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("address").value = localStorage.getItem("address");
    document.getElementById("phone").value = localStorage.getItem("mobile");

});

document.getElementById('editButton').addEventListener('click', function() {
  
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('address').disabled = false;
    document.getElementById('phone').disabled = false;

    document.getElementById('editButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline-block';
});

document.getElementById('saveButton').addEventListener('click', function() {
  
    const updatedName = document.getElementById('name').value;
    const updatedEmail = document.getElementById('email').value;
    const updatedAddress = document.getElementById('address').value;
    const updatedPhone = document.getElementById('phone').value;

    localStorage.setItem("name",updatedName);
    localStorage.setItem("email",updatedEmail);
    localStorage.setItem("address",updatedAddress);
    localStorage.setItem("phone",updatedPhone);

    alert('Successfully Updated!');

    document.getElementById('profilePopup').style.display = 'none';
    document.body.classList.remove('no-scroll');

    document.querySelector('.top_header').classList.remove('blur');
    document.querySelector('.bottom_header').classList.remove('blur');
});

document.getElementById('cancelButton').addEventListener('click', function() {
   
    document.getElementById('profilePopup').style.display = 'none';
    document.body.classList.remove('no-scroll');

    document.querySelector('.top_header').classList.remove('blur');
    document.querySelector('.bottom_header').classList.remove('blur');
});
