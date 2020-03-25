import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente'
import {ClienteService} from './cliente.service'
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente()
  private titulo:string = "Crear Cliente"

  constructor(private clienteService: ClienteService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(json => {
        this.router.navigate(['/clientes'])
        Swal.fire(
          'Nuevo cliente',
          `${json.mensaje}: Cliente ${json.cliente.nombre}`,
          'success'
        )
      }
      );
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe( json => {
      this.router.navigate(['/clientes'])
      Swal.fire(
        'Cliente Actualizado',
        `${json.mensaje}: Cliente ${json.cliente.nombre}`,
        'success'
      )
    }
    )
  }

}
