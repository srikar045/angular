import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddComponent } from './radd.component';

describe('RaddComponent', () => {
  let component: RaddComponent;
  let fixture: ComponentFixture<RaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
