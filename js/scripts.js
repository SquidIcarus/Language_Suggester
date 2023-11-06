window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();


        let languageResult = document.getElementById("whatLanguage");
        languageResult.classList.add("hidden");
        let languageResult2 = document.getElementById("otherLanguage");
        languageResult2.classList.add("hidden");
        let languageResult3 = document.getElementById("pythonLanguage");
        languageResult3.classList.add("hidden");
        let languageResult4 = document.getElementById("whatLanguage");
        languageResult4.classList.add("hidden");
        let languageResultNoNo = document.getElementById("noNoLanguage");
        languageResultNoNo.classList.add("hidden");
        let languageResultCode = document.getElementById("codeLanguage");
        languageResultCode.classList.add("hidden");

        const numbChoice = document.querySelector('input[name="numb"]:checked');
        const question2 = document.querySelector("#question2").value;
        const question3 = document.querySelector("#question3").value;
        const question4 = document.querySelector("#question4").value;
        const question5 = document.querySelector("#question5").value;

        if (numbChoice && parseInt(numbChoice.value) <= 13 && question4.toLowerCase() !== "black") {
            languageResult.classList.remove("hidden");
        } else if (numbChoice && parseInt(numbChoice.value) >= 22 && parseInt(numbChoice.value) < 99 && question4.toLowerCase() !== "black") {
            languageResult2.classList.remove("hidden");
        } else if (numbChoice && parseInt(numbChoice.value) >= 100 && question4.toLowerCase() !== "black") {
            languageResult3.classList.remove("hidden");
        }

        if (question2.toLowerCase() === "taco" && question4.toLowerCase() !== "black") {
            languageResult.classList.remove("hidden");
        }

        if (question3.toLowerCase() === "japan" && question4.toLowerCase() !== "black") {
            languageResult.classList.remove("hidden");
        }

        if (question4.toLowerCase() === "red" && question4.toLowerCase() !== "black") {
            languageResult.classList.remove("hidden");
        } else if (question4.toLowerCase() === "white") {
            languageResult4.classList.remove("hidden");
        } else if (question4.toLowerCase() === "black") {
            languageResultNoNo.classList.remove("hidden");
        }

        if (question5.toLowerCase() === "yes" && question4.toLowerCase() !== "black") {
            languageResult.classList.remove("hidden");
        } else if (question5.toLowerCase() === "code?") {
            languageResultCode.classList.remove("hidden");
        };
    };
};
