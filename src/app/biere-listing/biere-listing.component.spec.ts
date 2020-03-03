import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereListingComponent } from './biere-listing.component';

describe('BiereListingComponent', () => {
  let component: BiereListingComponent;
  let fixture: ComponentFixture<BiereListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
