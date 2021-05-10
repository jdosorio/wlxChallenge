import { Component, OnInit, Input } from '@angular/core';
import { NavDataService } from 'src/app/services/navdata.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() key:string = '';
  imgIcon:string;
  defaultValue:string = '[]';
  isFavorite:boolean = false;
  iconActive = '../../../assets/Ic_Active_Star.svg';
  iconInactive = '../../../assets/Ic_Inactive_Star.svg';

  constructor(
    private navData:NavDataService) {}

  ngOnInit(): void {
    var favorites = JSON.parse(localStorage.getItem('favorites') || this.defaultValue);
    const positionFav = this.validateFavorite(this.key, favorites);
    this.imgIcon = (positionFav > -1) ? this.iconActive : this.iconInactive;
  }

  public toggleFavorite(){
    var favorites = JSON.parse(localStorage.getItem('favorites') || this.defaultValue);
    const positionFav = this.validateFavorite(this.key, favorites);

    if (positionFav > -1) {
      favorites.splice(positionFav, 1)
      this.imgIcon = this.iconInactive;
    } else {
      favorites.push(this.key)
      this.imgIcon = this.iconActive;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    this.navData.updateCounterFav();
  }

  private validateFavorite(keyFavorite:string, favorites:string){
    const positionFav = favorites.indexOf(keyFavorite);
    return positionFav;
  }
}
