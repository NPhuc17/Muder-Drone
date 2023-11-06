var activeImgId=1;
var nextImgId=1;
setInterval(function(){
    nextImgId = activeImgId + 1;
    if (nextImgId < 7) {
        document.getElementById("img" + activeImgId).classList.replace("block", "hidden");
        document.getElementById("img" + nextImgId).classList.replace("hidden", "block");
        activeImgId = nextImgId;
    } else {
        document.getElementById("img" + activeImgId).classList.replace("block", "hidden");
        document.getElementById("img1").classList.replace("hidden", "block");
        activeImgId = 1;
        nextImgId =2;
    }
}, 2500);