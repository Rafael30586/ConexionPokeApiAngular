import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightArrowButtonComponent } from './right-arrow-button.component';

describe('RightArrowButtonComponent', () => {
  let component: RightArrowButtonComponent;
  let fixture: ComponentFixture<RightArrowButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightArrowButtonComponent]
    });
    fixture = TestBed.createComponent(RightArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
