window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();


        let languageResult = document.getElementById("whatlanguage");
        languageResult.classList.add("hidden");

        const numbChoice = document.querySelector('input[name="numb"]:checked');
        const question2 = document.querySelector("#question2").value;

        if (numbChoice && numbChoice.value === "13") {
            languageResult.classList.remove("hidden");
        }

        if (question2.toLowerCase() === "red") {
            languageResult.classList.remove("hidden");
        }
    };
};