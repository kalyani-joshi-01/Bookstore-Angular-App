import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: number
  book!: Book
  constructor(private route: ActivatedRoute, private service: BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.book = new Book();
    this.service.getBookById(this.id).subscribe( data => {
      this.book = data;
    });
  }

}
