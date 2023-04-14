// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [ 4587963, "Rosanna Roces", 4598, "rroces@v.net","Administration"],
    [ 4587964,"Liwanag Garcia", 2468, "lgarcia@v.net", "Sales"],
    [ 4587965, "Jose Villa",4621, "jvilla@v.net", "Engineering"],
    [ 4587966, "Maria Morales",6835, "mmorales@v.net", "Quality Assurance"],
    [ 4589967, "Teodora Alonzo",1354, "talonzo@v.net", "Marketing"]
]  

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.addEventListener('load', () => {
    if(localStorage.employees) {
        employees = JSON.parse(localStorage.getItem('employees'))
    } else {
        buildGrid()
    }
})

const $ = (id)=> {
    return document.getElementById(id)
}

// GET DOM ELEMENTS
let form =  document.querySelector("form")
let tbody 
let table = document.querySelector('#empTable')
let newEmployeesList
 
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', (buildGrid) )

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let name = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [Number(id),name,Number(ext),email,dept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp) 
    console.log(employees)  
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let z = (e.target.parentNode.parentNode.rowIndex)
        table.deleteRow(z)
        // REMOVE EMPLOYEE FROM ARRAY
                  
      // BUILD THE GRID
        buildGrid()
} 
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const t = document.querySelector('#empTable tbody')
    t.parentNode.removeChild(t)
   
    
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let i of employees) {  
        tr = document.createElement('tr')
    // REBUILDING THE ROW STRUCTURE                      
            for (let j of i) {   
                tr.innerHTML += `<td>${j}</td> `                      
            }
            tbody.appendChild(tr)
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody)
    
    // UPDATE EMPLOYEE COUNT  
    let x = document.getElementsByTagName('h2')
    let countEmp = x[1]
    let counting =document.querySelector('#empCount')//.textContent
    counting = 0
    counting = employees.length
    let counterNum = document.createTextNode(counting)
    countEmp.appendChild(counterNum)
    counterNum.textcontent =`${counting}`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));  
};

// let rows = document.getElementsByTagName('tr')
// var trs = document.getElementsByTagName('tr');

// var rows = document.getElementsByTagName('tr');
// for (var row in rows) {
//   row.addEventListener('click', handleEvent); 
//   // or attachEvent, depends on browser
// }  // if(confirm('Are you sure you want to delete this employee?')) {
    //     table.deleteRow(e.target.parentNode.parentNode.rowIndex)
    //     for (let row in rows) {
    //         row.addEventListener('click',(e)=> {
    //             table.deleteRow(e.target.parentNode.parentNode.rowIndex)
    //         })
    // }
        
    // tbody.deleteRow(e.target.parentElement.parentElement.rowIndex);
        // // tbody.deleteRow(e.target.parentElement.parentElement.rowIndex);


