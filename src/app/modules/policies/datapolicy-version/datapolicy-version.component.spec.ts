import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapolicyVersionComponent } from './datapolicy-version.component';

describe('DatapolicyVersionComponent', () => {
  let component: DatapolicyVersionComponent;
  let fixture: ComponentFixture<DatapolicyVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatapolicyVersionComponent]
    });
    fixture = TestBed.createComponent(DatapolicyVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
