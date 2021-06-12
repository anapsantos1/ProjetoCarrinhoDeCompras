console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('         Dev. Ana Paula              ')
console.log('--------------------------------------')

// const db   = require('./database')
// const { produtos } = db

const produtos = require('./database')



produtos.sort((a, b)=> a.preco - b.preco)
// console.table(produtos)

const carrinho = []
let arry1 = new Array();
//let itens = new Array();
const ler = require('readline-sync')
const db = require('./database')

const verCategoria = ler.question('Voce deseja encontrar o produto por categoria? (S/N)')
if(verCategoria.toUpperCase() === 'S'){
    console.log('-----------------------------------------------')
    console.log('      Essas sao as categorias de produtos      ')
    console.log('-----------------------------------------------')
    console.log(' alimento, bebida, casa, higiene, informatica  ')
    console.log('-----------------------------------------------')

    

    const verCategoria = ler.question('Qual e a categoria escolhida? ');

    const findCategoria = produtos.filter(produtos => produtos.categoria === verCategoria);

    console.table(findCategoria)

}else{
  console.log('Essa e nossa lista de produtos')
  console.table(produtos)

}

const array = new Array()

class pedidosAdd{
  constructor(array){
    this.product = array
    this.subTotal = 0
    this.valorTotal = 0
    this.totalItems = 0
  }
}


const realizarACompra = ler.question('Deseja efetuar uma compra? (S/N)')

if(realizarACompra.toUpperCase() === 'S'){

  const fazerCompras = () => {

    produtoID = parseInt(ler.question('Digite o id do produto desejado: '))

    
    for (i = 0; i < 1000; i++) {
        buscarId = produtos.find(item => item.id === produtoID)
        if (buscarId) {
            break;
        } else {
           produtoID = parseInt(ler.question('Id nao encontrado, tente novamente: '))
        }
    }

    quantidadeItens = parseInt(ler.question('Digite a quantidade de produtos que deseja comprar: '))

    for (i = 0; i < 1000; i++) {
        if (quantidadeItens > 0) {
            break;
        } else {
            quantidadeItens = parseInt(ler.question('Digite uma quantidade valida: '))
        }
    }

    const produtosCarrinho = { ...buscarId, quantidade: quantidadeItens}
    carrinho.push(produtosCarrinho)

  
    const contComprando = ler.question('Deseja inserir mais algum produto no carrinho? (Digite S ou N): ')
    const contComprandoFormat = contComprando.toLowerCase()

    if (contComprandoFormat === 'n') {
        cupomDesc = ler.question('Voce possue cupom de desconto: (S/N)').toLowerCase(); {
            if (cupomDesc === 's'){
                cupom = parseInt(ler.question('Digite o valor do seu cupom de desconto: '))
            }
        }
    } else {
      fazerCompras()
    }

    for (i = 0; i < 1000; i++) {
        if(cupom > 15 || cupom < 0){
            cupom = parseInt(read.question('Lamento, cupom invalido! Tente novamente: '))
        }else{
            break;
        }
    }
}
fazerCompras()



class Order {
  constructor(carrinho){
    this.newProducts = carrinho
    this.subtotal = 0
  }
  calcSubtotal() {
    this.subtotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  }

}
const order = new Order (carrinho)
console.table(order.newProducts)


order.calcSubtotal()
console.log(`Valor do pedido: R$ ${order.subtotal.toFixed(2)}.`)


const desconto = order.subtotal * (cupom / 100)
console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}.`)


const total = order.subtotal - desconto
console.log(`Valor total do pedido seu pedido é R$ ${total.toFixed(2)}`)

console.log('Obrigada por comprar conosco :) ')
}else{
  console.log('Obrigada por visitar nosso site :)')
}
console.log('Volte Sempre :) ')

console.log('------------------------------------')
