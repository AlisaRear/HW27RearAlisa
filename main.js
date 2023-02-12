const employees = new Employees();
const company = new Company(employees);
const employeeGenerator = new EmployeeGenerator();
const list = new List();


for(let i = 20; i!=0; i--){
    let random = new Random();
    company.hire(employeeGenerator.getRandomEmployee(random.getRandomNumber(0,100)));

}
console.log(company)
company.processEmployees(list.addItem());