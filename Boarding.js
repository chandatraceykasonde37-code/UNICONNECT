function searchHouse(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let location = document.getElementById("location").value.toLowerCase();


    let houses = document.querySelectorAll(".house-card");


    houses.forEach(function(house){


        let text = house.innerText.toLowerCase();


        if(
            text.includes(input) &&
            (location === "all locations" ||
            text.includes(location))
        ){

            house.style.display="block";

        }

        else{

            house.style.display="none";

        }


    });


}





// Add animation when houses appear

window.addEventListener("load",()=>{


    let cards=document.querySelectorAll(".house-card");


    cards.forEach((card,index)=>{


        card.style.opacity="0";


        card.style.transform="translateY(30px)";


        setTimeout(()=>{


            card.style.transition="0.6s";


            card.style.opacity="1";


            card.style.transform="translateY(0)";


        },index*200);



    });



});






// Button actions

let buttons=document.querySelectorAll(".book");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        alert(
        "Thank you for choosing UniConnect Zambia. A student accommodation agent will contact you soon."
        );


    });


});