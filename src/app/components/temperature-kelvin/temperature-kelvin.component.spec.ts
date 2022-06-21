import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureKelvinComponent } from './temperature-kelvin.component';

describe('TemperatureKelvinComponent', () => {
  let component: TemperatureKelvinComponent;
  let fixture: ComponentFixture<TemperatureKelvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureKelvinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureKelvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
