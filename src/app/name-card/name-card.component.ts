import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cardName: string;
  @Input() name: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() address: string;

}
