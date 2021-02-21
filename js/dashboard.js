var player=document.getElementById("player")
    videoContainer=document.getElementById('videoContainer'),
    closeWin=document.getElementsByClassName("close");
function displayVideo(){
    document.getElementById("videoContainer").style.display = "block";
    player.play();
}

function videoHidden(){
    player.pause();
    player.currentTime=0;
    document.getElementById("videoContainer").style.display = "none";
}

document.getElementById('logout').addEventListener("click",function logout () {
    localStorage.removeItem('token');
    location.replace('admin login.html');
  })
  console.log(location.pathname)