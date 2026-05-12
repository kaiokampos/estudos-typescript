// 01 — tipos básicos
// Regra: TypeScript = JavaScript + tipos declarados
// O compilador te avisa ANTES de rodar. Isso evita bugs em produção.

// --- tipos primitivos ---
const nome: string = "Kaio";
const idade: number = 37;
const ativo: boolean = true;

console.log({ nome, idade, ativo });

// --- type inference ---
// Na prática não precisa declarar o tipo quando o valor é óbvio.
// O TS infere automaticamente — use assim no dia a dia.
const cidade = "Rio de Janeiro"; // TS já sabe: string
const ano = 2026; // TS já sabe: number

// --- arrays ---
const tecnologias: string[] = ["React", "Node.js", "TypeScript"];
const ids: number[] = [1, 2, 3];

console.log(tecnologias);

// --- type: define a forma de um objeto ---
// Você vai usar isso o tempo todo em APIs e componentes Next.js
type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

const usuario: Usuario = {
  id: 1,
  nome: "Kaio",
  email: "kaio@email.com",
  ativo: true,
};

console.log(usuario);

// --- campos opcionais com ? ---
type Projeto = {
  id: number;
  titulo: string;
  descricao?: string; // pode ou não existir
  url?: string;
};

const projeto: Projeto = {
  id: 1,
  titulo: "Portfólio",
  // descricao e url omitidos — válido porque são opcionais
};

console.log(projeto);

// --- funções com tipos ---
function somar(a: number, b: number): number {
  return a + b;
}

const cumprimentar = (nome: string): string => {
  return `Olá, ${nome}!`;
};

console.log(somar(10, 20));
console.log(cumprimentar("Kaio"));

// --- union types: quando pode ser mais de um valor ---
// Muito usado em status de pedidos, respostas de API
type Status = "ativo" | "inativo" | "pendente";

let statusAtual: Status = "ativo";
statusAtual = "pendente"; // válido
// statusAtual = "outro"  // ← erro do TS — experimente descomentar

type ID = string | number;
let meuId: ID = 123;
meuId = "abc-456"; // também válido

console.log(statusAtual, meuId);
