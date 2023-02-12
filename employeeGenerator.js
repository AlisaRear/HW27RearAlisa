class EmployeeGenerator {
    constructor(random) {
        this.random=random;
    }
    getRandomGender = () => {
        if (this.random >50)
            return 'male';
        else return 'female';
    }
    getRandomTitle = () => {
        if (this.random>75)
            return 'Wage Employee';
        else if (this.random>50)
            return 'Manager';
        else if (this.random>25)
            return 'Sales Person';
        else return 'Sales Manager';
    }

    getRandomEmployee = () => {
        return new Employee(this.random, `${this.random}@gmail.com`,
            this.getRandomGender, `${this.random}`, this.random*1000,
            this.getRandomTitle);
    }
}