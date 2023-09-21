import readline from 'readline-sync';
import clear from 'clear';
class Paciente {
  constructor(nome, cpf, dtNascimento, consulta) {
    this.nome = nome;
    this.cpf = cpf;
    this.dtNascimento = dtNascimento;
    this.consulta = consulta;
  }
}


function printAmarelo(texto) {
  console.log('\x1b[33m%s\x1b[0m', texto);
}

function printVerde(texto) {
  console.log('\x1b[32m%s\x1b[0m', texto);
}

function printVermelho(texto) {
  console.error('\x1b[31m%s\x1b[0m', texto);
}

function apenasLetras(texto) {
  const verificar = /^[a-zA-Z\s]+$/;
  return verificar.test(texto);
}

function maxMin(txt, limiteMin, limiteMax){
  if(txt.length < limiteMin || txt.length > limiteMax || txt.length === 0){ 
    console.error(`Erro em quantidade de caracteres (MIN:${limiteMin} MAX: ${limiteMax})`);
    printVermelho(`Erro em quantidade de caracteres (MIN:${limiteMin} MAX: ${limiteMax})`);
    return true;
  } else return false;
}
@@ -28,10 +41,10 @@ function testeNumero(valor) {

function maxMinCpf(txt, limiteMin, limiteMax){
if(txt.length < limiteMin || txt.length > limiteMax){ 
    console.error(`Erro em quantidade de caracteres (MIN:${limiteMin} MAX: ${limiteMax})`);
    printVermelho(`Erro em quantidade de caracteres (MIN:${limiteMin} MAX: ${limiteMax})`);
    return true;
  } else if(!testeNumero(txt)) {
    console.error("Erro: O valor digitado não é um número ou é zero.");
    printVermelho("Erro: O valor digitado não é um número ou é zero.");
    return true;
  } else return false;
}
@@ -69,7 +82,7 @@ class Hospital {
    do {
      nome = readline.question("Digite o nome do paciente: ");
      if(!apenasLetras(nome)) {
        console.error("O nome deve conter apenas letras.");
        printVermelho("Nome deve conter apenas letras.");
      }
    }
    while(maxMin(nome, 1, 50) || !apenasLetras(nome));
@@ -86,7 +99,7 @@ class Hospital {
    do {
      consulta = readline.question("Digite o tipo da consulta: ");
      if(!apenasLetras(consulta)) {
        console.error("A consulta deve conter apenas letras.");
        printVermelho("A consulta deve conter apenas letras.");
      }
    }
    while(maxMin(consulta, 2, 50) || !apenasLetras(consulta));
@@ -105,15 +118,15 @@ class Hospital {
    );

    if (pacienteEncontrado) {
      console.log(`-- Paciente Encontrado --
      printVerde(`-- Paciente Encontrado --
      Nome: ${pacienteEncontrado.nome}
      CPF: ${pacienteEncontrado.cpf}
      Idade: ${dateFromDB(pacienteEncontrado.dtNascimento)[1]} anos (${dateFromDB(pacienteEncontrado.dtNascimento)[0]})
      Consulta: ${pacienteEncontrado.consulta}
      `);
    } else {
      console.clear();
      console.log("Paciente não encontrado");
      printVermelho("Paciente não encontrado");
    }
  }

@@ -127,15 +140,15 @@ class Hospital {
    );

    if (pacienteEncontrado) {
      console.log(`-- Paciente Encontrado --
      printVerde(`-- Paciente Encontrado --
      Nome: ${pacienteEncontrado.nome}
      CPF: ${pacienteEncontrado.cpf}
      Idade: ${dateFromDB(pacienteEncontrado.dtNascimento)[1]} anos (${dateFromDB(pacienteEncontrado.dtNascimento)[0]})
      Consulta: ${pacienteEncontrado.consulta}.
      `);
      let continuarAlterando = true;
      while (continuarAlterando) {
        console.log(`O que deseja alterar?
        printAmarelo(`O que deseja alterar?
        1. Nome
        2. CPF
        3. Data de Nascimento
@@ -153,13 +166,13 @@ class Hospital {
            do {
              novoNome = readline.question("Digite o nome do paciente: ");
              if(!apenasLetras(novoNome)) {
                console.error("O novo nome deve conter apenas letras.");
                printVermelho("Novo nome deve conter apenas letras.");
              }
            }
            while(maxMin(novoNome, 1, 50) || !apenasLetras(novoNome)){
            pacienteEncontrado.nome = novoNome;
            console.clear();
            console.log(`Nome do paciente alterado com sucesso! Novo nome: ${pacienteEncontrado.nome}`);
            printVerde(`Nome do paciente alterado com sucesso! Novo nome: ${pacienteEncontrado.nome}`);
            }
            break;
          case 2:
@@ -168,7 +181,7 @@ class Hospital {
            while(maxMinCpf(novoCpf, 10, 14)){
            pacienteEncontrado.cpf = novoCpf;
            console.clear();
            console.log(`CPF do paciente alterado com sucesso! Novo CPF: ${pacienteEncontrado.cpf}`);
            printVerde(`CPF do paciente alterado com sucesso! Novo CPF: ${pacienteEncontrado.cpf}`);
            }
            break;
          case 3:
@@ -177,36 +190,36 @@ class Hospital {
            while(maxMin(dtNascimento, 10, 10)){
            pacienteEncontrado.dtNascimento = novaDtNasc;
            console.clear();
            console.log(`Data de nascimento do paciente alterada com sucesso! Nova data: ${pacienteEncontrado.idade}`);
            printVerde(`Data de nascimento do paciente alterada com sucesso! Nova data: ${pacienteEncontrado.idade}`);
            }
            break;
          case 4:
            let novaConsulta = "";
            do {
              novaConsulta = readline.question("Digite a nova consulta do paciente: ");
              if(!apenasLetras(novaConsulta)) {
                console.error("A nova consulta deve conter apenas letras.");
                printVermelho("A nova consulta deve conter apenas letras.");
              }
            }
            while(maxMin(novaConsulta, 2, 50) || !apenasLetras(novaConsulta)){
            pacienteEncontrado.consulta = novaConsulta;
            console.clear();
            console.log(`Consulta do paciente alterada com sucesso! Nova consulta: ${pacienteEncontrado.consulta}`);
            printVerde(`Consulta do paciente alterada com sucesso! Nova consulta: ${pacienteEncontrado.consulta}`);
            }
            break;
          case 5:
            console.log("Alterações finalizadas...");
            printAmarelo("Alterações finalizadas...");
            this.pausarLimpar();
            continuarAlterando = false;
            break;
          default:
            console.log("Opção inválida! Por favor, escolha uma opção válida.");
            printVermelho("Opção inválida! Por favor, escolha uma opção válida.");
            this.pausarLimpar();
        }
      }
    } else {
      console.clear();
      console.log("Paciente não encontrado");
      printVermelho("Paciente não encontrado");
      this.pausarLimpar();
    }
  }
@@ -223,29 +236,29 @@ class Hospital {
    if (pacienteIndex !== -1) {
      const pacienteRemovido = this.pacientes.splice(pacienteIndex, 1);
      console.clear();
      console.log(`Paciente ${pacienteRemovido[0].nome} removido com sucesso!`);
      printVerde(`Paciente ${pacienteRemovido[0].nome} removido com sucesso!`);
      this.pausarLimpar();
    } else {
      console.clear();
      console.log("Paciente não encontrado");
      printVermelho("Paciente não encontrado");
      this.pausarLimpar();
    }
  }

  listarPacientes() {
    console.clear();
    if (this.pacientes.length > 0) {
      console.log("Lista de pacientes: ");
      printAmarelo("Lista de pacientes: ");
      this.pacientes.forEach((paciente) => {
        console.log(`
        printVerde(`
        Nome: ${paciente.nome}
        CPF: ${paciente.cpf}
        Idade: ${dateFromDB(paciente.dtNascimento)[1]} anos (${dateFromDB(paciente.dtNascimento)[0]})
        Consulta: ${paciente.consulta}
        `);
      });
    } else {
      console.log("Não há pacientes cadastrados");
      printVermelho("Não há pacientes cadastrados");
    }
  }

@@ -256,7 +269,7 @@ class Hospital {

  iniciar() {
    while (true) {
      console.log(`--- Bem-vindo ao Cadastro do Hospital Softex ---
      printAmarelo(`--- Bem-vindo ao Cadastro do Hospital Softex ---
      Escolha uma opção:
      1. Cadastrar paciente
      2. Buscar paciente
@@ -272,7 +285,7 @@ class Hospital {
        case 1:
          this.cadastrarPaciente();
          console.clear();
          console.log("Paciente cadastrado com sucesso!");
          printVerde("Paciente cadastrado com sucesso!");
          this.pausarLimpar();
          break;
        case 2:
@@ -291,11 +304,11 @@ class Hospital {
          break;
        case 6:
          console.clear();
          console.log("Saindo do Cadastro de Hospital...");
          printAmarelo("Saindo do Cadastro de Hospital...");
          process.exit(0);
        default:
          console.clear();
          console.log("Opção inválida! Por favor, escolha uma opção válida.");
          printVermelho("Opção inválida! Por favor, escolha uma opção válida.");
          this.pausarLimpar();
      }
    }
  }
}
const hospitalSoftex = new Hospital();
hospitalSoftex.iniciar();