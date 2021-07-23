import { Component, OnInit } from '@angular/core';
import { Widget } from '../services/widget.service';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {
  widget: Widget = {type: '', title: '', x: 0, y: 0, width: 0, height: 0}

  constructor() { }

  ngOnInit(): void {
  }

}
