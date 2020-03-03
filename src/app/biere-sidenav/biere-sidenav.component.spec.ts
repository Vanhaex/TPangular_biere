import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereSidenavComponent } from './biere-sidenav.component';

describe('BiereSidenavComponent', () => {
  let component: BiereSidenavComponent;
  let fixture: ComponentFixture<BiereSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
