const employees = new Employees();
const company = new Company(employees);
const employeeGenerator = new EmployeeGenerator();
const list = new List();
const random = new Random();

console.log(random.getRandomNumber(0,100))


for(let i = 20; i!=0; i--){
    company.hire(employeeGenerator.getRandomEmployee(random.getRandomNumber(0,100)));
    //console.log(employeeGenerator.getRandomEmployee(random.getRandomNumber(0,100)))

}
console.log(company)
company.processEmployees(console.log())
//company.processEmployees(list.addItem());