let resturantMenu = JSON.parse(localStorage.getItem("resturantMenu"))
    ? JSON.parse(localStorage.getItem("resturantMenu"))
    : [
        {
            _id: '1',
            name: "Plov",
            price: 30000
        },
        {
            _id: '2',
            name: "Norin",
            price: 32000
        },
        {
            _id: '3',
            name: "Kabob",
            price: 22000
        },
        {
            _id: '4',
            name: "Somsa",
            price: 10000
        },
];
localStorage.setItem("resturantMenu", JSON.stringify(resturantMenu));

function setLS(){
    localStorage.setItem("resturantMenu", JSON.stringify(resturantMenu));
}
function showMenu(db = resturantMenu){
    console.log("Taomlar ro'yxati");
    
    db.forEach((element, index) =>  {
        
        console.log(`${element._id}. ${element.name} - ${element.price}`);
    });
}
showMenu()



function foodMenu(){
    let isTrue = true
    let promptMenu;
    while (isTrue) {
        promptMenu = prompt("1 - Menu bilan tanishish\n2 - Menuga taom qo'shish\n3 - Narxlarini tartiblaash\n0 - Menuni tark etish");
        switch (promptMenu){
            case '1':{
                showMenu()
                break;
            }    
            case '2':{
                addMenu()
                break;
            }
            case '3':{
                sortedPrice()
                break;
            }
            case '0':{
                isTrue = false;
                break;
            }
            default: {
                alert(`Iltimos menuni tanlang`);
            }
        }
    }
}
foodMenu()

function addMenu(){
    let addFoodName = prompt("ovqat nomi");
    let addFoodPrice = prompt("narxi qancha bo'sin?");
    let newFoodMenu = {
        _id: String(resturantMenu.length +1),
        name: addFoodName,
        price: addFoodPrice,
    };
    resturantMenu = [...resturantMenu,newFoodMenu];
    setLS()
}
addMenu()


function sortedPrice(){
    console.log("narxlar");
    let srtPrice = resturantMenu.sort((a,b) => a.price - b.price);
    resturantMenu = [...srtPrice];
    console.log([srtPrice]);
}
sortedPrice()