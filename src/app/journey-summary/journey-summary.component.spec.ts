import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySummaryComponent } from './journey-summary.component';

describe('JourneySummaryComponent', () => {
  let component: JourneySummaryComponent;
  let fixture: ComponentFixture<JourneySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneySummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
