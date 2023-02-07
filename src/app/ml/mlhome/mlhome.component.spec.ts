import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlhomeComponent } from './mlhome.component';

describe('MlhomeComponent', () => {
  let component: MlhomeComponent;
  let fixture: ComponentFixture<MlhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
