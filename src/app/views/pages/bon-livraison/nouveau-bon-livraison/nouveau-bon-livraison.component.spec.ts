import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBonLivraisonComponent } from './nouveau-bon-livraison.component';

describe('NouveauBonLivraisonComponent', () => {
  let component: NouveauBonLivraisonComponent;
  let fixture: ComponentFixture<NouveauBonLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauBonLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
