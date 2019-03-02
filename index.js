var addbtn = document.querySelector('#addbtn');
var form = document.querySelector('.form-group');
var grids = document.querySelector('#grids');
var addbtn2 = document.querySelector('#addbtn2');
var p2 = document.querySelector('#p2');
var namepara = document.querySelector('#namepara');
var phonepara = document.querySelector('#phonepara');
var col1 = document.querySelector('#col1');
var col2 = document.querySelector('#col2');
var col3 = document.querySelector('#col3');
var back = document.querySelector('#backbtn');
var h51 = document.querySelector("#h51");
var h52 = document.querySelector("#h52");
//add button events

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
  addbtn.style.display = "none";
  grids.style.display = "none";
  p2.style.display = "block";
  form.style.display = "block";
  addbtn2.style.display = "block";
  back.style.display="block";
  document.querySelector('#name').innerHTML="";

  document.querySelector('#form').reset();
})

//function for form reset
function Reset() {
    document.getElementById("form").reset();//form is the form id.
}
//back button
back.addEventListener("click",(e)=>{
    addbtn.style.display="block";
    grids.style.display="block";
    form.style.display="none";
    back.style.display="none";
    namepara.style.display="none";
    phonepara.style.display="none";
    h51.style.display="none";
    h52.style.display="none";
    p2.style.display="none";
})

//add function which adds name to the directory
function add(){
    var name = document.querySelector('#name').value;
    console.log(name);
     namepara.innerHTML=name;
     
}

// add fucnction which adds phone number to the directory
function addd(){
    var phone = document.querySelector('#phone').value;
    console.log(phone);
    phonepara.innerHTML=phone;
}

// add button events
addbtn2.addEventListener("click" , function myFunction(){
    p2.style.display = "none";
    form.style.display = "none";
    addbtn2.style.display = "none";
    addbtn.style.display = "block";
    grids.style.display = "block";
    back.style.display="none";

        

        // creating javascript elements

        var para = document.createElement("P");
        var t = document.createTextNode(phone.value);
        console.log(t);
        para.appendChild(t);
        col2.appendChild(para);

        var para2 = document.createElement("P");
        var n = document.createTextNode(document.querySelector('#name').value);
        console.log(n);
        para2.appendChild(n);
        col1.appendChild(para2);

        var btn3 = document.createElement("BUTTON");
        btn3.id = "btn3";
        // btn3.className = "btn btn-danger"; // if we want to use bootstrap styling
        var b = document.createTextNode("Delete");
       var mybr = document.createElement("br");
       
        btn3.appendChild(b);
        col3.appendChild(mybr)
        col3.appendChild(btn3);

        // delete button functionality

        btn3.addEventListener("click" , (e)=>{
            para.parentNode.removeChild(para);
            para2.parentNode.removeChild(para2);
            btn3.style.display = "none";

        })
      
     // the below code in comments is to access browser storage if required.

     //Check browser support
//  if (typeof(Storage) !== "undefined") {
//     // Store
//      localStorage.setItem("name", name.value);
//      localStorage.setItem("phone", phone.value);
//      // Retrieve
//      document.getElementById("col1").innerHTML = localStorage.getItem("name");
   
//      document.getElementById("col2").innerHTML = localStorage.getItem("phone");
//    }
//    else{
//        alert("Your browser does'nt supports this");
//    }
 });