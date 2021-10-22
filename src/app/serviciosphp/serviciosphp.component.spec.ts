import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosphpComponent } from './serviciosphp.component';

describe('ServiciosphpComponent', () => {
  let component: ServiciosphpComponent;
  let fixture: ComponentFixture<ServiciosphpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosphpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
