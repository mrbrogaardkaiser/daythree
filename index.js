// https://jsonplaceholder.typicode.com/users


document.getElementById("btn-get").onclick = getUser;

document.getElementById("btn-get-all").onclick = getAllUsers

function getAllUsers(){
    fetch("https://jsonplaceholder.typicode.com/users/")
.then(res => res.json())
  .then(data => {
      
    console.log(data)
  const rows = data.map(u=>
    `
  <tr>
    <td>${u.name}</td>
    <td>${u.phone}</td>
    <td>${u.address.street}</td>
    <td>${u.address.city}</td>
  </tr>
  `).join("\n")
  document.getElementById("tbl-id").innerHTML = rows;

  })

  .catch(err => console.error("UPPPPPS: " + err))
  .finally(e => console.log("Finally Done"))

console.log("Who comes first?")
}

function getUser() {

    const id = document.getElementById("input-id").value

    fetch("https://jsonplaceholder.typicode.com/users/"+id)
.then(res => res.json())
  .then(data => {
      document.getElementById("id-name").innerText = data.name
      document.getElementById("id-phone").innerText = data.phone
      document.getElementById("id-street").innerText = data.address.street
      document.getElementById("id-city").innerText = data.address.city
  }
    )
  .catch(err => console.error("UPPPPPS: " + err))
  .finally(e => console.log("Finally Done"))

}





/*
const options ={

}
fetch("https://jsonplaceholder.typicode.com/users",
{
    method : "POST",
    headers : {
        "Content-type" : "appliction/json",
        "Accepts" : "application/json"
    },
    body : JSON.stringify(
        {
            "name" : "James"
        }
    )      
}
)

fetch("https://jsonplaceholder.typicode.com/users", options)
.then(res => {
    console.log(res.status)
    return res.json()
})
.then(data => console.log(data))
.catch(e => console.log(e))
.finally(console.log("DONE"))

*/



/*
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    if (!res.ok) {
      return Promise.reject("Error :" + res.status)
    }
    return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.error("UPPPPPS: " + err))
  .finally(e => console.log("Finally Done"))


console.log("Who comes first?")
*/

