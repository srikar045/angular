import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlmyComponent } from './mlmy.component';

describe('MlmyComponent', () => {
  let component: MlmyComponent;
  let fixture: ComponentFixture<MlmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlmyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
