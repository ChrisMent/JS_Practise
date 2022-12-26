

let students = [
    


]

function main(){

    let totalNC = 0

    for (let i = 0; i < students.length; i++) {
    
    let student = students[i]
    
    console.log(student)
    totalNC += student.NC
}

let averageNC = totalNC / students.length
console.log("NC Durchschnitt: " + averageNC)

}

function addStudent(){

    let name = document.getElementById("inputName").value
    let id = parseInt(document.getElementById("inputId").value)
    let nc = parseFloat(document.getElementById("inputNC").value)

    let student = {

        "Name": name,
        "Matrikelnummer" : id,
        "NC": nc
    }

    students.push(student)
    console.log(students)
}