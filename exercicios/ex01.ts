// Exercício 01

// 1. Crie um type chamado "Produto" com:
//    id (number), nome (string), preco (number),
//    categoria (string), emEstoque (boolean), descricao (opcional)

// 2. Crie um objeto "notebook" usando esse type com dados reais

// 3. Crie uma função "calcularDesconto" que recebe
//    um Produto e um percentual (0-100) e retorna o preço final

// 4. Crie um type "StatusPedido" que só aceita:
//    "aguardando" | "enviado" | "entregue" | "cancelado"

// 5. Rode com: pnpm exec tsx exercicios/ex01.ts

type Produto = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  emEstoque: boolean;
  descricao?: string;
};

const notebook: Produto = {
  id: 1,
  nome: "Notebook Dell XPS 13",
  preco: 999.99,
  categoria: "Eletrônicos",
  emEstoque: true,
  descricao:
    "Notebook ultrafino com processador Intel Core i7, 16GB RAM e 512GB SSD.",
};

function calcularDesconto(produto: Produto, percentual: number): number {
  if (percentual < 0 || percentual > 100) {
    throw new Error("Percentual deve ser entre 0 e 100");
  }
  const desconto = (produto.preco * percentual) / 100;
  return produto.preco - desconto;
}

type StatusPedido = "aguardando" | "enviado" | "entregue" | "cancelado";

let meuPedido: StatusPedido = "aguardando";
meuPedido = "entregue";
console.log(`Status do pedido: ${meuPedido}`);

// Exemplo de uso
const precoComDesconto = calcularDesconto(notebook, 20);
console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
