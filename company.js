class Company{
    constructor(employees) {
        this.employees=employees;
    }
    hire = (employee) => {
        return this.employees.add(employee);
    }
    fire = (id) => {
        return this.employees.remove(id);
    }
    computeBudget = () => {
        return this.employees.getAll().reduce((accum, value)=> {
            accum += value.salary;
        },0
    )}
    processEmployees = (processingFunction) => {
        this.employees.getAll().forEach((value) => {
            processingFunction(value);
        })
    }
}