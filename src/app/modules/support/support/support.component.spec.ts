import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplortComponent } from './support.component';

describe('SupplortComponent', () => {
  let component: SupplortComponent;
  let fixture: ComponentFixture<SupplortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplortComponent]
    });
    fixture = TestBed.createComponent(SupplortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
