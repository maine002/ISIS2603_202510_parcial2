import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatosService } from '../candidatos.service';

@Component({
  selector: 'app-candidatos-detail',
  templateUrl: './candidatos-detail.component.html'
})
export class CandidatosDetailComponent implements OnInit {

  candidato: any;

  constructor(
    private route: ActivatedRoute,
    private candidatosService: CandidatosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.candidatosService.getCandidatoDetalle(id).subscribe(data => {
      this.candidato = data;
    });
  }

  volver(): void {
    this.router.navigate(['/candidatos']);
  }
}
