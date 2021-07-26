import { Component, OnInit, EventEmitter } from '@angular/core';
import { Widget } from '../services/widget.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {
  widget: Widget = {type: '', title: '', x: 0, y: 0, width: 0, height: 0}
  private _closed= new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  public get closed(): Observable<{}> {
    return this._closed;
  }

  private close(): void {
    this._closed.emit({});
  }

}
