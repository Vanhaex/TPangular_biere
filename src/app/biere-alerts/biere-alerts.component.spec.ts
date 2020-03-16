import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereAlertsComponent } from './biere-alerts.component';

describe('BiereAlertsComponent', () => {
  let component: BiereAlertsComponent;
  let fixture: ComponentFixture<BiereAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
