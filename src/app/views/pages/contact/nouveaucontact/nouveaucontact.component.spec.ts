import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaucontactComponent } from './nouveaucontact.component';

describe('NouveaucontactComponent', () => {
  let component: NouveaucontactComponent;
  let fixture: ComponentFixture<NouveaucontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveaucontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaucontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
