import SpeakGoodBye from './SpeakGoodBye';
import SpeakHello from './SpeakHello';

const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
    let name = names[i].toLowerCase();

    if (name[0] === "j") {
        SpeakGoodBye(name);
    } else {
        SpeakHello(name);
    }
}


