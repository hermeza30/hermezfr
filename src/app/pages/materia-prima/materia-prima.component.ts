import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { MateriaPrima } from '../../models/materiaprima.model';
import { Compra } from '../../models/compra.model';
import { CompraService } from '../../services/service.index';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styles: [],
})
export class MateriaPrimaComponent implements OnInit {
  public listaCompra: Compra[];
  public compra: Compra;
  public form: FormGroup;
  constructor(public _compraService:CompraService) {}

  ngOnInit(): void {
    this.crearForm();
    this.cargarCompras();
  }
  crearForm() {
    this.form = new FormGroup({
      empresa: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required),
      item: new FormArray([]),
    });
  }

  registrar() {
    if (this.form.invalid) {
      swal(
        'Registrar compra',
        'Debe ingresar valores correspondientes',
        'warning'
      );
      return;
    }
    this.agregarItems();
    this._compraService.registrarCompra(this.compra).subscribe(res=>{
        this.listaCompra.push(res);
    })
  }
  registrarItem() {
    this.getItem().push(this.crearItem());
  }
  crearItem(): FormGroup {
    return new FormGroup({
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
    });
  }
  getItem() {
    return this.form.get('item') as FormArray;
  }
  agregarItems() {
    this.compra = new Compra(
      this.form.value.empresa,
      this.form.value.total,
      []
    );
    for (const it of this.getItem().value) {
      let matPrima = new MateriaPrima(it.precio, it.descripcion);
      this.compra.materiaPrima.push(matPrima);

    }
  }
  eliminarItem(i) {
    this.getItem().removeAt(i);
  }
  cargarCompras(){
    this._compraService.obtenerCompras().subscribe(res=>{this.listaCompra=res});
  }
}
