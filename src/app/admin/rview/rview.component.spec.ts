import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RviewComponent } from './rview.component';

describe('RviewComponent', () => {
  let component: RviewComponent;
  let fixture: ComponentFixture<RviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
