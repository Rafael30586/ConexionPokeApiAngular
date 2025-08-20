import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftArrowButtonComponent } from './left-arrow-button.component';

describe('LeftArrowButtonComponent', () => {
  let component: LeftArrowButtonComponent;
  let fixture: ComponentFixture<LeftArrowButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftArrowButtonComponent]
    });
    fixture = TestBed.createComponent(LeftArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
