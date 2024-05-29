import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
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
      img: 'assets/img/slider1.png',
      title: 'NO HAY',
      subtitle: 'TERRENO',
      parrafo: 'DIFICIL',
    },
    {
      img: 'assets/img/slider2.jpg',
      title: 'NO HAY',
      subtitle: 'TERRENO',
      parrafo: 'DIFICIL',
    },
    {
      img: 'assets/img/slider3.png',
      title: 'NO HAY',
      subtitle: 'TERRENO',
      parrafo: 'DIFICIL',
    },
  ];

};
