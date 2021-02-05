import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CorreioserviceService } from 'src/app/service/correioservice.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {


  private usuario: Usuario;
  //incorporação da classe usuario em dadospage

  usuarioForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private correioservice: CorreioserviceService, ) {

  }

  ngOnInit() {

    this.usuarioForm = this.FormBuilder.group({
      nome: ['',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150),
        Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ],
      dataNasc: ['',
        Validators.required
      ],
      email: ['',
        Validators.required,
        Validators.email,
      ],
      logradouro: ['',
        Validators.required,
        Validators.email,
      ],
      telefone: ['',
        Validators.required
      ],
      cep: ['',
        Validators.required
      ],
      bairro: ['',
        Validators.required
      ],
      cidade: ['',
        Validators.required
      ],
      estado: ['',
        Validators.required
      ],
      descricao: ['',
      Validators.required
    ]
    });
  }
}