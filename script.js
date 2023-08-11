import books from './booklist.js'
let content = document.querySelector('#content')
function total(){
let list ="<ul>"
for(let i in books){
    list +=`<li>`
    list +=`<img src='./images/${books[i].photo}' onerror="this.src='./images/noimage.gif'">` 
    list += `<div class ="info">`
    list +=`<p>도서명 : ${books[i].subject}</p>`
    list +=`<p>저자 : ${books[i].author}</p>`
    list +=`<p>출판사 : ${books[i].publisher}</p>`
    list +=`<p>출판일 : ${books[i].date}</p>`
    list +=`<p>가격 : ${books[i].price}</p>`
    list +=`<p>요약 : ${books[i].summary}</p>`
    list +=`<button value="${books[i].author}" id="del">삭제</button>`
    list +=`</div>`
    list +=`</li>`
}
list +=`</ul>`
content.innerHTML = list;
}
total()

let newadd =document.querySelector("#newadd")
let addlist =document.querySelector("#addlist")
newadd.onclick = function(){
    addlist.classList.toggle("on")
}

let btn = document.querySelector(".btn button:nth-child(1)")
let input1 = document.querySelector(".add p:nth-child(1) input")
let input2 = document.querySelector(".add p:nth-child(2) input")
let input3 = document.querySelector(".add p:nth-child(3) input")
let input4 = document.querySelector(".add p:nth-child(4) input")
let input5 = document.querySelector(".add p:nth-child(5) input")
let input6 = document.querySelector(".add p:nth-child(6) input")
let input7 = document.querySelector(".add p:nth-child(7) input")

btn.onclick = function(){
   let newlist =
    {
        subject : input1.vaule,
        author : input2.vaule,
        publisher : input3.value,
        date : input4.value,
        price :input5.value,
        summary :input6.value,
        photo :input7.value
    }
    books.push(newlist)
    total()
}
let buttonSelct = document.querySelector("#del")
del.onclick = function(){
    alert("");
    for(i=0; i<total.length; i++){
        if(total[i].author === buttonSelct.value){
            alert("");
        }
    }
}
/* console.log(books) */