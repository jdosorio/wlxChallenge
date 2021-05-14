import { Pipe, PipeTransform } from '@angular/core';
import { EnumTechnologyItems } from 'src/app/screens/technologies/interfaces/technology.interface';
import { FilterCount } from '../../interfaces/global.interface';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: EnumTechnologyItems, searchText: string, filterCount: FilterCount): EnumTechnologyItems {
    if (!items) {
      filterCount.count = 0;
      return [];
    }
    if (!searchText) {
      filterCount.count = items.length;
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    const filteredItems = items.filter((it) => {
      return it.tech.toLocaleLowerCase().includes(searchText);
    });

    filterCount.count = filteredItems.length;
    return filteredItems;
  }

}
