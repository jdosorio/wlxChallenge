import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { types } from 'src/app/data';
import { EnumTypes } from 'src/app/interfaces/global.interface';
import { EnumTechnologyItems } from 'src/app/screens/technologies/interfaces/technology.interface';
import { AppState } from 'src/app/store/app.reducers';
import { loadTechnologies } from '../../store/actions';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  typesTech: EnumTypes = types;
  techType = '';
  techList: EnumTechnologyItems = [];
  techListOrg: EnumTechnologyItems = [];
  searchText = '';
  filterCount = { count: 0};
  @ViewChild('selectList', { static: false }) selectList: ElementRef;
  favorito: boolean;
  iconInactve =  '../../../assets/Ic_Inactive_Start.svg';
  iconActive = '../../../assets/Ic_Active_Start.svg';
  imgIcon: string;
  keyValue: string;
  isSort = false;
  loading = false;
  error: unknown;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loadTech();
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }

  loadTech(): void{

    this.store.select('technologies').subscribe( ({ technologies, loading, error}) => {
      this.techList = technologies;
      this.techListOrg = technologies;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch( loadTechnologies() );
  }

  filterSelect(): void {
    this.techList = this.techListOrg;
    const filteredItems = this.techList.filter((it) => {
      return it.type.toLocaleLowerCase().includes(this.techType.toLocaleLowerCase());
    });
    this.techList = filteredItems;
 }

  sortList(): void{
    this.isSort = !this.isSort;
    if (this.isSort){
      this.techList = this.techList.sort((a, b) => a.tech.localeCompare(b.tech));
    }else{
      this.techList = this.techList.sort((a, b) => b.tech.localeCompare(a.tech));
    }
 }

}
