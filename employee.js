class Employee {
    #id;
    #email;
    #gender;
    #name;
    #salary;
    #title;


    constructor(id, email, gender, name, salary, title) {
        this.#id = id;
        this.#email = email;
        this.#gender = gender;
        this.#name = name;
        this.#salary = salary;
        this.#title = title;
    }


    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get gender() {
        return this.#gender;
    }

    set gender(value) {
        if (value === 'female' || value === 'male')
            this.#gender = value;
        else throw new Error('Wrong gender');
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        this.#salary = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (value === 'Wage Employee' || value === 'Manager' || value === 'Sales Person' || value === 'Sales Manager')
            this.#title = value;
        else throw new Error('Wrong title');
    }
}