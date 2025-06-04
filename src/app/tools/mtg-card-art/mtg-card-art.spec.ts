import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardArt } from './mtg-card-art';

describe('MtgCardArt', () => {
  let component: MtgCardArt;
  let fixture: ComponentFixture<MtgCardArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtgCardArt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgCardArt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
