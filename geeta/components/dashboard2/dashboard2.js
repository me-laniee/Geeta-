export function dashboard2(){
    let div = document.createElement('div');
    div.className = "div-banner2";

    let h2 = document.createElement("h2");
    h2.textContent = "Geeta.";
    h2.className = "h2";
    h2.style.fontWeight = "bold";
    div.appendChild(h2);

    let p1 = document.createElement("p");
    p1.textContent = "Create your fashion in your own way";
    p1.className = "p1";
    p1.style.fontWeight = "bold";
    div.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = "Each men and women has their own style, Geeta help you to create your unique style. ";
    p2.className = "p2";
    div.appendChild(p2);

    let logIn = document.createElement("a");
    logIn.textContent = "Log In";
    logIn.className = "log-in";
    logIn.style.fontWeight = "bold"; // Negrita
    logIn.addEventListener("click", () => { alert("Hola mundo")
    div.classList.add("ocultar");
    });
    div.appendChild(logIn);

    let orSpan = document.createElement("span");
    orSpan.textContent = "--Or-- ";
    orSpan.className = "or-Span";
    orSpan.style.fontWeight = "bold";
    div.appendChild(orSpan);

    let registerBtn = document.createElement("a");
    registerBtn.textContent = "Register";
    registerBtn.className = "register-Btn";
    registerBtn.style.fontWeight = "bold";
    div.appendChild(registerBtn);

    return div;
}

document.body.appendChild(banner2());