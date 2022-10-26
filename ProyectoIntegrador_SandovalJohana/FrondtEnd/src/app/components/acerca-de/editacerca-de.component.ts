import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { persona } from "src/app/model/persona.model";
import { ImageService } from "src/app/service/image.service";
import { PersonaService } from "src/app/service/persona.service";

@Component({
  selector: 'app-editacerca-de',
  templateUrl: './editacerca-de.component.html',
  styleUrls: ['./editacerca-de.component.css']
})
export class EditacercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (      data: persona) =>{
        this.persona = data;
      }, (err: any) =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      (    data: any) => {
        this.router.navigate(['']);
      }, (err: any) =>{
        alert("Error al modificar ");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
