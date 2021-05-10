import { Pipe, PipeTransform } from '@angular/core';
import { EnumTechnologyItems } from 'src/app/screens/technologies/interfaces/technology.interface';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string, filterCount:any): any {
    if (!items) {
      filterCount.count = items.length;
      return [];
    }
    if (!searchText) {
      filterCount.count = items.length;
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    let filteredItems = items.filter((it: { tech: string; }) => {
      return it.tech.toLocaleLowerCase().includes(searchText);
    });

    filterCount.count = filteredItems.length;
    return filteredItems;
  }

}
