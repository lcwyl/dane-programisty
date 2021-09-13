
let btn = document.querySelector("button");
let ul = document.createElement("ul");

document.body.appendChild(ul);

const getData = () => {
   
    fetch('https://akademia108.pl/api/ajax/get-post.php')

        .then((response) => response.json())
        .then((data) => {
            let obj = data;
            ul.textContent = '';//reset wynik
            for (let value in obj) {
                let  li = document.createElement("li");
                li.textContent = `${value} : ${(obj[value])}`;
                ul.appendChild(li)
            }
        })
        .catch((err) => {
            console.error(err)
            let paragraph = document.getElementById("blad");
            paragraph.innerText = "Błąd" + " " + err;
            paragraph.style.color = "red";
           
        })
}
//setInterval(getData,1000)
btn.addEventListener("click", getData);

