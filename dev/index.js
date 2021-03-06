"use strict";

var arr = [
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/16711477_1583334028361346_1772721088975341813_n.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/13902604_1376374239057327_1716041567498698460_n.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/13613111_1348223815205703_9104021690997193137_o.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/12733532_1238920006136085_4312060697264895800_n.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/12507279_1210337882327631_6180386198413565537_n.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/cat1.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/cat2.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/cat3.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/cat4.jpg",
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1134440/cat5.jpg"
        ];

var inUse = [];
var heroDivs = document.getElementsByClassName("hero__div");

function randNumGen(length) {
  return Math.floor(Math.random() * length);
}

function heroDivFill() {
  for (var i = 0; i < 6; i++) {
    var rand = randNumGen(arr.length);
    while (inUse.indexOf(rand) !== -1) {
      rand = randNumGen(arr.length);
    }
    inUse.push(rand);
    heroDivs[i].style.backgroundImage = "url(" + arr[rand] + ")";
    heroDivs[i].style.backgroundSize = "cover";
    heroDivs[i].style.backgroundPosition = "50% 25%"
    console.log(i);
  }
}
heroDivFill();

var lastDiv = -1;
function chngRandHeroDiv() {
  var div = randNumGen(6);
  while (div === lastDiv) {
    div = randNumGen(6);
  }
  lastDiv = div;
  var rand = randNumGen(arr.length);
  while (inUse.indexOf(rand) !== -1) {
    rand = randNumGen(arr.length);
  }
  inUse[div] = rand;
  heroDivs[div].style.backgroundImage = "url(" + arr[rand] + ")";
  console.log(div);
}

setInterval(function () {
  chngRandHeroDiv();
}, 1800);

setInterval(function () {
  chngRandHeroDiv();
}, 5000);
