var camBtn= document.getElementById("camBtn"),
	camContainer= document.getElementById("profileImage"),
	screenshot=document.getElementById("screenshot"),
	video= document.getElementById("videoElement"),
	canvas = document.querySelector("canvas");


  //upload profile pic---------------------------------------------------
$("#imageUploadBtn").click(function(e) {
    $("#imageUpload").click();

});

function fasterPreview( uploader ) {
  if ( uploader.files && uploader.files[0] ){
        $('#profileImage').attr('src', 
           window.URL.createObjectURL(uploader.files[0]) );
          // $('#profileImage').css('width',camContainer.width)
          // $('#profileImage').css('height',camContainer.height)
  }
}

$("#imageUpload").change(function(){
  fasterPreview( this );
});
 
 //Camera pic--------------------------------------------
function takescreenshot () {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let ctx = canvas.getContext("2d");
        
	ctx.drawImage(video, 0, 0);
	// Other browsers will fall back to image/png
	camContainer.src = canvas.toDataURL("image/webp");
    video.style.display = "none";
	stop();
	screenshot.style.display = "none";
	camContainer.style.display = "inline";
			  

}

function stop(e) {
      
	var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
    	var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}

async function startCamera(){
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            let str = await navigator.mediaDevices.getUserMedia({ video: true, audio:false },)
            video.srcObject = str;
            video.videoWidth = camContainer.width;
          	video.videoHeight = camContainer.height;
        }
    }
function showCam(){
	startCamera();
	screenshot.style.display = "inline";
	camContainer.style.display = "none";
	video.style.display = "inline";
	
}


//---------------------------Authentication-------------------------------------
