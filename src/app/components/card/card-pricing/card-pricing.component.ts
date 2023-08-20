import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent {
  @Input()
  gameType: string = 'Digital PS 4';

  @Input()
  gamePrice: string = 'R$ 129,99';
}
