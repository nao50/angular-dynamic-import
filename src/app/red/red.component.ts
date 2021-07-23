import { Component, OnInit } from '@angular/core';
import { Widget } from '../services/widget.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  widget: Widget = {type: '', title: '', x: 0, y: 0, width: 0, height: 0}

  constructor() { }

  ngOnInit(): void {
  }

}
