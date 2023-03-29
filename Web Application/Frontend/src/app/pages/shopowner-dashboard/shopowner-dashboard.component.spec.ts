import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopownerDashboardComponent } from './shopowner-dashboard.component';

describe('ShopownerDashboardComponent', () => {
  let component: ShopownerDashboardComponent;
  let fixture: ComponentFixture<ShopownerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopownerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopownerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
