import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavDataService } from 'src/app/services/navdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('stickyMenu')
  menuElement: ElementRef;
  isAuthenticated:boolean = false;
  countFavorites:number = 0;
  stickyClass:boolean = false;
  menuPosition: any;

  constructor(private authenticationService:AuthenticationService, private router:Router, private navData:NavDataService) { }

  ngOnInit(): void {
    this.authenticationService.isAuthenticated.subscribe( data => {
      if(data){
        this.isAuthenticated = data;
      }
    });
    this.navData.currentData.subscribe(counterVal => this.countFavorites = counterVal);
  }

  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    console.log(windowScroll, this.menuPosition);
    this.stickyClass = (windowScroll > this.menuPosition) ? true : false;
  }

  scroll(sectionId:string){
    this.router.navigateByUrl('/').then(() => {
      let element = document.getElementById(sectionId);
      element?.scrollIntoView({behavior: 'smooth', block: 'center'});
    });

  }

  logout(){
    this.authenticationService.isAuthenticated.next(false);
    this.isAuthenticated = false;
    localStorage.clear();
    this.navData.updateCounterFav();
    this.router.navigateByUrl('/');
  }

}
