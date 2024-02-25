function triangle(val1, type1, val2, type2) {
    // Перевірка на наявність правильних типів
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Некоректний тип елементів");
        return "Error";
    }
    
    // Перевірка на некоректність уведених значень
    if (val1 <= 0 || val2 <= 0) {
        console.log("Значення не можуть бути від'ємними або нульовими");
        return "Error";
    }

    if (type1 === "hypotenuse" && val1 <= val2) {
        console.log("Гіпотенуза повинна бути більшою за катет");
        return "Error";
    } else if (type2 === "hypotenuse" && val2 <= val1) {
        console.log("Гіпотенуза повинна бути більшою за катет");
        return "Error";
    }

    // Виконання обчислень
    let sideA, sideB, hypotenuse, angleA, angleB;

    if (type1 === "leg") {
        sideA = val1;
    } else if (type1 === "hypotenuse") {
        hypotenuse = val1;
    } else if (type1 === "angle") {
        angleA = val1;
    }

    if (type2 === "leg") {
        sideB = val2;
    } else if (type2 === "hypotenuse") {
        hypotenuse = val2;
    } else if (type2 === "angle") {
        angleB = val2;
    }

    // Обчислення гострих кутів
    if (!angleA) {
        angleA = Math.asin(sideA / hypotenuse) * (180 / Math.PI);
    } else {
        angleA = parseFloat(angleA);
    }

    if (!angleB) {
        angleB = 90 - angleA;
    } else {
        angleB = parseFloat(angleB);
    }

    // Обчислення сторін трикутника
    if (!sideA) {
        sideA = Math.sin(angleA * (Math.PI / 180)) * hypotenuse;
    }

    if (!sideB) {
        sideB = Math.sin(angleB * (Math.PI / 180)) * hypotenuse;
    }

    // Виведення результатів
    console.log("c (гіпотенуза):", hypotenuse.toFixed(2));
    console.log("a (катет):", sideA.toFixed(2));
    console.log("b (катет):", sideB.toFixed(2));
    console.log("alpha (гострий кут):", angleA.toFixed(2) + "°");
    console.log("beta (гострий кут):", angleB.toFixed(2) + "°");

    return "success";
}

// Приклади використання
console.log("Перший приклад:");
triangle(4, "leg", 8, "hypotenuse");
console.log("Другий приклад:");
triangle(8, "hypotenuse", 4, "leg");
