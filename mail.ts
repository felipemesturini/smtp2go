import SMTP2GOApi from "smtp2go-nodejs";
import { config } from "dotenv";

async function send(): Promise<void> {
    config();
    const apiKey = process.env.APIKEY;
 
    console.log(__dirname);
    console.log(__filename);

    const api = SMTP2GOApi(apiKey);
    try {
        const serviceApi = api.mail()
            .to({ email: 'fmesturini@gmail.com',name:"Felipe Mesturini" })
            .from({ email: 'no_reply@getsistemas.com.br' })
            .subject('API SMTP2GO')
            .html(`<h1>Welcome Felipe Mesturini</h1>
                <img src="cid:profile"/>
                <p>This is a test html email!</p>`)
            .attach(require('path').resolve(__dirname, './files/carteirinha.pdf'))
            .inline('profile', require('path').resolve(__dirname, './files/city.png'));

        api.client().consume(serviceApi);
        console.log("Email sent: ", serviceApi);
        console.log("serviceApi.htmlBody: ", serviceApi.htmlBody);
        console.log("serviceApi.subjectLine: ", serviceApi.subjectLine);
        console.log("serviceApi.endpoint: ", serviceApi.endpoint);
        console.log("serviceApi.method: ", serviceApi.method);
        console.log("serviceApi.fromAddress.email: ", serviceApi.fromAddress.email);
        await new Promise<void>(resolve => setTimeout(resolve, 2000))
        console.log('Wait for 2 seconds');
    } catch (problem) {
        console.error("Error", problem);
    }    
}

for (let index = 1; index <= 5; index++) {
    console.log(`Index: ${index}`);
}
    
send()