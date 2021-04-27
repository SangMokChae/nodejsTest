const nodemailer = require('nodemailer'); // nodemailer를 가져올때 require를 사용한다.
const email = {
  host: "smtp.mailtrap.io",
  port: 3,
  auth: {
    user: "2",
    pass: "1"
  }
  // nodemailer smtp 설명에 있음 참조 할 것
  // 메일 서버가 필요로 할때는 mailtrap.io를 이용하면 쉽게 가능해진다.
  // mailtrap은 유용하다.
}


const send = async(option) => {
  // 메일을 보낼려면 smtp 서버가 존재해야하고, 그 메일을 보내는 관리자격 아이디가 필요하다.
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error); // error 발생 시에 찍어낼 것
    } else {
      console.log(info); // 에러가 아닐경우 찍어낼 것
      return info.response;
    }
  });
};

let email_data = {  // 보낼 옵션
  from : '2',
  to : '1',
  subject : 'test메일 입니다.',
  text : 'node.js 한시간만에 끝내보자.'
}

send(email_data);
// response : ok가 떨어지면 성공한 것이다.