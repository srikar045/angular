import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbookingComponent } from './ubooking.component';

describe('UbookingComponent', () => {
  let component: UbookingComponent;
  let fixture: ComponentFixture<UbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
