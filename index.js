document.getElementById("form_control").addEventListener("submit", (e) => {
  e.preventDefault();

  const templateParams = {
    to_name: document.getElementById("YourName").value,
    to: document.getElementById("contact_email").value,
    message:document.getElementById("choices").value
   
  };
  
  (function(){
    emailjs.init({
      publicKey: "adXZgWB0sVTEBl3EE",
    });
 })();
 emailjs.send("service_n73y16p", "template_5xy5ozl", templateParams).then(
    (res)=> {
      alert("Ваша заявка успешно отправлена и находится в обработке. Ожидайте email с подтверждением бронирования.");
    },
    (err)=> {
      alert("Error sending email.");
    },
  );
});
