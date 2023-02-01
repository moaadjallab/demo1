import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NclientComponent } from './nclient.component';

describe('NclientComponent', () => {
  let component: NclientComponent;
  let fixture: ComponentFixture<NclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
