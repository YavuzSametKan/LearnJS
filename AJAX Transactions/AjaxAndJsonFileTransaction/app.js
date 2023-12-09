document.getElementById("ajax").addEventListener("click", getAllEmployees);
function getAllEmployees(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = ()=>{
        let employeesList = document.getElementById("employees");
        if(xhr.status == 200){ //* status is ok and response status is 4
            let employees = JSON.parse(xhr.responseText);
            employees.forEach(employee => {
                employeesList.innerHTML += `
                    <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    </tr>
                `;
            });
        }
    }

    xhr.send();
}

