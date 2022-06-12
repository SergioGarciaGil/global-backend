  
//   const $formato=document.querySelector('#formato');
//   const $name=document.querySelector('#name');
//   const $surname=document.querySelector('#surname');
//   const $Username=document.querySelector('#Username');
//   const $password=document.querySelector('#password');
//   const $email=document.querySelector('#email');
//   const $dni=document.querySelector('#dni');
//   const $age=document.querySelector('#age');
//   const $address=document.querySelector('#address');
//   const $phoneNumber=document.querySelector('#phoneNumber');
  

//   function renderName(formData){
//      const name=formData.get('name');
//      $name.textContent=name
//   }
//   function renderSurname(formData){
//      const surname=formData.get('surname');
//      $surname.textContent=surname
//   }
//   function renderUsername(formData){
//      const Username=formData.get('Username');
//      $Username.textContent=Username
//   }
//   function renderpassword(formData){
//      const password=formData.get('password');
//      $password.textContent=password
//   }
//   function renderEmail(formData){
//      const email=formData.get('email');
//      $email.textContent=email
//   }
//   function renderDni(formData){
//      const dni=formData.get('dni');
//      $dni.textContent=dni
//   }
//   function renderAge(formData){
//      const age=formData.get('age');
//      $age.textContent=age
//   }
//   function renderAddress(formData){
//      const address=formData.get('address');
//      $address.textContent=address
//   }
//   function renderPhone(formData){
//      const phoneNumber=formData.get('phoneNumber');
//      $phoneNumber.textContent=phoneNumber
//   }
//   $formato.addEventListener('submit',(event)=>{
//      e.preventDefault();
//      const formData= new FormData(event.currentTarget);
//      renderName(formData);
//      renderSurname(formData);
//      renderUsername(formData);
//      renderpassword(formData);
//      renderEmail(formData);
//      renderDni(formData); 
//      renderAge(formData);
//      renderAddress(formData);
//      renderPhone(formData);
//      fetch('/users/create',{
//          method:'POST',
//          body:formData
//      })
     
//   })





















//  var getdata = function(){

//     let name= document.getElementById('name').value;
//     let surname= document.getElementById('surname').value;
//     let email= document.getElementById('email').value;
//     let Username= document.getElementById('Username').value;
//     let password= document.getElementById('password').value;
//     let DNI= document.getElementById('DNI').value;
//     let age= document.getElementById('age').value;
//     let address= document.getElementById('address').value;
//     let phoneNumber= document.getElementById('phoneNumber').value;
    
//     if(name){
//           name= document.getElementById('name').value;
//           surname= document.getElementById('surname').value;
//           email= document.getElementById('email').value;
//           Username= document.getElementById('Username').value;
//           password= document.getElementById('password').value;
//           DNI= document.getElementById('DNI').value;
//           age= document.getElementById('age').value;
//           address= document.getElementById('address').value;
//           phoneNumber= document.getElementById('phoneNumber').value;
          
//           document.
//           console.log(name,surname,email,Username,password,DNI,age,address,phoneNumber);
          
//         name= document.getElementById('name').value='';
//         surname= document.getElementById('surname').value='';
//         email= document.getElementById('email').value='';
//         Username= document.getElementById('Username').value='';
//         password= document.getElementById('password').value='';
//         DNI= document.getElementById('DNI').value='';
//         age= document.getElementById('age').value='';
//         address= document.getElementById('address').value='';
//         phoneNumber= document.getElementById('phoneNumber').value='';

//     }
//  }

