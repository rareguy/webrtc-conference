/// does it support webrtc?
function hasUserMedia(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    return !!navigator.getUserMedia;
}

if (hasUserMedia()){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    /// get the stream from user
    navigator.getUserMedia({video: true, audio: true}, function(stream){
        var video = document.querySelector('video');

        video.src = window.URL.createObjectURL(stream);

    }, function (err){});
}
else {
    alert("Error, WebRTC is not supported!");
}