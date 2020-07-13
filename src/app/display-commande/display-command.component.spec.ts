import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommandComponent } from './display-command.component';

describe('DisplayCommandComponent', () => {
  let component: DisplayCommandComponent;
  let fixture: ComponentFixture<DisplayCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
