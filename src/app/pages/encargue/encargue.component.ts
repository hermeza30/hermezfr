import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleado } from '../../models/empleado.model';
import { Categoria } from '../../models/categoria.model';
import { PedidosService } from '../../services/service.index';
import { EmpleadoService } from '../../services/service.index';
import { EncargueService } from '../../services/service.index';
import { Encargue } from '../../models/encargue.model';

@Component({
  selector: 'app-encargue',
  templateUrl: './encargue.component.html',
  styles: [
  ]
})

export class EncargueComponent implements OnInit {

  public form:FormGroup;
  public comboEmpleado:Empleado[];
  public comboCategoria:Categoria[];
  public encargues:Encargue[];
  constructor(public _categoriaService:PedidosService, public _empleadoService:EmpleadoService, public _encargueService:EncargueService) { }

  ngOnInit(): void {
    this.obtenerProducto();
    this.obtenerEmpleados();
    this.consultarEncargues();
    this.crearForm();
  }

  crearForm(){
    this.form=new FormGroup({
      empleado:new FormControl('',Validators.required),
      producto: new FormControl('',Validators.required),
      codigo:new FormControl('',Validators.required),
      cantidad:new FormControl(0,Validators.required),
      pago:new FormControl(0,Validators.required)
    });
  }

  getNombre(){
    return this.form.get('empleado') as FormControl;
  }
  getPago(){
    return this.form.get('pago') as FormControl;
  }
  getCantidad(){
    return this.form.get('cantidad') as FormControl;
  }
  registrar(){
    if(this.validando()){
        this._encargueService.registrarEncargue(this.prepararEncargue()).subscribe(res=>{
        });
    }
  }
  consultarEncargues(){
    this._encargueService.consultarEncargue().subscribe((res)=>{
      console.log(res);
      this.encargues=res;
    });
  }
  validando():boolean{
    if(this.form.invalid){
      swal("Registrar Encargue", "Verifique los valores ingresados." ,"warning");
      return false;
    }
    if(this.getPago().value<0){
     swal("Registrar Encargue", "El pago no puede ser menor a cero." ,"warning");
     return false;
    }
    if(this.getCantidad().value<0){
      swal("Registrar Encargue", "La cantidad no puede ser menor a cero." ,"warning");
      return false;
     }
     return true;
  }

  obtenerEmpleados(){
  this._empleadoService.obtenerEmpleado().subscribe(res=>{this.comboEmpleado=res;});
  }
  
  obtenerProducto(){
    this._categoriaService.cargarCategorias().subscribe(res=>{this.comboCategoria=res});      
  }
  prepararEncargue():Encargue{

    let encargue=new Encargue(
      null,
      new Empleado(this.form.value.empleado,null,null,null),
      new Categoria(this.form.value.producto,null,null,null,null),
      null,
      new Date(),
      this.form.value.codigo,
      this.form.value.cantidad,
      this.form.value.pago
    );
    return encargue;
  }
}
