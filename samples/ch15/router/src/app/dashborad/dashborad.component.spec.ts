import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradComponent } from './dashborad.component';

describe('DashboradComponent', () => {
  let component: DashboradComponent;
  let fixture: ComponentFixture<DashboradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
