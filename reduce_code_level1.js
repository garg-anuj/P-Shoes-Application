let sortBtn = document.getElementById("sortby_btn");
let sortOpt = document.getElementsByClassName("sortby_opt");

sortBtn.addEventListener("click",()=>
{
    sortOpt[0].classList.toggle("sortby_opt_active");
    console.log('working')
})

let Sort_Title = document.querySelector(".title_sortby")
let Newest = document.getElementById("Newest");
let All_Shoes = document.getElementById("All_Shoes");
let Low  = document.getElementById("Low");
let High = document.getElementById("High");



let showCard = document.getElementById("main_Card"); // the div in which Whole shoes Card We are Fetching


fetch('shoesData.json')
.then((res)=>res.json())
.then((data)=>{
    
    const All_Shoes_Data = [...data];
    const Low_Data = [...data].sort(({Price:a},{Price:b})=>a-b);
    const High_Data = [...data].sort(({Price:a},{Price:b})=>b-a);
    const Newest_Data = [...data].splice(data.length-5,data.length);

    renderCard(data)

    const Btn_Array = [Newest,All_Shoes,Low, High];


    Newest.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>Newest Shoes</h4>`
         renderCard(Newest_Data)

    });


    Low.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>Low to High Price </h4>`
        renderCard(Low_Data)

    });


    High.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>High to Low Price </h4>`
        renderCard(High_Data)

    });


//----------------------------------------FILTER_PRODUCTS-------------------------------------------------------------------------------

// ----Boots-------
            //-----------function Filter------------
function filterCard(filter_btn , filter_title_type, All_Shoes_Data){
    
    let Shorted_Array_Data =  All_Shoes_Data.filter((ele)=>{return ele.Type == filter_title_type})
    
        if(filter_btn.title === `${filter_title_type}_filter_off`){
            filter_btn.classList.toggle("i_active")
            filter_btn.classList.toggle("bi-toggle2-off")
            filter_btn.classList.toggle("bi-toggle2-on")
            filter_btn.title = `"${filter_title_type}_filter_on"`;
            showCard.innerHTML=''
            console.log(filter_btn.title)

        
            Filtered_Array_Data = Filtered_Array_Data.concat(Shorted_Array_Data);  //console.log(Filtered_Array_Data);   
            // concat() method returns a new array without modifying the original array, so you need to assign the result back to the Filtered_Array_Data

            console.log(`'${filter_title_type} if'`,Filtered_Array_Data);
            
            renderCard(Filtered_Array_Data);

            
        }else{
            showCard.innerHTML=''
            filter_btn.classList.toggle("i_active")
            filter_btn.classList.toggle("bi-toggle2-off")
            filter_btn.classList.toggle("bi-toggle2-on")
            filter_btn.title = `${filter_title_type}_filter_off`;

            Filtered_Array_Data= [];
            console.log(`'${filter_title_type} else'`,Filtered_Array_Data);
            renderCard(Filtered_Array_Data);

        }
        
}


const BootsBtn = document.getElementById('Boots')
const LoafersBtn = document.getElementById('Loafer')
// const{BootsBtn,LoafersBtn} = document.getElementById  //trying this method


let Filtered_Array_Data =[]

// ------------------------
BootsBtn.addEventListener("click",()=>{filterCard(BootsBtn,"Boots",All_Shoes_Data)})
LoafersBtn.addEventListener('click',()=>{filterCard(LoafersBtn,"Loafer",All_Shoes_Data)})

// -----------------------------------------------------------Icons--------------------------------------------------


// const Btn_Array = [BootsBtn,LoafersBtn]






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

})




})




function renderCard(Data_info){
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







