import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopownerAccountComponent } from './shopowner-account.component';

describe('ShopownerAccountComponent', () => {
  let component: ShopownerAccountComponent;
  let fixture: ComponentFixture<ShopownerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopownerAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopownerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
