Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
});
Webcam.attach( '#webCam' );

let button1 = document.getElementById('testSnap');
button1.addEventListener("click", take_snapshot);
function take_snapshot(){
  console.log("FUCK MY LFIE"); 
  Webcam.snap(function(data_uri){
      document.getElementById('img').src = data_uri;        
    })
 }


function display_image_cv(){
  //let imgElement = document.getElementById('imageSrc');
  //imgElement.src = URL.createObjectURL("../images/test.png");
  //console.log("Wtf");
  let mat = cv.imread('img');
  mat = cv.cvtColor(mat, mat, cv.COLOR_BGR2GRAY);
  cv.imshow('canvasOutput', mat);
  mat.delete();
}

