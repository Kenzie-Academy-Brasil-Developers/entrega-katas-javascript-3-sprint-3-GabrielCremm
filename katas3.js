const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];



window.addEventListener("load", kata1)

function kata1() {
    let newElement = document.createElement("div");
    for (let i = 1; i <= 25; i++) {


        let newText = document.createTextNode(i + ", ");
        newElement.appendChild(newText);


        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }

    return newElement, destination;
}



window.addEventListener("load", kata2)

function kata2() {
    let newElement = document.createElement("div");
    for (let i = 25; i >= 1; i--) {


        let newText = document.createTextNode(i + ", ");
        newElement.appendChild(newText);


        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }
    return newElement, destination;

}
window.addEventListener("load", kata3)

function kata3() {
    let newElement = document.createElement("div");
    for (let i = 1; i <= 25; i++) {


        let newText = document.createTextNode(i * -1 + ", ");
        newElement.appendChild(newText);


        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }
    return newElement, destination;
}
window.addEventListener("load", kata4)

function kata4() {
    let newElement = document.createElement("div");

    for (let i = 25; i >= 1; i--) {


        let newText = document.createTextNode(i * -1 + ", ");
        newElement.appendChild(newText);


        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }
    return newElement, destination;

}
window.addEventListener("load", kata5)

function kata5() {
    let newElement = document.createElement("div");

    for (let i = 25; i >= -25; i--) {
        if (i % 2 !== 0) {


            let newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);

        }
    }
    return newElement, destination;
}
window.addEventListener("load", kata6)

function kata6() {
    let newElement = document.createElement("div");

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {


            let newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);

        }
    }
    return newElement, destination;
}


window.addEventListener("load", kata7)

function kata7() {
    let newElement = document.createElement("div");

    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {


            let newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);

        }
    }
    return newElement, destination;
}
window.addEventListener("load", kata8)

function kata8() {
    let newElement = document.createElement("div");
    for (let i = 100; i >= 1; i--) {
        if (i % 3 === 0 || i % 7 === 0) {


            let newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);

        }


    }
    return newElement, destination;
}

window.addEventListener("load", kata9)

function kata9() {
    let newElement = document.createElement("div");

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {


            let newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);

        }
    }
    return newElement, destination;

}
window.addEventListener("load", kata10)

function kata10() {
    let newElement = document.createElement("div");
    for (i = 0; i < sampleArray.length; i++) {
        let newText = document.createTextNode(sampleArray[i] + " ,");
        newElement.appendChild(newText);


        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }
    return newElement, destination;

}
window.addEventListener("load", kata11)

function kata11() {
    let newElement = document.createElement("div");
    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            let newText = document.createTextNode(sampleArray[i] + " ,");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);
        }
    }
    return newElement, destination;

}
window.addEventListener("load", kata12)

function kata12() {
    let newElement = document.createElement("div");
    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            let newText = document.createTextNode(sampleArray[i] + " ,");
            newElement.appendChild(newText);


            let destination = document.getElementById("d0");
            destination.appendChild(newElement);
        }
    }
    return newElement, destination;

}
window.addEventListener("load", kata13)

function kata13() {
    let newElement = document.createElement("div");
    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            let newText = document.createTextNode(sampleArray[i] + " ,");
            newElement.appendChild(newText);

            let destination = document.getElementById("d0");
            destination.appendChild(newElement);
        }
    }
    return newElement, destination;
}
window.addEventListener("load", kata14)

function kata14() {
    let newElement = document.createElement("div");
    for (i = 0; i < sampleArray.length; i++) {
        let newText = document.createTextNode(sampleArray[i] ** 2 + " ,");
        newElement.appendChild(newText);

        let destination = document.getElementById("d0");
        destination.appendChild(newElement);

    }
}
window.addEventListener("load", kata15)

