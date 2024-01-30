
function sendmail(){
    var params={name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,}
const serviceId= "service_ze9lviw";
const templateId = "template_r7tfjln";

emailjs.send(serviceId,templateId,params).then((res)=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message has been succesfully sent");
}).catch((err) => console.log(err));
};