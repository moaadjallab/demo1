import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaufacturefournisseurComponent } from './nouveaufacturefournisseur.component';

describe('NouveaufacturefournisseurComponent', () => {
  let component: NouveaufacturefournisseurComponent;
  let fixture: ComponentFixture<NouveaufacturefournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveaufacturefournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaufacturefournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
