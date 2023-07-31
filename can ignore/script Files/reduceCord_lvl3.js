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


let sortTitle = document.querySelector(".title_sortby")
let Newest = document.getElementById("Newest");
let allShoes = document.getElementById("All_Shoes");
let Low  = document.getElementById("Low");
let High = document.getElementById("High");

let showCard = document.getElementById("main_Card"); //Container which Hold Cards



fetch('shoesData.json')
.then((res)=>res.json()) 
.then((data)=>{
    // data.map((ele)=>{console.log(ele.Type)})
    
    const allshoesData = [...data];
    const lowData = [...data].sort(({Price:a},{Price:b})=>a-b);
    const highData = [...data].sort(({Price:a},{Price:b})=>b-a);
    const newestData = [...data].splice(data.length-5,data.length);
    const Btn_Array = [Newest,allShoes,Low, High];

    renderCard(data)
    Newest.addEventListener('click',()=> { renderCard(newestData,"Newest Shoes") });
    allShoes.addEventListener("click",()=> { renderCard(allshoesData,"All Shoes") });
    Low.addEventListener('click',()=> { renderCard(lowData,"Low to High Price") });
    High.addEventListener('click',()=> { renderCard(highData,"High to Low Price")});


//----------------------------------------FILTER_PRODUCTS-------------------------------------------------------------------------------

    //-----------function which  Filter shoes according to its Type------------

function filterCard(filterBtn , filterTitleType){
    
    let Shorted_Array_Data =  allshoesData.filter((ele)=>{return ele.Type == filterTitleType})
    
        if(filterBtn.title === `${filterTitleType}_filter_off`){
            filterBtn.classList.toggle("i_active")
            filterBtn.classList.toggle("bi-toggle2-off")
            filterBtn.classList.toggle("bi-toggle2-on")
            filterBtn.title = `"${filterTitleType}_filter_on"`;
            showCard.innerHTML=''
        
            filteredArrayData = filteredArrayData.concat(Shorted_Array_Data);     
            
        }else{
            showCard.innerHTML=''
            filterBtn.classList.toggle("i_active")
            filterBtn.classList.toggle("bi-toggle2-off")
            filterBtn.classList.toggle("bi-toggle2-on")
            filterBtn.title = `${filterTitleType}_filter_off`;

            filteredArrayData = filteredArrayData.filter((item) => 
                {
                    return !(item.Type===`${filterTitleType}`)
                }
            );
        }
        
        renderCard(filteredArrayData);
        
        
}

// -----------------------------------------------------------------Shoes-&--Icons------------------------------------------

const arrayIdData = ['Boots', 'Loafer','Air_Force', 'Air_Max', 'Zoom_Rival', 'Pegasus', 'Nike_Dunk' ];  //Filters Btn Id
const arrayTitlesData = ["Boots", "Loafer", "Air Force", "Air Max", "Zoom Rival", "Pegasus", "Nike Dunk"] //Filters Btn Title

let filteredArrayData =[];

let checkDAta = arrayIdData.map((htmlEle_id,index)=>
{
    let Btn = document.getElementById(`${htmlEle_id}`)

    Btn.addEventListener('click',()=>{
        console.log("LeftData",filteredArrayData);
        filterCard(Btn,arrayTitlesData[index])
        console.log("getData",filteredArrayData)});
   
});

console.log(checkDAta )

// ------------------------------------------------------Price Range------------------------------------------------





//-------------------------------------------------------Colors Shoes------------------------------------------------

const color = ['white', 'gray-white', 'yellow', 'yellow-black', 'orange', 'green', 'sky-blue', 'pink', 'red', 'blue', 'gray-black', 'brown', 'black' ];
  
// console.log( Array.from(document.getElementsByClassName('color')) );
Array.from(document.getElementsByClassName('color')).map((ele,index)=>{
    // console.log(ele,index)

    ele.addEventListener('click',()=>{
       
        let color_Array_Data = 
        allshoesData.filter((el)=>
            {
                return el.ColorTag === color[index]
            });
    
        renderCard(color_Array_Data)

    });
});


//------------------------------------------------------- Shoes Sizes------------------------

const shoesSizes =  [4, 7, 9, 6, 5, 8.5, 10, 11.5, 9.5, 8, 7.5];
Array.from(document.getElementsByClassName('size')).map((ele,index)=>{

    ele.addEventListener('click',()=>{
        console.log("selected",ele.innerText,index,shoesSizes[index])
        let Sizes_Array_Data =  allshoesData.filter((el)=>{ return el.Size8 == shoesSizes[index] });
        
        console.log(Sizes_Array_Data )
        renderCard(Sizes_Array_Data)
    })

});


});
// --------------------------------------------------------Promise End--------------------



function renderCard(dataInfo, sortTitleData){

    if(sortTitleData){
        sortOpt[0].classList.toggle("sortby_opt_active");
        sortTitle.childNodes[1].innerHTML=`<h4>${sortTitleData}</h4>`
    }else{
        sortTitle.childNodes[1].innerHTML=`<h4>Shoes</h4>`
    }
    
    showCard.innerHTML = ""
    // let nodeHtml = '';

    dataInfo.map((ele,index)=>{
        const {Name,Category,Color,Price,MRP,Tag,Img} = ele;

        // console.log(dataInfo.length)
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