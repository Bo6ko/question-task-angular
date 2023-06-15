import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCallbackComponent } from './page-callback.component';

describe('PageCallbackComponent', () => {
  let component: PageCallbackComponent;
  let fixture: ComponentFixture<PageCallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCallbackComponent]
    });
    fixture = TestBed.createComponent(PageCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
