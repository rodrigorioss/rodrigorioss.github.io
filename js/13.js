let employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Problem 1:", employees);

let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Problem 2:", company);

company.employees.push({ firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false });

console.log("Problem 3:", company);

let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log("Problem 4: Total Salary =", totalSalary);

company.employees = company.employees.map(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // increase salary by 10%
        employee.raiseEligible = false;
    }
    return employee;
});

console.log("Problem 5:", company);

let workingFromHome = ['Anna', 'Sam'];

company.employees = company.employees.map(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
    return employee;
});

console.log("Problem 6:", company);
