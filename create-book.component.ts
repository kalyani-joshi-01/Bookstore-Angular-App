import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  

  book:Book=new Book();

  constructor(private service:BookService,private router:Router) { }

  ngOnInit(): void {
  }

  saveBook(){
    this.service.createBook(this.book).subscribe(data=>{
      this.gotoBookList();
    })
  }

  gotoBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
   
    this.saveBook();
    alert('Form Submitted succesfully!!!');
  }
}
