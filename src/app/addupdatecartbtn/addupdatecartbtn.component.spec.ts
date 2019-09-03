import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatecartbtnComponent } from './addupdatecartbtn.component';

describe('AddupdatecartbtnComponent', () => {
  let component: AddupdatecartbtnComponent;
  let fixture: ComponentFixture<AddupdatecartbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdatecartbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatecartbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
