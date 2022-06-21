import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureInputComponent } from './temperature-input.component';

describe('TemperatureInputComponent', () => {
  let component: TemperatureInputComponent;
  let fixture: ComponentFixture<TemperatureInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
