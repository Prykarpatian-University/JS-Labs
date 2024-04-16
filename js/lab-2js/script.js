(function () {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    let goodBye = SpeakGoodBye();
    let hello = SpeakHello();

    let lastLettersCount = {};
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let lastLetter = name[name.length - 1].toLowerCase();
        if (lastLettersCount[lastLetter]) {
            lastLettersCount[lastLetter]++;
        } else {
            lastLettersCount[lastLetter] = 1;
        }
    }

    console.log("Last letter:");
    for (let letter in lastLettersCount) {
        console.log(letter + ": " + lastLettersCount[letter]);
    }

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.toLowerCase().charAt(0) === "j") {
            goodBye(name);
        } else {
            hello(name);
        }
    }
})();
;