function kata15() {
    let newElement = document.createElement("div");
    let cont = 0;
    for (i = 1; i <= 20; i++) {
        cont += i;
    }
    let newText = document.createTextNode(cont);
    newElement.appendChild(newText);

    let destination = document.getElementById("d0");
    destination.appendChild(newElement);


    return newElement, destination;
}

window.addEventListener("load", kata16)


function kata16() {
    let newElement = document.createElement("div");
    let cont = 0;

    for (i = 0; i < sampleArray.length; i++) {
        cont = cont + sampleArray[i];
    }


    let newText = document.createTextNode(cont);
    newElement.appendChild(newText);

    let destination = document.getElementById("d0");
    destination.appendChild(newElement);
    return newElement, destination;
}
window.addEventListener("load", kata17)

function kata17() {
    let newElement = document.createElement("div");

    let menor = sampleArray[0];

    for (i = 0; i < sampleArray.length; i++) {

        if (menor > sampleArray[i]) {
            menor = sampleArray[i];
        }
    }


    let newText = document.createTextNode(menor);
    newElement.appendChild(newText);

    let destination = document.getElementById("d0");
    destination.appendChild(newElement);

    return newElement, destination;

}
window.addEventListener("load", kata18)

function kata18() {

    let newElement = document.createElement("div");

    let maior = sampleArray[0];

    for (i = 0; i < sampleArray.length; i++) {

        if (maior < sampleArray[i]) {
            maior = sampleArray[i];
        }
    }


    let newText = document.createTextNode(maior);
    newElement.appendChild(newText);

    let destination = document.getElementById("d0");
    destination.appendChild(newElement);

    return newElement, destination;
}


window.addEventListener("load", kataBonus1)

function kataBonus1() {
    for (i = 1; i <= 20; i++) {
        // Create a div, with class "bar", and set the width to 100px.
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = 100 + "px";
        newElement.style.height = 20 + "px";
        newElement.style.display = "inline-block";
        newElement.style.textAlign = "center";
        // Place a text label inside the new div.
        let newText = document.createTextNode(i);
        newElement.appendChild(newText);

        // Put the new div on the page inside the existing element "d0".
        let destination = document.getElementById("d1");
        destination.appendChild(newElement);
    }
    return newElement, destination;
}
window.addEventListener("load", kataBonus2)

function kataBonus2() {
    let cont = 100;
    for (i = 1; i <= 20; i++) {
        if (cont <= 200) {

            cont += 5;
        }
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = cont + "px";
        newElement.style.height = 20 + "px";
        newElement.style.display = "inline-block";
        newElement.style.textAlign = "center";
        // Place a text label inside the new div.
        let newText = document.createTextNode(i);
        newElement.appendChild(newText);

        // Put the new div on the page inside the existing element "d0".
        let destination = document.getElementById("d2");
        destination.appendChild(newElement);

        // implemente o código do kata bonus 2 aqui
    }
    return newElement, destination;
}
window.addEventListener("load", kataBonus3)

function kataBonus3() {

    for (i = 0; i <= sampleArray.length; i++) {

        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px";
        newElement.style.display = "inline-block";
        newElement.style.textAlign = "center";
        // Place a text label inside the new div.
        let newText = document.createTextNode("Pos." + i + " " + "width " + sampleArray[i] + "px");
        newElement.appendChild(newText);

        // Put the new div on the page inside the existing element "d0".
        let destination = document.getElementById("d3");
        destination.appendChild(newElement);


    }
    return newElement, destination;
}
window.addEventListener("load", kataBonus4)

function kataBonus4() {
    for (i = 1; i <= sampleArray.length; i++) {

        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px";
        newElement.style.display = "inline-block";
        newElement.style.textAlign = "center";
        let newText = document.createTextNode("Pos." + i + " " + "width " + sampleArray[i] + "px");
        newElement.appendChild(newText);


        // Put the new div on the page inside the existing element "d0".
        let destination = document.getElementById("d4");
        destination.appendChild(newElement);
    }
    return newElement, destination;

}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}