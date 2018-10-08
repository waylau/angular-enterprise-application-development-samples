import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayFormComponent } from './form-array-form.component';

describe('FormArrayFormComponent', () => {
  let component: FormArrayFormComponent;
  let fixture: ComponentFixture<FormArrayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
