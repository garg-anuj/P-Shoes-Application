let sortBtn = document.getElementById("sortby_btn");
let sortOpt = document.getElementsByClassName("sortby_opt");
let selectCategoryBtn = document.getElementById("selectCategory")
let showCategory = document.getElementsByClassName("select_bx");


sortBtn.addEventListener("click",()=>
{
    sortOpt[0].classList.toggle("sortby_opt_active");
});

selectCategoryBtn.addEventListener("click",()=>{
    showCategory[0].classList.toggle("select_bx_active")
});


let Sort_Title = document.querySelector(".title_sortby")
let Newest = document.getElementById("Newest");
let All_Shoes = document.getElementById("All_Shoes");
let Low  = document.getElementById("Low");
let High = document.getElementById("High");

let showCard = document.getElementById("main_Card"); //Container which Hold Cards



fetch('shoesData.json')
.then((res)=>res.json())
.then((data)=>{
    data.map((ele)=>{console.log(ele.Type)})
    
    const All_Shoes_Data = [...data];
    const Low_Data = [...data].sort(({Price:a},{Price:b})=>a-b);
    const High_Data = [...data].sort(({Price:a},{Price:b})=>b-a);
    const Newest_Data = [...data].splice(data.length-5,data.length);
    const Btn_Array = [Newest,All_Shoes,Low, High];

    renderCard(data)
    Newest.addEventListener('click',()=> { renderCard(Newest_Data,"Newest Shoes") });
    All_Shoes.addEventListener("click",()=> { renderCard(All_Shoes_Data,"All Shoes") });
    Low.addEventListener('click',()=> { renderCard(Low_Data,"Low to High Price") });
    High.addEventListener('click',()=> { renderCard(High_Data,"High to Low Price")});


//----------------------------------------FILTER_PRODUCTS-------------------------------------------------------------------------------

    //-----------function Filter------------

function filterCard(filter_btn , filter_title_type){
    
    let Shorted_Array_Data =  All_Shoes_Data.filter((ele)=>{return ele.Type == filter_title_type})
    
        if(filter_btn.title === `${filter_title_type}_filter_off`){
            filter_btn.classList.toggle("i_active")
            filter_btn.classList.toggle("bi-toggle2-off")
            filter_btn.classList.toggle("bi-toggle2-on")
            filter_btn.title = `"${filter_title_type}_filter_on"`;
            showCard.innerHTML=''
        
            Filtered_Array_Data = Filtered_Array_Data.concat(Shorted_Array_Data);     
            
        }else{
            showCard.innerHTML=''
            filter_btn.classList.toggle("i_active")
            filter_btn.classList.toggle("bi-toggle2-off")
            filter_btn.classList.toggle("bi-toggle2-on")
            filter_btn.title = `${filter_title_type}_filter_off`;

            Filtered_Array_Data = Filtered_Array_Data.filter((item) => 
                {
                    return !(item.Type===`${filter_title_type}`)
                }
            );
        }
        
        renderCard(Filtered_Array_Data);
        
        
}

// -----------------------------------------------------------------Shoes-&--Icons------------------------------------------

const BootsBtn = document.getElementById('Boots');
const LoafersBtn = document.getElementById('Loafer');
const Air_ForceBtn = document.getElementById('Air_Force');
const Air_MaxBtn = document.getElementById('Air_Max');
const Zoom_RivalBtn = document.getElementById('Zoom_Rival');
const PegasusBtn = document.getElementById('Pegasus');
const Nike_DunkBtn = document.getElementById('Nike_Dunk');

let Filtered_Array_Data =[];

BootsBtn.addEventListener("click",()=>{
    console.log(Filtered_Array_Data);
     filterCard(BootsBtn,"Boots");
     console.log(Filtered_Array_Data);
    });
      

LoafersBtn.addEventListener('click',()=>{
    console.log(Filtered_Array_Data);
    filterCard(LoafersBtn,"Loafer")
    console.log(Filtered_Array_Data);
});

Air_ForceBtn.addEventListener('click',()=>{
    filterCard(Air_ForceBtn,"Air Force")
});

Air_MaxBtn.addEventListener('click',()=>{
    filterCard(Air_MaxBtn,"Air Max")
});

Zoom_RivalBtn.addEventListener('click',()=>{
    filterCard(Zoom_RivalBtn,"Zoom Rival")
});

PegasusBtn.addEventListener('click',()=>{
    filterCard(PegasusBtn,"Pegasus")
});

Nike_DunkBtn.addEventListener('click',()=>{
    filterCard(Nike_DunkBtn,"Nike Dunk")
});


// --------------------------------------------------------Price Range------------------------------------------------





//-------------------------------------------------------Colors Shoes------------------------------------------------

const color = ['white', 'gray-white', 'yellow', 'yellow-black', 'orange', 'green', 'sky-blue', 'pink', 'red', 'blue', 'gray-black', 'brown', 'black' ];
  
// console.log( Array.from(document.getElementsByClassName('color')) );
Array.from(document.getElementsByClassName('color')).map((ele,index)=>{
    // console.log(ele,index)

    ele.addEventListener('click',()=>{
       
        let color_Array_Data = 
        All_Shoes_Data.filter((el)=>
            {
                return el.ColorTag === color[index]
            });
    
        renderCard(color_Array_Data)

    });
});


//------------------------------------------------------- Shoes Sizes------------------------------------------------

const Shoes_sizes =  [4, 7, 9, 6, 5, 8.5, 10, 11.5, 9.5, 8, 7.5];
Array.from(document.getElementsByClassName('size')).map((ele,index)=>{

    ele.addEventListener('click',()=>{
        console.log("selected",ele.innerText,index,Shoes_sizes[index])
        let Sizes_Array_Data =  All_Shoes_Data.filter((el)=>{ return el.Size8 == Shoes_sizes[index] });
        
        console.log(Sizes_Array_Data )
        renderCard(Sizes_Array_Data)
    })

});


})




function renderCard(Data_info, Sort_Title_Data){

    if(Sort_Title_Data){
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>${Sort_Title_Data}</h4>`
    }else{
        Sort_Title.childNodes[1].innerHTML=`<h4>Shoes</h4>`
    }
    // const showCard = document.getElementById("main_Card");
    showCard.innerHTML = ""
    // let nodeHtml = '';

    Data_info.map((ele,index)=>{
        const {Name,Category,Color,Price,MRP,Tag,Img} = ele;

        // console.log(Data_info.length)
        showCard.innerHTML+= `
                <a href="#" class="card">
                    <img src="${Img}" alt="${Name}">
                    <h5 class="card_title">Nike Air Force 1 Mid QS</h5>
                    <p>${Category}</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>Rs ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color 1</h6>
                        <h6>${Tag}</h6>
                    </div>
                </a>  
                `
    })
    // showCard.innerHTML = nodeHtml
}