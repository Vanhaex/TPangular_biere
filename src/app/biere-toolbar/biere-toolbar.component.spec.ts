import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereToolbarComponent } from './biere-toolbar.component';

describe('BiereToolbarComponent', () => {
  let component: BiereToolbarComponent;
  let fixture: ComponentFixture<BiereToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
