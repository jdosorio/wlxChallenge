import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit{

  language: string;
  typeButton: string;

  constructor( private translate: TranslateService){}

  ngOnInit(): void {
    this.typeButton = (localStorage.getItem('language') === 'es') ? 'Ingles' : 'Spanish';
  }

  languageChange(): void{
    this.language = localStorage.getItem('language') || '';
    if (this.language === 'es'){
      this.setLanguage('en');
    }else{
      this.setLanguage('es');
    }
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.typeButton = (language === 'es') ? 'Ingles' : 'Spanish';
  }

}
