import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BviewComponent } from './bview.component';

describe('BviewComponent', () => {
  let component: BviewComponent;
  let fixture: ComponentFixture<BviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
