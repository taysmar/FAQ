//Token-api : 5b5bd46098ebce69dfa6d1ecd04b57c2a47272101fe5cc22416eb3689cd02c0f78c7f996bdeb40fd882a9945edb13598a7c818bf5194c6b6398061137827ce8d18112f87f05d73a31abc66284297a23e6839e227d78d5dc0d0a1618085b3aa866643e47650fbf2bb3113e3dd244b5758a2ca85a4f7d421992cb34c4a0c61a849

function getUrl(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function newQuestion(question){

}

function main() { 
    console.log(getUrl("http://localhost:1337/admin"))
}
main

let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
 event.addEventListener('click',()=>{
  if(event.classList.contains("active")){
   event.classList.remove("active");
  }
  else{
   event.classList.add("active");
  }
 })
})