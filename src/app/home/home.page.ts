import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  mensagemResultado: string = " "

  constructor() {}

 produtos: Produto [] = [
  {id:5, nome:"Sabão em pó", preco: 23, estoque:78},
  {id:3, nome:"Alvejante", preco: 33, estoque:209},
  {id:6, nome:"Esponja de Louça", preco: 5, estoque:124},
  {id:92, nome:"Margarina", preco: 14, estoque:96},
  {id:55, nome:"Queijo", preco: 15, estoque:85}
]

 tarefas: Tarefa [] = [
  {id:1, titulo:"Lavar roupa", concluida:false, prioridade:"media", dataCriacao: new Date(2026, 6, 6)},
  {id:5, titulo:"Fazer bolo", concluida:true, prioridade:"alta", dataCriacao: new Date(2026, 4, 10)},
  {id:8, titulo:"Concertar bicicleta", concluida:true, prioridade:"media", dataCriacao: new Date(2026, 4, 6)},
  {id:6, titulo:"Dever de casa", concluida:false, prioridade:"media", dataCriacao: new Date(2026, 6, 6)},
  {id:2, titulo:"Fazer currículo", concluida:false, prioridade:"alta", dataCriacao: new Date(2026, 6, 9)}
]

 formatarPreco(preco:number) {
  return preco.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL',
  });
}

 calcularEstoque(preco:number, estoque:number) {
  let total = (preco * estoque);
  return {total}
}


 TarefasConcluidas(){
  let concluidas = "Concluídas: "
  this.tarefas.forEach(p=> {
    if (p.concluida) {concluidas += "," + (p.titulo) + " "}
  });
   this.mensagemResultado = concluidas;
  }
}

 TarefasPendentes(){
  let pendentes = "Pendentes: "
  this.tarefas.forEach(p=> {
    if (p.concluida) {pendentes += "," + (p.titulo) + " "}
  });
  this mensagemResultado = pendentes
  }


 contarPorPrioridade (prioridade:string) {
  let a = "alta"
  let b = "media"
  let c = "baixa"

  this.tarefas.forEach(p => {
    if (p.prioridade == "alta") (a += 1)
      return (p.titulo) +(p.prioridade)
  });
  this.tarefas.forEach (p => {
    if (p.prioridade == "media") (b += 1)
      return (p.titulo) + (p.prioridade)
  });
  this.tarefas.forEach (p => {
  if (p.prioridade == "baixa") (c += 1)
     return (p.titulo) +(p.prioridade)
  });


}
}

type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade: "baixa" | "media" | "alta";
  dataCriacao: Date
}
