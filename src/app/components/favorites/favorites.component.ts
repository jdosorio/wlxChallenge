import { Component, OnInit, Input } from '@angular/core';
import { NavDataService } from 'src/app/services/navdata.service';
import { favoritesObject } from '../../helpers/classes/utils';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() key = '';
  imgIcon: string;
  defaultValue = '[]';
  isFavorite = false;
  iconActive = '../../../assets/Ic_Active_Star.svg';
  iconInactive = '../../../assets/Ic_Inactive_Star.svg';

  constructor(
    private navData: NavDataService
  ) {}

  ngOnInit(): void {
    const favorites = favoritesObject();
    const positionFav = this.validateFavorite(this.key, favorites);
    this.imgIcon = (positionFav > -1) ? this.iconActive : this.iconInactive;
  }

  public toggleFavorite(): void{
    const favorites = favoritesObject();
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

  private validateFavorite(keyFavorite: string, favorites: string[]): number{
    const positionFav = favorites.indexOf(keyFavorite);
    return positionFav;
  }
}
