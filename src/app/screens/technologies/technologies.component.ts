import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { types } from 'src/app/data';
import { EnumTechnologyItems } from 'src/app/screens/technologies/interfaces/technology.interface';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  typesTech:any = types;
  techType:string = '';
  techList:EnumTechnologyItems = [];
  techListOrg:EnumTechnologyItems = [];
  searchText:any = '';
  filterCount = { count: 0};
  @ViewChild('selectList', { static: false }) selectList: ElementRef;
  favorito:boolean;
  iconInactve =  '../../../assets/Ic_Inactive_Start.svg';
  iconActive = '../../../assets/Ic_Active_Start.svg';
  imgIcon:string;
  keyValue:string;
  isSort:boolean = false;

  constructor(
    private techService:TechnologiesService
  ) { }

  ngOnInit(): void {
    this.loadTech();
    if(!localStorage.getItem('favorites'))
      localStorage.setItem('favorites',JSON.stringify([]));
  }

  loadTech(){
    this.techService.getList().subscribe(result => {
      this.techList = result;
      this.techListOrg = result;
    })
  }

  filterSelect(){
    this.techList = this.techListOrg;
    let filteredItems = this.techList.filter((it:any) => {
      return it.type.toLocaleLowerCase().includes(this.techType.toLocaleLowerCase());
    });
    this.techList = filteredItems;
 }

  sortList(){
    this.isSort = !this.isSort;
    if(this.isSort){
      this.techList = this.techList.sort((a,b) => a.tech.localeCompare(b.tech));
    }else{
      this.techList = this.techList.sort((a,b) => b.tech.localeCompare(a.tech));
    }
 }

}
