var send = document.getElementById("send");
var send1 = document.getElementById("send1");
var msg = document.getElementById("msg");
var close1 = document.getElementById("close1");
var msg2 = document.getElementById("msg2");
var msg11 = document.getElementById("msg11");
var msg22 = document.getElementById("msg22");
send1.addEventListener("click", function () {
    msg11.classList.remove("d-none");
});
close1.addEventListener("click" , function() {
    msg11.classList.add("d-none");
})
send.addEventListener("click", function () {
    msg.classList.remove("d-none");
});
close1.addEventListener("click" , function() {
    msg.classList.add("d-none");
})
send.addEventListener("mouseenter" , function(){
    msg2.classList.remove("d-none");
})
send.addEventListener("mouseleave" , function(){
    msg2.classList.add("d-none");
})
send1.addEventListener("mouseenter" , function(){
    msg22.classList.remove("d-none");
})
send1.addEventListener("mouseleave" , function(){
    msg22.classList.add("d-none");
})

if (window.innerWidth < 770){
    send.addEventListener('mouseenter',function(){
        msg2.classList.add("d-none")

    })
}
if (window.innerWidth < 770){
    send1.addEventListener('mouseenter',function(){
        msg22.classList.add("d-none")

    })
}