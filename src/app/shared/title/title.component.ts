import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() inconCless = 'fa fa-user';

  constructor() { }

  ngOnInit() {
  }

}
