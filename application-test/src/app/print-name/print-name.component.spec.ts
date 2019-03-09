import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNameComponent } from './print-name.component';

describe('PrintNameComponent', () => {
  let component: PrintNameComponent;
  let fixture: ComponentFixture<PrintNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
