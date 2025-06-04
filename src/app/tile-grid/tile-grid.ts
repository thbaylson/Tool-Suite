import { Component } from '@angular/core';

@Component({
  selector: 'app-tile-grid',
  standalone: false,
  templateUrl: './tile-grid.html',
  styleUrl: './tile-grid.scss'
})
export class TileGrid {
  tiles = [
    { title: 'Tool Manager', desc: 'Create, manage, or delete tools.', route: '/' },
    { title: 'MTG Card Art for TTS', desc: 'Manage the image displayed for Magic: The Gathering cards used in Tabletop Simulator.', route: '/tools/first' },
    { title: 'Dummy Tool Data', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien eget tellus molestie luctus a eget lectus. Ut erat ante, pharetra eu leo ut, dapibus mollis risus.', route: '/' },
    { title: 'Dummy Tool Data', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien eget tellus molestie luctus a eget lectus. Ut erat ante, pharetra eu leo ut, dapibus mollis risus.', route: '/' },
    { title: 'Dummy Tool Data', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien eget tellus molestie luctus a eget lectus. Ut erat ante, pharetra eu leo ut, dapibus mollis risus.', route: '/' },
    { title: 'Dummy Tool Data', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien eget tellus molestie luctus a eget lectus. Ut erat ante, pharetra eu leo ut, dapibus mollis risus.', route: '/' },
    { title: 'Dummy Tool Data', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien eget tellus molestie luctus a eget lectus. Ut erat ante, pharetra eu leo ut, dapibus mollis risus.', route: '/' },
  ];

  gridCols = 4;
  private resizeSub?: () => void;

  ngOnInit(): void {
    const calcCols = () => {
      if (window.innerWidth < 600) {
        this.gridCols = 1;
      }
      else if (window.innerWidth < 960) {
        this.gridCols = 2;
      } else if (window.innerWidth < 1280) {
        this.gridCols = 3;
      } else {
        this.gridCols = 4;
      }
    }

    calcCols();
    window.addEventListener('resize', calcCols);
    this.resizeSub = () => window.removeEventListener('resize', calcCols);
  }

  ngOnDestroy(): void {
    this.resizeSub?.();
  }
}
