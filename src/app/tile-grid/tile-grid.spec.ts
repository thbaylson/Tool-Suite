import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileGrid } from './tile-grid';

describe('TileGrid', () => {
  let component: TileGrid;
  let fixture: ComponentFixture<TileGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TileGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
