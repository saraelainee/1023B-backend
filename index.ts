
// let variavel = 10
// let numero: number = 10
// let string: string = "isso é uma string"
// const boleano = true //false
// let vetorString: string[] = []
// const vetor: number[] = [] //o valor constante é um vetor, e n pode colocar um novo vetor dentro de uma constante

// //adicionar um valor no vetor
// vetor.push(10)
// vetorString.push("vvv")
// console.log(vetor)

// let nomeMateria: string = "Frameworks I"
// console.log(nomeMateria)

// //objetos em javascript

// const objEstudante = {
//     nome: "lala",
//     idade: 17,
//     cpf: "111.111.111-11"
// }
// objEstudante.cpf = "222.222.222-22" // para acessar uma propiedade do obj usamos .
// console.log(objEstudante)

// //crie um vetor com dois objetos de estudantes
// //nome, cpf, idade
// //mostre no console.log

// const vetorobj2estudantes = [{
//     nome: "fulano",
//     idade: 17,
//     cpf: "111.111.111-11"
// },
// {
//     nome: "fulano 2",
//     idade: 17,
//     cpf: "111.111.111-11"
// }]
// console.log(vetorobj2estudantes)


// //Type
// type PessoaType = {
//     nome: string;
//     idade: number;
// }
// const objPessoa: PessoaType = {
//     nome: "Sara",
//     idade: 10
// }







// // 

// //em objetos podemos utilizar a | tambem 
// //fica assim:

// type TypeMaisDeUmTipo = { nome: string | number }
// const objComMaisDeUmTipo: TypeMaisDeUmTipo = {
//     nome: "Saraa"
// }

// //agora passamos para funções
// function soma(a, b) {
//     return a + b;
// }

// const resultado = soma(10, 20)
// console.log(`O resultado da soma é:  ${resultado}`)

// //outras 4 formas de escrever funções
// function somaA(a: number, b: number): number {
//     return a + b;
// }

// const somaB = function (a: number, b: number): number | undefined {
//     return a + b;
// }
// const somaC = (a: number, b: number): number[] => {
//     return [a + b];
// }
// const somaD = (a: number, b: number) => a + b;


// //crie uma função que receba um vetor e some 
// //os numeros do vetor

// //somaNumeros = ([1,2,3,4]) 
// //10

// //quando o vetor passado for vazio:
// //retorna undefined 

// // = é atribuição      
// //== é igualdade
// //=== é sinal de igualdade de valor e tipo

// function somaNumeros(numeros: number[]): number | undefined {
//     let soma = 0
//     for (let i = 0; i < numeros.length; i++) {
//         soma = soma + numeros[i]
//     }
//     if (numeros.length == 0) {
//         return undefined;
//     } else {
//         return soma;
//     }

// }
// console.log(somaNumeros([1, 2, 3, 4]));
// console.log(somaNumeros([]));


// // mesma função com while 
// function somaNumeros1(numeros: number[]): number | undefined {
//     if (numeros.length == 0) {
//         return undefined;
//     }
//     let soma = 0
//     let i = 0
//     while (i < numeros.length) {
//         soma = soma + numeros[i]
//         i++
//     }
//     return soma;
// }

// console.log(somaNumeros1([1, 2, 3, 4]));

// //crie uma função que receba um vetor e um número
// //sua função deve somar as posições do vetor elevado ao número recebido por parâmetro


// //exemplo
// //somaElevado([1,2,3],2) tem que ser = 12
// //2**2
// //Math.pow(2,2)

// //se o vetor for vázio devolva undefined
// function somaElevado(vetor: number[], nume: number): number | undefined {
//     if (vetor.length === 0) return undefined;
//     let soma = 0
//     for (let i = 0; i < vetor.length; i++) {
//         soma = soma + vetor[i] ** nume
//     }
//     return soma
// }

// console.log(somaElevado([1, 2, 3], 3));



// // faça uma função que receba dois numeros e devolva um vetor
// //da sequência dos numeros 

