import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavDataService } from 'src/app/services/navdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {

  @ViewChild('stickyMenu')
  menuElement: ElementRef<HTMLDivElement>;
  isAuthenticated = false ;
  countFavorites = 0;
  stickyClass = false;
  menuPosition: number;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private navData: NavDataService
  ) { }

  ngOnInit(): void {
    this.authenticationService.isAuthenticated.subscribe( data => {
      if (data){
        this.isAuthenticated = data;
      }
    });
    this.navData.currentData.subscribe( counterVal => {
      this.countFavorites = counterVal;
    });
  }

  ngAfterViewInit(): void{
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(): void{
    const windowScroll = window.pageYOffset;
    console.log(windowScroll, this.menuPosition);
    this.stickyClass = (windowScroll > this.menuPosition) ? true : false;
  }

  scroll(sectionId: string): void{
    this.router.navigateByUrl('/').then(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }).catch(err => console.log(err));

  }

  logout(): void{
    this.authenticationService.isAuthenticated.next(false);
    this.isAuthenticated = false;
    localStorage.clear();
    this.navData.updateCounterFav();
    void this.router.navigateByUrl('/');
  }

}
