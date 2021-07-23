import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface Widget {
  type: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private http: HttpClient) {}

  listWidgets(path: string): Observable<Widget[]> {
    return this.http.get<Widget[]>(path);
  }

}
