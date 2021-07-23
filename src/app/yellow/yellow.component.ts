import { Component, OnInit } from '@angular/core';
import { Widget } from '../services/widget.service';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.scss']
})
export class YellowComponent implements OnInit {
  widget: Widget = {type: '', title: '', x: 0, y: 0, width: 0, height: 0}

  constructor() { }

  ngOnInit(): void {
  }

}
