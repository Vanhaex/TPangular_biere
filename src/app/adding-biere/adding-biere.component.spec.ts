import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingBiereComponent } from './adding-biere.component';

describe('AddingBiereComponent', () => {
  let component: AddingBiereComponent;
  let fixture: ComponentFixture<AddingBiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingBiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
