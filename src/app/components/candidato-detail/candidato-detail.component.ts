import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidato } from '../../models/candidato';
import { CandidatoService } from '../../services/candidato/candidato.service';


@Component({
  selector: 'app-candidato-detail',
  templateUrl: './candidato-detail.component.html',
  styleUrls: ['./candidato-detail.component.css']
})
export class CandidatoDetailComponent implements OnInit {

  id: number;
  candidato: Candidato;

  constructor(private route: ActivatedRoute, private candidatoService: CandidatoService) { }

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
}