// //exemplo sequencia (10,16) //[10,11,12,13,14,15,16]
// // sequencia (10,11) // [10,11]
// // sequ (10) [10]


// function sequencia(começo: number, fim: number): number[] {
//      if (começo === fim) {
//          let vetor = new Array
//          vetor.push(começo)
//          return vetor;
//      } 
//      if (começo < fim) {
//          let vetor = new Array
//          for (let i = começo; i <= fim; i++){
//              vetor.push(i)
//          }
//          return vetor;
//      } else {
//          let vetor = new Array
//          for (let i = começo; i >= fim; i--){
//              vetor.push(i)
//          }
//          return vetor;
//      }
//     }
//  console.log(sequencia(20, 20))

//---------------------------------------------------------------//
// AULA 29/03
// TRÊS TIPOS DE FUNÇÃO  
// MAP EM ARRAY
// FILTER
// FIND
// map é uma função de vetor
// ela serve para transformar o vetor em outra coisa
//callback - chama funções
// function olaMundo(){
//     console.log("Olá Mundo!")
// }
//  function chamaOlaMundo(f:()=>void){
//     f()
//  }
//  chamaOlaMundo(olaMundo)

// const vetor:number[] = [1,2,3,4,5]
 

// const result = vetor.map(
//     (x:number)=> x+2)
// console.log(result)

//atividade
//crie uma função que receba um vetor 
// e devolva um vetor onde cada elemento
// do novo vetor é uma soma do valor antigo 
//mais o número 2
// EX soma2([1,1,1,3]) // [3,3,3,5]

// function soma2(vetor:number[]){
//     return vetor.map((x)=>x+2)
// }

// console.log(soma2([2,2,2,3]))

// // faça uma função que receba um vetor e devolva
// //esse vetor elevado ao cubo

// //ex eleva([1,2,3]) // [1,8,24]
// function eleva(vetor:number[]){
//     return vetor.map((x)=>x ** 3)
// }

// console.log(eleva([1,2,3]))

// ---------------------------------------------------------//
// aula 31/03

/**
 * também são funções de vetores
 * .find => procurar/buscar
 * .filter => filtrar
 */
// const vetor = [1,2,3,4,5]
// function predicado(valorBuscado){
//     if(valorBuscado==6){
//         return true
//     } else {
//         return false 
//     }
// }
// //console.log(vetor.find(predicado)) // devolve só o primeiro resultado verdadeir
// console.log(vetor.filter(predicado)) // devolve todos os resultados verdadeiros

/**    conteudo novo do novo 
 * Assincronidade -> característica também do javascript 
 * não executar as linhas do código em sequência.
 * setTimeout() //é uma função que passa callback que é executada após passar o tempo 
 * - primeiro executa tudo e depois passa com um callbacke chamando isso que ficou pra trás-, não pausa a execução de outras funções
 */

/**
 * Promises // função - criar um objeto do tipo promise - uma promessa d que algo será executado no futuro em resolve(sim) e reject(nao)
 */
// function demora(){
//     const pro = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()<.1){
//                 resolve("Dados!!!")
//             } else {
//                 reject("Ma Hoy, mas não funciona néh!")
//             }
//         }, 1000) 
//     })
//     return pro
// }
// console.log("Início de código..");

// //then/ => é uma função de callback que é executado quando termina a função de promise
// // catch
// const resultado = demora()
// resultado
// .then((dados)=>{console.log("Resultado da promessa: "+dados)})
// .catch((erro)=>{console.log(erro)})


// console.log("Executei CONSOLE 2");


//  //---------------------------------await / async------------------------------//


// /**
//  * Novo javascript trouxe esse novo conceito de await e async
//  * await => é para voce ficar esperando algo assincrono (async)
//  * 
//  * Não podemos utilizar await sem ser uma função assincrona (async)
//  * 
//  * await mesma coisa do then
//  */

// async function aux(){
//     try{
//     const resultado = await demora()
//     console.log("Dados após await: "+resultado)
//     }
//     catch(erro){
//         console.log("Erro no TRY/CATCH"+erro)
//     }

// }
// aux()
 

