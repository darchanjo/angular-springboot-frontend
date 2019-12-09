import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from '../../services/candidato/candidato.service';
import { Candidato } from '../../models/candidato';

@Component({
  selector: 'app-candidato-create',
  templateUrl: './candidato-create.component.html',
  styleUrls: ['./candidato-create.component.css']
})
export class CandidatoCreateComponent implements OnInit {

  candidato = new Candidato();
  submitted = false;

  constructor(private candidatoService: CandidatoService,
    private router: Router) { }

  ngOnInit() {
  }

  newCandidato(): void {
    this.submitted = false;
    this.candidato = new Candidato();
  }

  save() {
    this.candidato.id = 0;
    this.candidatoService.createCandidato(this.candidato)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['home']);
        }, 
        error => {
          alert(error);
        });

    this.candidato = new Candidato();    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
