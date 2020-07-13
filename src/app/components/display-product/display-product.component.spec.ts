import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { displayProductComponent } from './display-product.component';

describe('displayproductComponent', () => {
  let component: displayProductComponent;
  let fixture: ComponentFixture<displayProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ displayProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(displayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
