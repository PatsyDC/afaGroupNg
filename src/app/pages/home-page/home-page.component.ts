import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [

  ]
})
export class HomePageComponent   {

  contador!: FormGroup;
  contador1:number = 0;
  carousels = [
    {
      img: 'assets/img/1.1.png',
      title: 'No hay',
      subtitle: 'Terreno',
      parrafo: 'Difícil',
    },
    {
      img: 'assets/img/slider.jpeg',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat',
    },
    {
      img: 'assets/img/1.1.png',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat',
    },
  ];

};
