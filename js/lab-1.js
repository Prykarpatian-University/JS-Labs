function triangle(val1, type1, val2, type2) {
    
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Неправильний тип аргумента. Слід ще раз перечитати інструкцію.");
        return "failed";
    }

    
    if (val1 <= 0 || val2 <= 0) {
        console.log("Значення аргументів мають бути додатніми");
        return "failed";
    }

    if (type1 === "hypotenuse" && type2 === "leg") {
        const hypotenuse = val1;
        const leg = val2;
        const alpha = Math.atan(leg / hypotenuse) * (180 / Math.PI);
        const beta = 90 - alpha;
        const sideC = Math.sqrt(hypotenuse ** 2 - leg ** 2);
        
        console.log(`Гіпотенуза: ${hypotenuse}`);
        console.log(`Сторона a: ${leg}`);
        console.log(`Гострий кут alpha: ${alpha.toFixed(2)}`);
        console.log(`Гострий кут beta: ${beta.toFixed(2)}`);
        console.log(`Гіпотенуза : ${sideC.toFixed(2)}`);
        return "success";
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        const hypotenuse = val2;
        const leg = val1;
        const alpha = Math.atan(leg / hypotenuse) * (180 / Math.PI);
        const beta = 90 - alpha;
        const sideC = Math.sqrt(hypotenuse ** 2 - leg ** 2);
        
        console.log(`Гіпотенуза: ${hypotenuse}`);
        console.log(`Сторона a: ${leg}`);
        console.log(`Гострий кут alpha: ${alpha.toFixed(2)}`);
        console.log(`Гострий кут beta: ${beta.toFixed(2)}`);
        console.log(`Гіпотенуза: ${sideC.toFixed(2)}`);
        return "success";
    } else {
        console.log("Некоректна пара  аргументів");
        return "failed";
    }
}


