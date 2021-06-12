<h1 align="center">"Quinta semana de aula na Reprograma 🚀" </h1>

<h4 align = "center">"Revisão"</h4>

<h4 align = "center">Projeto Carrinho de Compras</h4>

 **O resultado do meu projeto JavaScript**

![alt text](https://github.com/anapsantos1/ProjetoCarrinhoDeCompras/blob/main/image/Animation.gif)



Precisamos criar uma solução de um carrinho de compras.



\- Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`



\- Receber via terminal as entradas de `id` e `quantidade` dos produtos a serem adquiridos.



\- Perguntar se a cliente possue cupom de desconto. Caso a cliente digite 10, significa que terá 10% de desconto.



\- Calcular o valor do subtotal (sem considerar o desconto)



\- Calcular o valor de desconto



\- Calcular o valor total (considerando o desconto do cupom)



\- Apresentar no console:

 \- a tabela contendo a lista de produtos adquiridos, incluindo a quantidade de cada produto

 \- o valor subtotal em Reais

 \- o valor do desconto em Reais

 \- o valor total em Reais

 \- a data da compra



**## Regras**



\- Validação de produto existente pelo `id`. Caso não encontre o produto, apresentar uma mensagem de erro e solicitar novamente um `id` válido.



\- Validação de `quantidade` para não permitir valores negativos.



\- Validação de cupom de desconto. Não aceitar cupom acima de 15% de desconto.



\- Criação de uma classe chamada `Pedido` contendo no `constructor` pelo menos as seguintes informações:

 \- a lista de produtos

 \- o valor de cupom

 



\- A classe `Pedido` deve conter os métodos:

 \- que calcule a quantidade de itens totais no carrinho

 \- que calcule o valor subtotal (quantidade de itens multiplicado pelo preço unitário)

 \- que calcule o valor de desconto (subtotal multiplicado pelo desconto)

 \- que calcule o valor total (subtotal menos o desconto)



\---



**### Sugestões de exercícios extras para praticar um pouco mais**



Essas são somente sugestões de como continuar exercitando para melhorar seu projeto e suas habilidades.



\- Inclua a data do pedido



\- Usar sintaxe ES6.



\- Colocar o nome das variáveis em inglês.



\- Fazer o `commit` do código a cada etapa concluída.



\- Fazer a ordenação do mais caro para o mais barato.



\- Fazer a busca dos produtos por `categoria` e apresentar somente os produtos da categoria escolhida.



\- Fazer um cupom de desconto "BLACKFRIDAY" que só permite dar desconto em algumas categorias.



\- Armazenar todos os pedidos e calcular o total que sua Lojinha vendeu.



\- etc...