import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnlineAboutComponent } from './tienda-online-about.component';

describe('TiendaOnlineAboutComponent', () => {
  let component: TiendaOnlineAboutComponent;
  let fixture: ComponentFixture<TiendaOnlineAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaOnlineAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnlineAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
