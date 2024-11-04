import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Author} from "../../books/model/book";
import {HttpClient} from "@angular/common/http";


const Url = 'http://localhost:8080/books-api/';
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private httpClient: HttpClient) { }
  getAuthorByID(id: string): Observable<Author> {
    return this.httpClient.get<Author>(Url + 'authors/' + id);
  }
}
