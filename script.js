
const list = document.querySelector('ul')
const buttonForeach = document.querySelector('.button-foreach')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.button-reduce')
const buttonFilter = document.querySelector('.button-filter')


function newCurrency (value){
    const currency = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return currency
}




function showAll(productarray) {
    let myLi =''
    productarray.forEach( product => {
        myLi += `
        <li>
                <img src=${ product.src}>
                <p> ${product.name}</p>
                <p class="price">R$ ${newCurrency(product.price)}</p>
            </li>
            `
    })
    list.innerHTML = myLi
}

function listMap () {
    const newList = menuOptions.map ((product) => ({
       ... product,
        price: product.price * 0.9 ,
    }))
    showAll(newList)
}

function listReduce (){
    const newList = menuOptions.reduce ((acc,value) =>{
    return acc+ value.price
    },0)

    list.innerHTML =`
            <li>
                
                <p> o valor total dos itens é de R$ ${newCurrency(newList)}</p>
                
            </li>
            `

}

function listFilter (){
    const newList = menuOptions.filter(product => product.vegan === true )
    showAll(newList)
}





buttonForeach.addEventListener('click',()=> showAll(menuOptions))
buttonMap.addEventListener('click',listMap)
buttonReduce.addEventListener('click', listReduce)
buttonFilter.addEventListener('click',listFilter)