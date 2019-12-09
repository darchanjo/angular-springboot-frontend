import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CandidatoService } from '../../services/candidato/candidato.service';
import { Candidato } from '../../models/candidato';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.css']
})
export class CandidatoListComponent implements OnInit {
  cols: any[];
  candidatos: Observable<Candidato[]>;

  constructor(private candidatoService: CandidatoService,
    private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'sobrenome', header: 'Sobrenome' },
      { field: 'email', header: 'Email' },
      { field: 'action', header: '' }
    ];

    this.reloadData();
  }

  reloadData() {
    this.candidatoService.getCandidatosList()
      .subscribe(
        data => {          
            this.candidatos = data.result;
        },
        error => {
          alert(error);
        });
  }

  deleteCandidato(id: number) {
    this.candidatoService.deleteCandidato(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => {
          console.log(error)
        });
  }

  candidatoDetails(id: number) {
    this.router.navigate(['detalhe', id]);
  }

  updateCandidato(id: number) {
    this.router.navigate(['atualizar', id]);
  }
}
