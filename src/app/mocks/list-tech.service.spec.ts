import { of } from 'rxjs';
import { LIST_TECH_FAKE } from './list-tech.fake.spec';

export class TechListServiceFake {
  getList() {
    return of(LIST_TECH_FAKE);
  }
}
