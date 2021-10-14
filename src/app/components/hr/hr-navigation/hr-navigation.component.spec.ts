import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNavigationComponent } from './hr-navigation.component';

describe('HrNavigationComponent', () => {
  let component: HrNavigationComponent;
  let fixture: ComponentFixture<HrNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
