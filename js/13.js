// Q1
let employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Employee JSON (Problem 1):", employees);

// Q2
let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Company JSON (Problem 2):", company);

// Q3
company.employees.push({ firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false });

console.log("Updated Company JSON with New Employee (Problem 3):", company);

// Q4
let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log("Total Salary of All Employees (Problem 4):", totalSalary);

// Q5
company.employees = company.employees.map(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // increase salary by 10%
        employee.raiseEligible = false;
    }
    return employee;
});

console.log("Updated Salaries After Raise (Problem 5):", company);

// Q6
let workingFromHome = ['Anna', 'Sam'];

company.employees = company.employees.map(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
    return employee;
});

console.log("Company JSON with WFH Status (Problem 6):", company);
