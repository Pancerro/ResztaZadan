import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardstwoComponent } from './dashboardstwo.component';

describe('DashboardstwoComponent', () => {
  let component: DashboardstwoComponent;
  let fixture: ComponentFixture<DashboardstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
