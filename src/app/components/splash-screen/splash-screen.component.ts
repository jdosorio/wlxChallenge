import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class SplashScreenComponent implements OnInit {

  windowWidth: string;
  showSplash: boolean = true;
  state: string = 'default';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';

      setTimeout( () => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }

  ngAfterViewInit(){
    this.state = (this.state === 'default') ? 'rotated' : 'default';
  }

}