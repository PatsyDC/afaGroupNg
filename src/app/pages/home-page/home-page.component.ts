import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {
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

  @ViewChildren('num') valueDisplays?: QueryList<ElementRef>;
  interval = 4000;

  ngAfterViewInit() {
    this.valueDisplays?.forEach((valueDisplayRef) => {
      let valueDisplay = valueDisplayRef.nativeElement;
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = Math.floor(this.interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }

};
