import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';
import { TechnologiesService } from '../../services/technologies.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { FavoritesModule } from 'src/app/components/favorites/favorites.module';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import * as Rx from 'rxjs';
import { LIST_TECH_FAKE } from 'src/app/mocks/list-tech.fake.spec';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable, of } from 'rxjs';
import { TechListServiceFake } from 'src/app/mocks/list-tech.service.spec';
import { By } from '@angular/platform-browser';


describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;
  let mockList = LIST_TECH_FAKE;
  let techService:TechnologiesService;
  let authenticationService:AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        RouterTestingModule,
        HttpClientTestingModule,
        FavoritesModule
      ],
      declarations: [
        TechnologiesComponent,
        FilterPipe
      ],
      providers:[
        AuthenticationService,
        [{ provide: TechnologiesService, useClass: TechListServiceFake }],
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    techService = TestBed.inject(TechnologiesService);
    authenticationService = TestBed.inject(AuthenticationService)
    localStorage.setItem('token', 'testingToken')
    authenticationService.isAuthenticated.next(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing subscribe method is getting called', fakeAsync(() => {
    let techSpy = spyOn(techService, 'getList').and.returnValue(Rx.of(mockList));
    let subSpy = spyOn(techService.getList(), 'subscribe');
    component.ngOnInit();
    console.log(component.techList)
    tick();
    expect(techSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('should validate data listTech',fakeAsync(() => {
    expect(component.techList.length).toBeGreaterThan(0);
  }));

  it('should validate data equals to 3(FakeService)',fakeAsync(() => {
    expect(component.techList.length).toEqual(3);
  }));

  it('should favorite component exist', () => {
    const { debugElement } = fixture;
    const favorite = debugElement.query(By.css('app-favorites'));
    expect(favorite).toBeTruthy();
  });

  it('should mark favorite tech', () => {
    const { debugElement } = fixture;
    const favorite = debugElement.query(By.css('app-favorites'));


  });


});
