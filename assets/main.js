const handleBairros = (e) =>{
    var bairrosOverlay = document.querySelector(".bairros_overlay")
    var img = document.querySelector(".searchBarIcon img")
    bairrosOverlay.classList.contains("active") ? bairrosOverlay.classList.remove("active") : bairrosOverlay.classList.add("active")
    bairrosOverlay.classList.contains("active") ? img.setAttribute("src", "assets/images/CloseSearch.svg"): img.setAttribute("src", "assets/images/SearchIcon.svg") 
}

const preventingDefault = (e) =>{
    e.stopPropagation()
}


const handleSearch = (e) =>{
    console.log(e)
    var valor = e.value
    valor = valor.replaceAll(' ', 'wyx')
    var replace = `${valor}\\w`;
    var re = new RegExp(replace,"gi");

    var td_array = document.querySelectorAll(".wrapper table td:first-of-type")
    td_array.forEach((td)=>{
        var product_nome = td.innerText 
        product_nome = product_nome.trim().replaceAll(' ', 'wyx')
        if(!product_nome.match(re)){
            td.closest('tr').style.display = 'none' 
            td.closest('tr').setAttribute("hide", "true")
        }else{
            console.log(`\n\n${product_nome}   ${valor}`)
            td.closest('tr').style.display = 'table-row' 
            td.closest('tr').setAttribute("hide", "false")
        }
    }) 

    var table_array = document.querySelectorAll(".wrapper table")
    table_array.forEach((table)=>{
        var tr_array = table.querySelectorAll('tr[hide=false]')
        tr_array.length == 0 ? table.style.display = 'none' : table.style.display = 'table'
    })

}

const handleSearchIcon = () =>{
    var searchIcon = document.querySelector(".searchBarWrapper")
    var img = document.querySelector(".searchBarIcon img")
    searchIcon.classList.contains("active") ? searchIcon.classList.remove("active") : searchIcon.classList.add("active")
    searchIcon.classList.contains("active") ? img.setAttribute("src", "assets/images/CloseSearch.svg"): img.setAttribute("src", "assets/images/SearchIcon.svg") 
}

document.querySelectorAll("option").forEach((option)=>{
    option.addEventListener("click", (e)=>{
        console.log(e.value)
    })
})


setInterval(() => {
    if (document.readyState === 'complete') {
        document.querySelector('.overlayLoad').classList.remove("active")
    }
}, 500);

document.querySelector(".wrapper_categories").addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
})

document.querySelector(".overlayCategories").addEventListener("click", (e)=>{
    e.currentTarget.classList.remove("active")
    console.log(e.currentTarget)
})

document.querySelector(".categoryIcon").addEventListener("click", (e)=>{
    document.querySelector(".overlayCategories").classList.add("active")
})
    
document.querySelectorAll(".overlayCategories .wrapper_categories .category_menu_single img, .overlayCategories .wrapper_categories .category_menu_single p").forEach((category_single, index)=>{
    category_single.addEventListener("click", (e)=>{
        var scroll_div = 0

/*          */
        document.querySelectorAll(".cardapio_container table").forEach((table, index_table)=>{
            if(index_table > index){
                scroll_div += table.offsetHeight
            }
        })  
        
        var child = e.currentTarget.closest('.owl-item')
        var parent = child.parentNode;
        var index_scroll = Array.prototype.indexOf.call(parent.children, child);
        if(window.innerWidth <= 550){
            index_scroll = index_scroll - 5
            console.log(index_scroll)
/*             switch (index_scroll){
                case 5:
                    index_scroll = 0;
                    break;
                case 6:
                    index_scroll = 1;
                    break;
                case 7:
                    index_scroll = 2;
                    break;
                case 8:
                    index_scroll = 3;
                    break;
                case 9:
                    index_scroll = 4;
                    break;
                case 10:
                    index_scroll = 5;
                    break;
                case 11:
                    index_scroll = 6;
                    break;
                case 12:
                    index_scroll = 7;
                    break;
                case 13:
                    index_scroll = 8;
                    break;
                case 14:
                    index_scroll = 9;
                    break;
            } */
        }

/*         document.querySelector(".overlayCategories").classList.remove("active") */
        document.getElementsByClassName("category_table")[index_scroll].scrollIntoView({behavior: "smooth", inline: "center"});
    })
})