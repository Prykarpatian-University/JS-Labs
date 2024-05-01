(function () {
    const greetWord = "Hello"; // Змінна для вітання

    function speakHello(name) {
        console.log(greetWord + " " + name);
    }

    function speakGoodBye(name) {
        console.log("Good Bye" + " " + name);
    }

    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    let hello = speakHello;
    let goodbye = speakGoodBye;

    let lastLettersCount = {};

    for (let name of names) {
        let lastLetter = name[name.length - 1].toLowerCase();
        lastLettersCount[lastLetter] = (lastLettersCount[lastLetter] || 0) + 1;
    }

    console.log("Last letter:");
    for (let letter in lastLettersCount) {
        console.log(letter + ": " + lastLettersCount[letter]);
    }

    for (let name of names) {
        if (name.toLowerCase().charAt(0) === "j") {
            goodbye(name);
        } else {
            hello(name);
        }
    }
})();










