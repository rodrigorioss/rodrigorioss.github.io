// Problem 1: Create JSON for each employee
let employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Problem 1:", employees);

// Problem 2: Create JSON for the company
let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Problem 2:", company);

// Problem 3: Add a new employee
company.employees.push({ firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false });

console.log("Problem 3:", company);

// Problem 4: Calculate total salary
let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log("Problem 4: Total Salary =", totalSalary);

// Problem 5: Raise time
company.employees = company.employees.map(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // increase salary by 10%
        employee.raiseEligible = false;
    }
    return employee;
});

console.log("Problem 5:", company);

// Problem 6: Working from Home
let workingFromHome = ['Anna', 'Sam'];

company.employees = company.employees.map(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
    return employee;
});

console.log("Problem 6:", company);
