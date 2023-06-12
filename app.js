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
// console.log(getbag)
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

//Start search case
let names = ["Case Notebook","Case Fuck","Case Brownie","Case Explorer wanted","Case Pink with girl","Case Blone with a glass","Girl with a cake","Case strength above all","Case cakes and girl","Case Red","Case lovely gir","Case Santa matrysohka","Ellen","Camille","Emily","Nadia","Mitchell","Harvey","Lucy","Amy","Glen","Peter"];
let sortnames = names.sort();
console.log(sortnames); 
let getsearchinput = document.querySelector('#case-search');
var height = "250px";

getsearchinput.addEventListener('keyup',function(e){
    // console.log(e.target)
    removeelement();
    for(var i of sortnames){
        if(i.toLowerCase().startsWith(getsearchinput.value.toLowerCase())&& getsearchinput.value !== ""){
            let newli = document.createElement('li');
            newli.classList.add('list-items');
            newli.style.cursor = "pointer";
            newli.setAttribute('onclick','displayname("'+i+'")');
            let word = "<b>"+i.substr(0,getsearchinput.value.length)+"</b>";
            word += i.substr(getsearchinput.value.length);
            newli.innerHTML = word;
            document.querySelector('.search-cases').appendChild(newli);
        
        }
    }
});

function displayname(value){
    getsearchinput.value = value;
    removeelement();
}   

function removeelement(){
    let items = document.querySelectorAll('.list-items');
    items.forEach(item=>{
        item.remove();
    })
}



//End search case

//End filter-btn show/hide 

let getsorttitle = document.querySelector('.sort-titles');
let getsortprice = document.querySelector('.sort-prices');
let getsalecase = document.querySelector('.sale-cases');
let getcasebox = getsalecase.getElementsByClassName('case-boxs');
let getclearsort = document.querySelector('.clear-sort');

getclearsort.addEventListener('click',()=>{
    window.location.href = window.location.href;
})

getsorttitle.addEventListener('click',function(){
    
    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;
        var i = 0;
        for(i ; i < getcasebox.length-1 ; i++){
            shouldswitch = false;
            if(getcasebox[i].innerHTML > getcasebox[i+1].innerHTML){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){
            switching = true;
            getcasebox[i].parentElement.insertBefore(getcasebox[i+1],getcasebox[i]);
        }
    }while(switching);

});

getsortprice.addEventListener('click',function(){
    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;
        var i = 0;
        for(i ; i < getcasebox.length-1 ; i++){
            shouldswitch = false;
            if(getcasebox[i].querySelector('ul li:nth-of-type(2) span:last-child').innerHTML > getcasebox[i+1].querySelector('ul li:nth-of-type(2) span:last-child').innerHTML){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){
            switching = true;
            getcasebox[i].parentElement.insertBefore(getcasebox[i+1],getcasebox[i]);
        }
    }while(switching);
});


//End Javascript Area 