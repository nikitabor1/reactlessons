//1. Подготовьте webpack под работу с React’ом (установка webpack'a, подключение loader’ов, установка модулей).

//ок

//2. В отдельном js-файле создайте класс Developer (достаточно прописать только метод constructor’a и присвоить пару свойств), сделайте его экспортируемым и подключите к другому js-файлу.




class Developer {
    constructor(name, rank){
        this.name = name;
        this.competencies = [];
        this.rank = rank;
        
    }
}

export {Developer};