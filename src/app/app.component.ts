import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'wlxChallenge';
  showLoading:boolean;

  constructor(private spinnerService: SpinnerService, private router: Router){}

  ngOnInit(): void {
    this.spinnerService.isLoading.subscribe(show => this.showLoading = show);
  }
}
