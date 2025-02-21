import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingTestComponent } from './outstanding-test.component';

describe('OutstandingTestComponent', () => {
  let component: OutstandingTestComponent;
  let fixture: ComponentFixture<OutstandingTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutstandingTestComponent]
    });
    fixture = TestBed.createComponent(OutstandingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
