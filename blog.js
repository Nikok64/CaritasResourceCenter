var images = ["http://cdn.shopify.com/s/files/1/0250/6460/3682/products/BirdBike3_2_83e0e074-f50e-4cd1-abef-e0f7caf51917.jpg?v=1654549394", "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?cs=srgb&dl=pexels-stein-egil-liland-1933239.jpg&fm=jpg", "https://images.unsplash.com/photo-1568122506084-57d12d22b683?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg","image10.jpg"]
//9 long array filled with Read Now
var buttons = new Array(images.length).fill("Read Now!");

var test = ["Read this story about stanford, a man who road his bike all the way to colorado. And how caritas helped him get through his flat tire.", "We helped unerprivalleged polar bears get access to sunsets, like this great auroa sky", "button3.jpg", "button4.jpg", "button5.jpg", "button6.jpg", "button7.jpg", "button8.jpg", "button9.jpg","button10.jpg"];

window.onload = function() { makeTable(3, images, buttons, test); resize(); }
function makeTable(cols, imageD, butText, test) {
	const connectDiv= document.getElementById("blog")
  var imageCopy = [...imageD]
  var buttonCopy = [...butText]
  var heyCopy = [...test]
  var extra = (imageCopy.length % cols);
  var rows = Math.trunc(imageCopy.length / cols)
  if(extra > 0){
  	rows+=1
    empty = cols-extra
  }
  var table = document.createElement("table");
  table.id = "genTable"

  for (var i = 0; i < rows; i++) {
    const row = document.createElement("tr");


    for (let j = 0; j < cols; j++) {
    if(imageCopy[0]==undefined){
    break;
    }
      const cell = document.createElement("td");
      cell.className = "tablecells"
      const div = document.createElement("div")
      div.className ="tableIds";
      const img = document.createElement("img");
      const p = document.createElement("p");
      const button = document.createElement("button");
      button.className = "tableButtons"
      img.src = imageCopy[0];
      //moves to the left 1
      imageCopy.shift()
      p.innerHTML = heyCopy[0];
      heyCopy.shift();
      button.textContent = buttonCopy[0];
      buttonCopy.shift();
      div.appendChild(img);
      div.appendChild(p)
      div.appendChild(button);
      cell.appendChild(div);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  connectDiv.appendChild(table);
}
