window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        const numbChoice = document.querySelector('input[name="numb"]:checked');
        const question2 = document.querySelector("#question2").value;
        const question3 = document.querySelector("#question3").value;
        const question4 = document.querySelector("#question4").value;
        const question5 = document.querySelector("#question5").value;

        let response = "";

        if (numbChoice && parseInt(numbChoice.value) <= 13 && question4.toLowerCase() !== "black") {
            response += "You like spooky numbers!";
        } else if (numbChoice && parseInt(numbChoice.value) >= 22 && parseInt(numbChoice.value) < 99 && question4.toLowerCase() !== "black") {
            response += "Another language will display here";
        } else if (numbChoice && parseInt(numbChoice.value) >= 100 && question4.toLowerCase() !== "black") {
            response += "Oh you like numbers?";
        }

        if (question2.toLowerCase() === "taco" && question4.toLowerCase() !== "black") {
            response += "What language will display here";
        }

        if (question3.toLowerCase() === "japan" && question4.toLowerCase() !== "black") {
            response += "What language will display here";
        }

        if (question4.toLowerCase() === "red" && question4.toLowerCase() !== "black") {
            response += "What language will display here";
        } else if (question4.toLowerCase() === "white") {
            response += "Maybe you should look into another hobby...";
        } else if (question4.toLowerCase() === "black") {
            response += "Maybe seek out another hobbie..."
        }

        if (question5.toLowerCase() === "yes" && question4.toLowerCase() !== "black") {
            response += "What you like is cool!";
        } else if (question5.toLowerCase() === "no" && question4.toLowerCase() !== "black") {
            response += "Maybe you should explore coding!";
        } else if (question5.toLowerCase() === "code?" && question4.toLowerCase() !== "black") {
            response += "01001001 01110100 00100111 01110011 00100000 01101111 01101011 01100001 01111001 00101100 00100000 01110100 01110010 01111001 00100000 01101111 01110101 01110100 00100000 01000101 01110000 01101001 01100011 01101111 01100100 01110101 01110011 00101100 00100000 01110100 01101000 01100101 01111001 00100000 01110111 01101001 01101100 01101100 00100000 01110011 01101000 01101111 01110111 00100000 01111001 01101111 01110101 00100000 01110100 01101000 01100101 00100000 01110111 01100001 01111001 00100001";
        }

        document.querySelector("#choice").innerText = response.trim();
    };
};