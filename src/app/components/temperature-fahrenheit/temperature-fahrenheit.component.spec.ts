import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureFahrenheitComponent } from './temperature-fahrenheit.component';

describe('TemperatureFahrenheitComponent', () => {
  let component: TemperatureFahrenheitComponent;
  let fixture: ComponentFixture<TemperatureFahrenheitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureFahrenheitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureFahrenheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
