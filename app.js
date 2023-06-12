//Start Javascript Area 
//price-range 
let rangeinput = document.querySelectorAll('.range-input input');
let priceinput = document.querySelectorAll('.price-input input');
let progress = document.querySelector('.progress-bar');
let pricegap = 1000;

rangeinput.forEach(function(input){
    input.addEventListener('input',e=>{
        let minval = parseInt(rangeinput[0].value);
        let maxval = parseInt(rangeinput[1].value);
        
        // let percent = (minval / rangeinput[0].max) * 100;
        // console.log(percent);

        if(maxval - minval < pricegap){
            if(e.target.className === "range-min"){
                rangeinput[0].value = maxval - pricegap;
            }else{
                rangeinput[1].value = minval + pricegap;
            }
        }else{
            priceinput[0].value = minval;
            priceinput[1].value = maxval;
            progress.style.left = (minval / rangeinput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxval / rangeinput[1].max) * 100 + "%";
        }
    })
});
//price-range 

//Start type case
let getshowcase = document.querySelectorAll('.showcases');
let getbag = document.getElementsByClassName('bags');
console.log(getbag)
for(var i = 0 ; i < getshowcase.length ; i++){
    getshowcase[i].addEventListener('click',function(){
       if(this.innerHTML === "Show All"){
            this.innerHTML = "Show Less";
       }else{
            this.innerHTML = "Show All";
       };

    //    console.log(this.previousElementSibling);
       let content = this.previousElementSibling;
       if(content.style.height){
            content.style.height = null;
       }else{
            content.style.height = content.scrollHeight + "px";
       }

    })
}
//End type case 

//Start filter-btn show/hide 
let btnfilter = document.querySelector('.filter-btns');
let filtercontent = document.querySelector('.filter-content');
let getoverlay = document.querySelector('.overlay');
let mediasize = 768;

btnfilter.addEventListener('click',togglefilter);
getoverlay.addEventListener('click',togglefilter);

function togglefilter(){
    filtercontent.classList.toggle('show');
    getoverlay.classList.toggle('display');
}

window.addEventListener('resize',function(){
    if(window.innerWidth > mediasize){
        resizefix();
    }
});

function resizefix(){
    if(filtercontent.classList.contains('show')){
        togglefilter();
    }
}

//End filter-btn show/hide


//End Javascript Area 