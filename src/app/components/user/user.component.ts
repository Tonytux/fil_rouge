import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export default class UserComponent {
/*  users$: Observable<any[]> = of([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  } */
}