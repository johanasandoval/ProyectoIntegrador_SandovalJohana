import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
  private educacionS: EducacionService,
  private activatedRouter: ActivatedRoute,
  private router: Router
  
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      (      data: Educacion) =>{
        this.educacion = data;
      }, (err: any) =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.educacionS.update(id, this.educacion).subscribe(
    (    data: any) => {
      this.router.navigate(['']);
    }, (err: any) =>{
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    }
  )
    
  }

}
