
import emailjs from 'emailjs-com'


function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm('service_a1424p5', 'template_test',e.target,'user_jd6epflg5ggYo9K58dvZJ' )
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  
}

export default sendEmail;