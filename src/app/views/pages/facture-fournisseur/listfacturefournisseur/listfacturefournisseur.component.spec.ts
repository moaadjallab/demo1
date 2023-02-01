import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfacturefournisseurComponent } from './listfacturefournisseur.component';

describe('ListfacturefournisseurComponent', () => {
  let component: ListfacturefournisseurComponent;
  let fixture: ComponentFixture<ListfacturefournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfacturefournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfacturefournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
