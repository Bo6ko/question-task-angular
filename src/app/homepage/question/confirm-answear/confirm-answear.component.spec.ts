import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAnswearComponent } from './confirm-answear.component';

describe('ConfirmAnswearComponent', () => {
  let component: ConfirmAnswearComponent;
  let fixture: ComponentFixture<ConfirmAnswearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmAnswearComponent]
    });
    fixture = TestBed.createComponent(ConfirmAnswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
