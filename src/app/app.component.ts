import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
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

let produtos: Produto [] = [
  {id:5, nome:"Sabão em pó", preco: 23, estoque:78},
  {id:3, nome:"Alvejante", preco: 33, estoque:209},
  {id:6, nome:"Esponja de Louça", preco: 5, estoque:124},
  {id:92, nome:"Margarina", preco: 14, estoque:96},
  {id:55, nome:"Queijo", preco: 15, estoque:85}
]

let tarefas: Tarefa [] = [
  {id:1, titulo:"Lavar roupa", concluida:false, prioridade:"media", dataCriacao: new Date(2026, 6, 6)},
  {id:5, titulo:"Fazer bolo", concluida:true, prioridade:"alta", dataCriacao: new Date(2026, 4, 10)},
  {id:8, titulo:"Concertar bicicleta", concluida:true, prioridade:"media", dataCriacao: new Date(2026, 4, 6)},
  {id:6, titulo:"Dever de casa", concluida:false, prioridade:"media", dataCriacao: new Date(2026, 6, 6)},
  {id:2, titulo:"Fazer currículo", concluida:false, prioridade:"alta", dataCriacao: new Date(2026, 6, 9)}
]

function formatarPreco(preco:number) {
  return preco.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL',
  });
}

function calcularEstoque(preco:number, estoque:number) {
  let total = (preco * estoque);
  return {total}
}

function filtrarTarefas(id:number)