//comentário da aula 08/04 (fazia parte do codigo abixo) -------------------------

// conn
// .then((conn:Connection)=>{
//     console.log("Conectou no banco")

//     conn.query("SELECT * FROM estudantes")
//     .then(query=>{//devolve um vetor, posição 0 retorna os dados e a posi1 retorna os dados
//         //mesma coisa
//         //const resultado = query[0]
//         //const estrutura = query[1]
//         const [resultado,estruturaTabela] = query
//         console.log(resultado) 
//         //console.log(estruturaTabela)

//         reply.send(resultado)
//     })
//     .catch((erro)=>{
//         if(erro.code==="ER_NO_SUCH_TABLE"){
//             console.log("ERRO: Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
//         }else if(erro.code==="ER_PARSE_ERROR"){
//             console.log("ERRO: Você digitou sua query errada, confira os parenteses, virgulas e nome das colunas")
//         } 
//         else{
//             console.log(erro)
//         }
//     })

//     conn.end()
//     .then(()=>console.log("Finalizei a conexão"))
//     .catch(()=>console.log("Não Finalizei a conexão"))
//     //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
// })
// .catch(erro=>{
//     console.log("Não conectou :(")
//     if(erro.code==="ECONNREFUSED"){
//         console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
//     }else if(erro.code==="ER_BAD_DB_ERROR"){
//         console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
//     }else if(erro.code==="ER_ACCESS_DENIED_ERROR"){
//         console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
//     }else{
//         console.log(erro)
//     }
// })

import mysql, { Connection, ConnectionOptions , QueryError } from 'mysql2/promise';
import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'


const app = fastify()
app.register(cors)

app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando!")
})
app.get("/estudantes", async (request: FastifyRequest, reply: FastifyReply) => {
   
    try {
      
        const conn = await mysql.createConnection( {
          host: "localhost",
          user: 'root',
          password: "",
          database: 'banco1023b',
          port: 3306
      });
        const resultado = await conn.query("SELECT * FROM estudantes")
        const [dados,estruturaTabela] = resultado
        reply.send(dados)


    } catch (erro:any) {
        if (erro.code === "ECONNREFUSED") {
            console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGÃO!!! CABEÇA!"})
        } else if (erro.code === "ER_BAD_DB_ERROR") {
            console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO"})
        } else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
            console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO DESCONHECIDO OLHE O TERMINAL"})
        }
    }
    // conn
    // .then((conn:Connection)=>{
    //     console.log("Conectou no banco")

    //     conn.query("SELECT * FROM estudantes")
    //     .then(query=>{
    //         // const resultado = query[0]
    //         // const estruturaTabela = query[1]
    //         const [resultado,estruturaTabela] = query
    //         console.log(resultado)
    //         reply.send(resultado)
    //     })
    //     .catch((erro)=>{
    //         if(erro.code==="ER_NO_SUCH_TABLE"){
    //             console.log("ERRO: Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
    //         }else if(erro.code==="ER_PARSE_ERROR"){
    //             console.log("ERRO: VOCÊ DIGITOU SUA QUERY DE FORMA ERRADA. CONFIRA OS PARENTESES, VIRGULAS E NOME DAS COLUNAS")
    //         }
    //         else{
    //             console.log(erro)
    //         }
    //     })

    //     conn.end()
    //     .then(()=>console.log("Finalizei a conexão"))
    //     .catch(()=>console.log("Não Finalizei a conexão"))
    //     //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
    // })
    // .catch(erro=>{
    //     console.log("Não conectou :(")
    //     if(erro.code==="ECONNREFUSED"){
    //         console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
    //     }else if(erro.code==="ER_BAD_DB_ERROR"){
    //         console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
    //     }else if(erro.code==="ER_ACCESS_DENIED_ERROR"){
    //         console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
    //     }else{
    //         console.log(erro)
    //     }
    // })

})
app.listen({ port: 8000 }, (erro, endereco) => {
    if (erro) {
        console.log("ERRO: Fastify não iniciou")
    }
    console.log(`Fastify iniciado na porta: ${endereco}`)
})