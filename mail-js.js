import  SMTP2GOApi from "smtp2go-nodejs";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

config();


const apiKey = process.env.APIKEY;
console.log(apiKey)

console.log(SMTP2GOApi);

const api = SMTP2GOApi(apiKey);
// const api = SMTP2GOApi.default(apiKey);

console.log(api);

try {
    //const response = await api.mail.send(emailData);

    const serviceApi = api.mail()
        .to({ email: 'fmesturini@gmail.com',name:"Felipe Mesturini" })
        .from({ email: 'felipe.mesturini@otimizy.com.br' })
        .subject('Testing')
        .html(`<h1>Welcome Felipe Mesturini</h1>
        <img src="cid:a-cat"/>
        <p>This is a test html email!</p>`);
    // .attach(require('path').resolve(__dirname, './files/test.txt'))
    // .inline('a-cat', require('path').resolve(__dirname, './files/cat.jpg'));

    api.client().consume(serviceApi);
    console.log("Email sent: ", serviceApi);
} catch (problem) {
    console.error("Error", problem);
}
// api.client().consume(mailService);