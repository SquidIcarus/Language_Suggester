window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();


        let languageResult = document.getElementById("whatlanguage");
        languageResult.classList.add("hidden");
        let languageResult = document.getElementById("whatlanguage");
        languageResult.classList.add("hidden");

        const question1 = parseInt(document.querySelector("#question1").value);
        const question2 = document.querySelector("#question2").value;

        if (question1 > 21) {
            languageResult.classList.remove("hidden");
        }

        if (question2.toLowerCase() === "red") {
            languageResult.classList.remove("hidden");
        }
    };
};