window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        const numbChoice = document.querySelector("#numInput").value;
        const question2 = document.querySelector('input[name="question2"]:checked').value;
        const question3 = document.querySelector("#question3").value;
        const question4 = document.querySelector("#question4").value;
        const question5 = document.querySelector("#question5").value;

        let response = "";

        if (parseInt(numbChoice) <= 10 && question4.toLowerCase() !== "black") {
            response += "Keeping it simple I see. ";
        } else if (parseInt(numbChoice) === 11 && parseInt(numbChoice) && question4.toLowerCase() !== "black") {
            response += "Its not 10, its one louder! ";
        } else if (parseInt(numbChoice) >= 12 && parseInt(numbChoice) <= 41 && question4.toLowerCase() !== "black") {
            response += "Random number choice, lets move on. ";
        } else if (parseInt(numbChoice) === 42 && parseInt(numbChoice) && question4.toLowerCase() !== "black") {
            response += "Don't forget to bring a towel. ";
        } else if (parseInt(numbChoice) >= 43 && question4.toLowerCase() !== "black") {
            response += "Oh, so you like numbers? ";
        }

        if (question2.toLowerCase() === "hot dog" && question4.toLowerCase() !== "black") {
            response += "Hot dogs are quick and easy. Food is not a priority, more time for coding. ";
        } else if (question2.toLowerCase() === "taco" && question4.toLowerCase() !== "black") {
            response += "Tacos provide great neck exercise, a strong neck is great for staring at a computer screen. ";
        } else if (question2.toLowerCase() === "pizza" && question4.toLowerCase() !== "black") {
            response += "Pizza, no time to cook a meal. Get delivery, more time for coding! ";
        }

        if (question3.toLowerCase() === "san diego" && question4.toLowerCase() !== "black") {
            response += "San Diego, one of the most expensive cities to live in the U.S. Why would Carmen Sandiego want to be there?";
        } else if (question3.toLowerCase() === "japan" && question4.toLowerCase() !== "black") {
            response += "If I were as internationally traveled as Carmen Sandiego, I'd probably kick it in Japan too. ";
        } else if (question3.toLowerCase() === "mexico" && question4.toLowerCase() !== "black") {
            response += "Mexico is culturally diverse in history, beauty and cuisine, if I were Carmen I'd be there. ";
        }

        if (question4.toLowerCase() === "red" && question4.toLowerCase() !== "black") {
            response += "Red response. ";
        } else if (question4.toLowerCase() === "white") {
            response += "White response. ";
        } else if (question4.toLowerCase() === "black") {
            response += "Maybe seek out another hobbie..."
        }

        if (question5.toLowerCase() === "i eat sleep and breath it!" && question4.toLowerCase() !== "black") {
            response += "Well then, I suppose you should try C#, the language not the chord.";
        } else if (question5.toLowerCase() === "have you seen my myspace page?" && question4.toLowerCase() !== "black") {
            response += "I have not seen your MySpace page, I'm sure it was amazing. You should look into JavaScript.";
        } else if (question5.toLowerCase() === "i'm a sudoku master!" && question4.toLowerCase() !== "black") {
            response += "As a logical thinker, you might be a natural at Python.";
        } else if (question5.toLowerCase() === "code?" && question4.toLowerCase() !== "black") {
            response += "01001001 01110100 00100111 01110011 00100000 01101111 01101011 01100001 01111001 00101100 00100000 01110100 01110010 01111001 00100000 01101111 01110101 01110100 00100000 01000101 01110000 01101001 01100011 01101111 01100100 01110101 01110011 00101100 00100000 01110100 01101000 01100101 01111001 00100000 01110111 01101001 01101100 01101100 00100000 01110011 01101000 01101111 01110111 00100000 01111001 01101111 01110101 00100000 01110100 01101000 01100101 00100000 01110111 01100001 01111001 00100001";
        }

        document.querySelector("#choice").innerText = response.trim();
    };
};