
import emailjs from 'emailjs-com'


function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm(process.env.SERVICE, 'template_test',e.target,process.env.USER )  
.then((result) => {
      console.log(result.text);
      console.log(e);
      console.log(e.target);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  
}

export const sendMailNoEvent = (target)=>{
  emailjs.send(process.env.SERVICE, 'template_test',{email:target},process.env.USER )
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  console.log(target);
}

export default sendEmail;