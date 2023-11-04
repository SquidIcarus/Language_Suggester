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
        let languageResultCode = document.getElementById("codeLanguage");
        languageResultCode.classList.add("hidden");

        const numbChoice = document.querySelector('input[name="numb"]:checked');
        const question2 = document.querySelector("#question2").value;
        const question3 = document.querySelector("#question3").value;
        const question4 = document.querySelector("#question4").value;
        const question5 = document.querySelector("#question5").value;

        if (numbChoice && parseInt(numbChoice.value) <= 13) {
            languageResult.classList.remove("hidden");
        } else if (numbChoice && parseInt(numbChoice.value) >= 22 && parseInt(numbChoice.value) < 99) {
            languageResult2.classList.remove("hidden");
        } else if (numbChoice && parseInt(numbChoice.value) >= 100) {
            languageResult3.classList.remove("hidden");
        };

        if (question2.toLowerCase() === "red") {
            languageResult.classList.remove("hidden");
        }

        if (question3.toLowerCase() === "taco") {
            languageResult.classList.remove("hidden");
        }

        if (question4.toLowerCase() === "japan") {
            languageResult.classList.remove("hidden");
        }

        if (question5.toLowerCase() === "yes") {
            languageResult.classList.remove("hidden");
        } else if (question5.toLowerCase() === "code?") {
            languageResultCode.classList.remove("hidden");
        };
    };
};

