import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbookingComponent } from './mlbooking.component';

describe('MlbookingComponent', () => {
  let component: MlbookingComponent;
  let fixture: ComponentFixture<MlbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
