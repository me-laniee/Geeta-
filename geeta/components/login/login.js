import {banner2} from "../../components/dashboard2.js"

export function bannerLogin (){
let login= document.createElement('div')
login.className= "login";
login.textContent= "hola login";

return login;

}

document.body.appendChild(login());