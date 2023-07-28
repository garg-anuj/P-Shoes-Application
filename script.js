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
    console.log(data);
    const All_Shoes_Data = [...data];
    const Low_Data = [...data];
    const High_Data = [...data];
    let Newest_Data = [...data].splice(data.length-5,data.length);

    let nodeHtml = ''
    // renderCard(data)



    data.map((ele,index)=>
    {
        const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
        // console.log(showCard)
        nodeHtml += `
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
    showCard.innerHTML = nodeHtml;


    Newest.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>Newest Shoes</h4>`
        console.log(Newest_Data);
        showCard.innerHTML = '';


        Newest_Data.map((ele,index)=>{
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            // console.log(Name)
            // console.log(showCard)
            console.log(data.length)
            showCard.innerHTML += `
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
    });


    Low.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>Low Shoes</h4>`

        Low_Data.sort(({Price:a},{Price:b})=>a-b)
        console.log(Low_Data);
        showCard.innerHTML = '';


        Low_Data.map((ele,index)=>{
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;

            console.log(data.length)
            showCard.innerHTML += `
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
    });


    High.addEventListener('click',()=>
    {
        sortOpt[0].classList.toggle("sortby_opt_active");
        Sort_Title.childNodes[1].innerHTML=`<h4>High Shoes</h4>`

        High_Data.sort(({Price:a},{Price:b})=>b-a)
        console.log(High_Data);
        showCard.innerHTML = '';


        High_Data.map((ele,index)=>
        {
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;

            console.log(data.length)
            showCard.innerHTML += `
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
    });


//----------------------------------------FILTER_PRODUCTS-------------------------------------------------------------------------------

// ----Boots-------

const BootsBtn = document.getElementById('boots')
const LoafersBtn = document.getElementById('loafers')
// const{BootsBtn,LoafersBtn} = document.getElementById  //trying this method


let Filtered_Array_Data =[]
let Boots_Array_Data =  All_Shoes_Data.filter((ele)=>{return ele.Type == "Boots"})


BootsBtn.addEventListener("click",()=>
{
    if(BootsBtn.title === "boots_filter_off"){
        BootsBtn.classList.toggle("i_active")
        BootsBtn.classList.toggle("bi-toggle2-off")
        BootsBtn.classList.toggle("bi-toggle2-on")
        BootsBtn.title = "boots_filter_on";
        showCard.innerHTML=''

      
        Filtered_Array_Data = Filtered_Array_Data.concat(Boots_Array_Data);  //console.log(Filtered_Array_Data);   
        // concat() method returns a new array without modifying the original array, so you need to assign the result back to the Filtered_Array_Data
        
        Filtered_Array_Data.map((ele,index)=>
        {
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            showCard.innerHTML += `
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

        
    }else{
        showCard.innerHTML=''
        console.log('else part')
        BootsBtn.classList.toggle("i_active")
        BootsBtn.classList.toggle("bi-toggle2-off")
        BootsBtn.classList.toggle("bi-toggle2-on")
        BootsBtn.title = "boots_filter_off";

        Filtered_Array_Data =  Filtered_Array_Data.filter((ele)=>
        {
            console.log(ele);
            return Boots_Array_Data.indexOf(ele)<0;
        })
        // Filtered_Array_Data= []
        console.log(Filtered_Array_Data);

        Filtered_Array_Data.map((ele,index)=>
        {
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            showCard.innerHTML += `
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
        
    }
    
});

// ------Rough---trying to remove duplicates------------------------------

// const Filtered_Data =[...Boots_Array_Data,...Loafers_Array_Data]
// console.log(Filtered_Data)


// const NoRepeat = [...new Set(Filtered_Data)]
// console.log(NoRepeat)
// -----------------------------------------------------------------------


// ----Loofers--------------------------------------------

let Loafers_Array_Data =  All_Shoes_Data.filter((ele)=>{return ele.Type == "Loafer"})

LoafersBtn.addEventListener("click",()=>
{
    if(LoafersBtn.title === "loafers_filter_off"){
        console.log('loafer if')
        LoafersBtn.classList.toggle("i_active")
        LoafersBtn.classList.toggle("bi-toggle2-off")
        LoafersBtn.classList.toggle("bi-toggle2-on")
        LoafersBtn.title = "loafers_filter_on";
        showCard.innerHTML=''

      
        Filtered_Array_Data = Filtered_Array_Data.concat(Loafers_Array_Data);  //console.log(Filtered_Array_Data);   
        // concat() method returns a new array without modifying the original array, so you need to assign the result back to the Filtered_Array_Data
        
        Filtered_Array_Data.map((ele,index)=>
        {
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            showCard.innerHTML += `
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

        
    }else{
        showCard.innerHTML=''
        console.log('else part')
        LoafersBtn.classList.toggle("i_active")
        LoafersBtn.classList.toggle("bi-toggle2-off")
        LoafersBtn.classList.toggle("bi-toggle2-on")
        LoafersBtn.title = "loafers_filter_off";

        Filtered_Array_Data =  Filtered_Array_Data.filter((ele)=>
        {
            console.log(ele);
            return Loafers_Array_Data.indexOf(ele)<0;
        })
        // Filtered_Array_Data= []
        console.log(Filtered_Array_Data);

        Filtered_Array_Data.map((ele,index)=>
        {
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            showCard.innerHTML += `
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
        
    }
    
});


// ----Icons-------






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

        // console.log(color_Array_Data)
        // renderCard(color_Array_Data)
        showCard.innerHTML =''
        color_Array_Data.map((ele,index)=>
        {
            
            const {Name,Category,Color,Price,MRP,Tag,Img} = ele;
            showCard.innerHTML += `
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


