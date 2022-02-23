import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cardMetadataList: any = [
    { title: 'Hello', likeCount: 0 },
    { title: 'Hola', likeCount: 0 },
    { title: 'Bonjour', likeCount: 0 },
    { title: 'Salve', likeCount: 0 },
    { title: 'Guten Tag', likeCount: 0 },
    { title: 'Konnichiwa', likeCount: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public incrementLikeCount(cardMetadata: any): void {
    cardMetadata.likeCount++;
  }
}
