import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardstatsComponent } from './dashboardstats.component';

describe('DashboardstatsComponent', () => {
  let component: DashboardstatsComponent;
  let fixture: ComponentFixture<DashboardstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
