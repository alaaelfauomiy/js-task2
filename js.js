function Add() {
    var name = document.getElementById("txt1").value
    var age = document.getElementById("txt2").value

    code = "<tr>" + " <th>" + name + "</th>" + " <th>" + age + "</th>" + " </tr>"
    document.getElementById("tbodyTable").innerHTML += code.repeat(10)

}
