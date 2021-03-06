var elItem =document.querySelectorAll(".features__item");
var elLink =document.querySelectorAll(".features__link");
var elFeaturesBox = document.querySelectorAll(".bookmark-wrapper");

elLink.forEach(function(links){

    links.addEventListener("click" , function(evt){
        evt.preventDefault();


        elItem.forEach(function(item){
            item.classList.remove("features__item--active");
        })

        links.parentElement.classList.add("features__item--active");



        elFeaturesBox.forEach(function(featuresItem){
            featuresItem.classList.remove("bookmark-wrapper--active");
        })

        document.querySelector(links.getAttribute("href")).classList.add("bookmark-wrapper--active");
    })
})