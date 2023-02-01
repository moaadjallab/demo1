import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaucommandeComponent } from './nouveaucommande.component';

describe('NouveaucommandeComponent', () => {
  let component: NouveaucommandeComponent;
  let fixture: ComponentFixture<NouveaucommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveaucommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaucommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
