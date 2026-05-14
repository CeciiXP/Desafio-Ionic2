import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonButton,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonContent,
  IonButton,
  IonItem,
  IonInput
],
})
export class HomePage {

  mensagemResultado: string = '';
  tela: string = 'menu';
  filtroPrioridade: string = 'todas';

  constructor() {}

  produtos: Produto[] = [
    { id: 5, nome: "Sabão em pó", preco: 23, estoque: 78 },
    { id: 3, nome: "Alvejante", preco: 33, estoque: 209 },
    { id: 6, nome: "Esponja de Louça", preco: 5, estoque: 124 },
    { id: 92, nome: "Margarina", preco: 14, estoque: 96 },
    { id: 55, nome: "Queijo", preco: 15, estoque: 85 }
  ];

  tarefas: Tarefa[] = [
    { id: 1, titulo: "Lavar roupa", concluida: false, prioridade: "media", dataCriacao: new Date(2026, 6, 6) },
    { id: 5, titulo: "Fazer bolo", concluida: true, prioridade: "alta", dataCriacao: new Date(2026, 4, 10) },
    { id: 8, titulo: "Concertar bicicleta", concluida: true, prioridade: "media", dataCriacao: new Date(2026, 4, 6) },
    { id: 6, titulo: "Dever de casa", concluida: false, prioridade: "media", dataCriacao: new Date(2026, 6, 6) },
    { id: 2, titulo: "Fazer currículo", concluida: false, prioridade: "alta", dataCriacao: new Date(2026, 6, 9) }
  ];

  formatarPreco(preco: number) {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  calcularTotalEstoque() {
    let total = 0;

    this.produtos.forEach(produto => {
      total += produto.preco * produto.estoque;
    });

    return total;
  }

  MostrarTotalEstoque() {
    let total = this.calcularTotalEstoque();
    this.mensagemResultado = "Total do estoque: " + this.formatarPreco(total);
  }

  TarefasConcluidas() {
    let texto = "Concluídas: ";

    this.tarefas.forEach(t => {
      if (t.concluida) {
        texto += t.titulo + ", ";
      }
    });

    this.mensagemResultado = texto;
  }

  TarefasPendentes() {
    let texto = "Pendentes: ";

    this.tarefas.forEach(t => {
      if (!t.concluida) {
        texto += t.titulo + ", ";
      }
    });

    this.mensagemResultado = texto;
  }

  filtrarPorPrioridade() {
  const ordem: any = {
    alta: 1,
    media: 2,
    baixa: 3
  };

  let lista = this.tarefas;

  if (this.filtroPrioridade === 'alta') {
    lista = this.tarefas.filter(t => t.prioridade === 'alta');
  }

  if (this.filtroPrioridade === 'media') {
    lista = this.tarefas.filter(t => t.prioridade === 'media');
  }

  if (this.filtroPrioridade === 'baixa') {
    lista = this.tarefas.filter(t => t.prioridade === 'baixa');
  }

  return lista.sort((a, b) => ordem[a.prioridade] - ordem[b.prioridade]);
}

novoNome: string = '';
novoPreco: number | null = null;
novoEstoque: number | null = null;

  adicionarProduto() {
  if (!this.novoNome || this.novoPreco == null || this.novoEstoque == null) {
    return;
  }

  const novoProduto: Produto = {
    id: this.produtos.length + 1,
    nome: this.novoNome,
    preco: this.novoPreco,
    estoque: this.novoEstoque
  };

  this.produtos.push(novoProduto);

  this.novoNome = '';
  this.novoPreco = null;
  this.novoEstoque = null;
}

alternarConcluida(tarefa: Tarefa) {
  tarefa.concluida = !tarefa.concluida;
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
  dataCriacao: Date;
}