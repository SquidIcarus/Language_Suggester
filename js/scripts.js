window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();


        let languageResult = document.getElementById("whatlanguage");
        languageResult.classList.add("hidden");
        let languageResult2 = document.getElementById("otherlanguage");
        languageResult2.classList.add("hidden");

        const numbChoice = document.querySelector('input[name="numb"]:checked');
        const question2 = document.querySelector("#question2").value;
        const question3 = document.querySelector("#question3").value;
        const question4 = document.querySelector("#question4").value;
        const question5 = document.querySelector("#question5").value;

        if (numbChoice && numbChoice.value === "13") {
            languageResult.classList.remove("hidden");
        } else if (numbChoice && numbChoice.value === "22") {
            languageResult2.classList.remove("hidden");
        }

        if (question2.toLowerCase() === "red") {
            languageResult.classList.remove("hidden");
        }

        if (question3.toLowerCase() === "taco") {
            languageResult.classList.remove("hidden");
        }

        if (question4.toLowerCase() === "Japan") {
            languageResult.classList.remove("hidden");
        }

        if (question5.toLowerCase() === "yes") {
            languageResult.classList.remove("hidden");
        }
    };
};