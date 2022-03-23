const handleBairros = (e) =>{
    var bairrosOverlay = document.querySelector(".bairros_overlay")
    bairrosOverlay.classList.contains("active") ? bairrosOverlay.classList.remove("active") : bairrosOverlay.classList.add("active")
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
    searchIcon.classList.contains("active") ? searchIcon.classList.remove("active") : searchIcon.classList.add("active")
}
