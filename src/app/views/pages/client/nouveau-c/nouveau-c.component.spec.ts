import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCComponent } from './nouveau-c.component';

describe('NouveauCComponent', () => {
  let component: NouveauCComponent;
  let fixture: ComponentFixture<NouveauCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
