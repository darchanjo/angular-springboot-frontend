import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../../services/candidato/candidato.service';
import { Candidato } from '../../models/candidato';

@Component({
  selector: 'app-candidato-update',
  templateUrl: './candidato-update.component.html',
  styleUrls: ['./candidato-update.component.css']
})
export class CandidatoUpdateComponent implements OnInit {

  id: number;
  candidato: Candidato;

  constructor(private route: ActivatedRoute, private router: Router,
    private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.candidato = new Candidato();

    this.id = this.route.snapshot.params['id'];

    this.candidatoService.getCandidato(this.id)
      .subscribe(
        data => {
          this.candidato = data;
        },
        error => {
          alert(error);
        });
  }

  updateCandidato() {
    this.candidatoService.updateCandidato(this.id, this.candidato)
      .subscribe(
        data => {
          this.router.navigate(['home']);
        }, 
        error => {
          console.log(error);
        });
    this.candidato = new Candidato();    
  }

  onSubmit() {
    this.updateCandidato();
  }
}
