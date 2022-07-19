

const htmlPrefix =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamName}</title>
</head>
<body>
    <header>
        ${teamName}
    </header>
    <main>
        <!-- Insert programatically generated html here -->
`
const htmlSufix =
`
    </main>
</body>
</html>
`;

let managerHTMLCard =
`
<div class="employeeContainer">
<div class="employeeHeader">
    <h2>${employeeName}</h2>
    <h3>${position}</h3>
</div>
<div class="employeeBody">
    <div class="employeeID">
        <p>ID: ${id}</p>
    </div>
    <div class="employeeEmail">
        <p>Email: <a href="${email}">${email}</a></p>
    </div>
    <div class="employeeOfficeNumber">
        ${officeNumber}
    </div>
</div>
</div>
`;

let engineerHTMLCard =
`
<div class="employeeContainer">
<div class="employeeHeader">
    <h2>${employeeName}</h2>
    <h3>${position}</h3>
</div>
<div class="employeeBody">
    <div class="employeeID">
        <p>ID: ${id}</p>
    </div>
    <div class="employeeEmail">
        <p>Email: <a href="${email}">${email}</a></p>
    </div>
    <div class="employeeGitHub">
        ${github}
    </div>
</div>
</div>
`;

const internHTMLCard =
`
<div class="employeeContainer">
<div class="employeeHeader">
    <h2>${employeeName}</h2>
    <h3>${position}</h3>
</div>
<div class="employeeBody">
    <div class="employeeID">
        <p>ID: ${id}</p>
    </div>
    <div class="employeeEmail">
        <p>Email: <a href="${email}">${email}</a></p>
    </div>
    <div class="employeeSchool">
        ${school}
    </div>
</div>
</div>
`;