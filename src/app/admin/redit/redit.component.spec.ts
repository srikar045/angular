import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditComponent } from './redit.component';

describe('ReditComponent', () => {
  let component: ReditComponent;
  let fixture: ComponentFixture<ReditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
