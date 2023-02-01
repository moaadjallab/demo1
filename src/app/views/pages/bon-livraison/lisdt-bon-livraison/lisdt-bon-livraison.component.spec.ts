import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisdtBonLivraisonComponent } from './lisdt-bon-livraison.component';

describe('LisdtBonLivraisonComponent', () => {
  let component: LisdtBonLivraisonComponent;
  let fixture: ComponentFixture<LisdtBonLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisdtBonLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisdtBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
