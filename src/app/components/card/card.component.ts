import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  gameCover: string = '';

  @Input()
  gameAltCover: string = 'título do game';

  @Input()
  gameSrcSetCover: string = 'descritivo detalhado do game';

  @Input()
  gameLabel: string = '';

  @Input()
  gameType: string = '';

  @Input()
  gamePrice: string = '';
}
