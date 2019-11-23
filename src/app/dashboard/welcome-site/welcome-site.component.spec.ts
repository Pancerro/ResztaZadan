import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSiteComponent } from './welcome-site.component';

describe('WelcomeSiteComponent', () => {
  let component: WelcomeSiteComponent;
  let fixture: ComponentFixture<WelcomeSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
