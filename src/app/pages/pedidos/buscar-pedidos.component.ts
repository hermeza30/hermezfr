import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/estado/estado-pedido.service';
import { Categoria } from '../../models/categoria.model';
import { Estado } from 'src/app/models/estado.model';
import { DolarService } from '../../services/dolar/dolar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-pedidos',
  templateUrl: './buscar-pedidos.component.html',
  styles: [],
})
export class BuscarPedidosComponent implements OnInit {
  public pedidos: Pedido[];
  public pedidoSeleccionado: Pedido;
  public categorias: Categoria[] = [];
  public estados: Estado[];
  public fecha: Date;
  desde: number = 0;
  totalRegistros: number = 0;
  public totalacobrar:number=0;
  constructor(
    public _pedidoService: PedidosService,
    public _estadoService: EstadoPedidoService,
    public router:Router
    ) {

  }

  ngOnInit(): void {
    this.cargarPedidos();
    this.cargarCategorias();
  }
  cargarCategorias() {
    this._pedidoService.cargarCategorias().subscribe((res) => {
      this.categorias = res;
    });
    this.estados = this._estadoService.estadoPedidos();
  }
  cargarPedidos() {
    this.busqueda('estado', 1);
  }
  cambiandoBusqueda(event: any, tabla: string) {
    if (event.length <= 0) {
      this.cargarPedidos();
      return;
    }
    this.busqueda(tabla, event);
  }
  buscando() {
    if (!this.fecha) return;
    this.busqueda('fecha', this.fecha);
  }

  busqueda(tabla: string, event: any) {
    this._pedidoService
      .cargarPedidos(this.desde, tabla, event)
      .subscribe((res: any) => {
        if (res.pedido.length > 0) {
          this.totalRegistros = res.total;
          this.pedidos = res.pedido;
        } else {
          this.totalRegistros = 0;
          this.pedidos = null;
          this.pedidoSeleccionado = null;
        }
      });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarPedidos();
  }
  seleccionarPedido(p: Pedido) {
    this.totalacobrar=p.total-p.senia;
    this.pedidoSeleccionado = p;
   
  }
  eliminar(id:string){
    console.log(id);
  }
}
