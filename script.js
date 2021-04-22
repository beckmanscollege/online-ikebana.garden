/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// Layer one array and toggle

var layer1 = ['https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fback1.png?v=1618518592226', 
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fback2.png?v=1618518595460',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fback3.png?v=1618518592243'];
var layer1_count = 0;
 
 function change1(){
 var image = document.getElementById('c1');
 image.src = layer1[layer1_count % layer1.length];
 layer1_count++;
 }

function toggle1(){
  var image = document.getElementById('c1');
  image.classList.toggle('hide');
}


// Layer2 one array and toggle

var layer2 = ['https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fmid1.png?v=1618518673769', 
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fmid2.png?v=1618518672626',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fmid3.png?v=1618518674248'];
var layer2_count = 0;
 
 function change2(){
 var image = document.getElementById('b1');
 image.src = layer2[layer2_count % layer2.length];
 layer2_count++;
 }

function toggle2(){
  var image = document.getElementById('b1');
  image.classList.toggle('hide');
}

// Layer3 one array and toggle

var layer3 = ['https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Ftop1.png?v=1618518891407', 
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Ftop2.png?v=1618518891958',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Ftop3.png?v=1618518894592'];
var layer3_count = 0;
 
 function change3(){
 var image = document.getElementById('a1');
 image.src = layer3[layer3_count % layer3.length];
 layer3_count++;
 }

function toggle3(){
  var image = document.getElementById('a1');
  image.classList.toggle('hide');
}

// Layer4 one array and toggle

var layer4 = ['https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot1.png?v=1618491418712', 
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot2.png?v=1618491418636',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot3.png?v=1618491417898',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot4.png?v=1618491418507',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot5.png?v=1618491418321',
              'https://cdn.glitch.com/038df517-98a9-4323-ad71-29383cf4601b%2Fpot6.png?v=1618491416577'];
var layer4_count = 0;
 
 function change4(){
 var image = document.getElementById('pot');
 image.src = layer4[layer4_count % layer4.length];
 layer4_count++;
 }

function toggle4(){
  var image = document.getElementById('pot');
  image.classList.toggle('hide');
}

