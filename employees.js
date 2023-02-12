class Employees{
    constructor() {
        this.data = {};
    }

    add = (employee) => {
        /*if(this.data[employee.id])
            throw new Error('This ID not unique!')
        else {*/
            this.data[employee.id] = employee;
            return true;
       // }
    }

    get = (id) => {
        if (this.data[id]) {
            return this.data[id];
        }
        else throw new Error('Employee not found!');
    }

    getAll = () => {
        return Object.values(this.data);
    }

    remove = (id) => {
        if(this.data[id]){
            delete this.data[id];
        }
        else throw new Error('There is not such employee')
    }
}