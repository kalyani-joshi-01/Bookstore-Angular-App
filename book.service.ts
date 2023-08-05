import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public baseURL = "http://localhost:8080/api/v1/books";

  // added just for validation
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseURL}`);
  }


  
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL, book, this.httpOptions)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError('An error occurred while creating the book.');
        })
      );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseURL}/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id: number): Observable<Object> {
     return this.http.delete(`${this.baseURL}/${id}`) 
    }
}
