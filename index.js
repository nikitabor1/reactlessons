//1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции

function loop(times = 0, callback = null) {
    for (i = 0; i < times; i++) {
        return callback;
    }
}

//2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.
function calculateSquareArea(height, weight) {
    let area = height * weight;
    let figure = 'square';
    let output = {
        area,
        figure,
        height: height,
        weight: weight
    }

    return output

};



//3. Необходимо написать иерархию классов вида:
//Human -> Employee -> Developer
//Human -> Employee -> Manager
//Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
//Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
//У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
//У класса Employee должны присутствовать параметры: salary (число), department (строка)
//В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
//В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
//Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
class Human {
    constructor() {
        this.name = "";
        this.age = NaN;
        this.dateOfBirth = "";

    };
    displayInfo() {
        return this.name + $ {} + this.age + $ {} + this.dateOfBirth;
    }
};

class Employee extends Human {
    constructor() {
        super();
        this.salary = NaN;
        this.dapartment = "";
    };
    displayInfo() {
        return super.displayInfo() + $ {} + this.salary + $ {} + this.dapartment
    }
};

class Developer extends Employee {
    constructor() {
        super();
    }

};

class Manager extends Employee {
    constructor() {
        super();
        this.myTeam = [];
    };
    addDev(developer) {
        this.myTeam.push(developer);
    };
    delDev(developer) {
        this.myTeam.filter(val => val !== developer);
    };

};


