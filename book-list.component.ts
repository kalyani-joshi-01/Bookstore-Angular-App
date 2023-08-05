import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]=[];
  constructor(public service:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.service.getBookList().subscribe(data=>{
      this.books=data;
    })
  }

  bookDetails(id: number){
    this.router.navigate(['book-details', id]);
  }

  updateBook(id:number){
    this.router.navigate(['update-book',id]);
  }

  deleteBook(id:number){
    this.service.deleteBook(id).subscribe(data=>{
      this.getBooks();
    })
  }

}
