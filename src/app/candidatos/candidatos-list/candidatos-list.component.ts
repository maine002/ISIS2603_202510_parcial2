import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css'],
})
export class CandidatosListComponent implements OnInit {
  candidatos: any[] = [];
  papa: any;
  candidatoSeleccionado: any;

  constructor(private candidatosService: CandidatosService, private router: Router) {}

  ngOnInit(): void {
    this.candidatosService.getCandidatos().subscribe(data => {
      this.candidatos = data;
      const randomIndex = Math.floor(Math.random() * data.length);
      this.papa = data[randomIndex];
    });
  }

  seleccionarCandidato(candidato: any): void {
    this.candidatoSeleccionado = candidato;
  }

  verDetalle(id: number): void {
    this.router.navigate(['/candidatos', id]);
  }
}

