import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductMainComponent } from './add-product-main.component';

describe('AddProductMainComponent', () => {
  let component: AddProductMainComponent;
  let fixture: ComponentFixture<AddProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
