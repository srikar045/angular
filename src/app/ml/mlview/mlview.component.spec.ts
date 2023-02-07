import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlviewComponent } from './mlview.component';

describe('MlviewComponent', () => {
  let component: MlviewComponent;
  let fixture: ComponentFixture<MlviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
