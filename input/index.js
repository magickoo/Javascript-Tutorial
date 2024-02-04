let username;
document.getElementById("mysubmit").onclick = function(){
    username= document.getElementById("myText").value;
    console.log(username);
    document.getElementById("h1").textContent = `Hello ${username}`;
}