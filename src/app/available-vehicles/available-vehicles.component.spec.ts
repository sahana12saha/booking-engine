import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVehiclesComponent } from './available-vehicles.component';

describe('AvailableVehiclesComponent', () => {
  let component: AvailableVehiclesComponent;
  let fixture: ComponentFixture<AvailableVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableVehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
