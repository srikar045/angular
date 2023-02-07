import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlupdateComponent } from './mlupdate.component';

describe('MlupdateComponent', () => {
  let component: MlupdateComponent;
  let fixture: ComponentFixture<MlupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
