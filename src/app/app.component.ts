import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, AfterViewInit{

  title = 'wlxChallenge';
  showLoading:boolean;

  constructor(private spinnerService: SpinnerService, private router: Router){}

  ngOnInit(): void {
    this.spinnerService.isLoading.subscribe(show => this.showLoading = show);
  }

  ngAfterViewInit(): void {
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
              this.spinnerService.showLoading(true);
            }
            else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
                ) {
                  this.spinnerService.showLoading(false);
            }
        });
  }
}
