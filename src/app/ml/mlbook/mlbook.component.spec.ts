import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbookComponent } from './mlbook.component';

describe('MlbookComponent', () => {
  let component: MlbookComponent;
  let fixture: ComponentFixture<MlbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
