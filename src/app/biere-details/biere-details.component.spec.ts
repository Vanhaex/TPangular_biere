import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereDetailsComponent } from './biere-details.component';

describe('BiereDetailsComponent', () => {
  let component: BiereDetailsComponent;
  let fixture: ComponentFixture<BiereDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
