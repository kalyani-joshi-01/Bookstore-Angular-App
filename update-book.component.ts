import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id!: number;
  book: Book=new Book();
  constructor(private service:BookService,private route:ActivatedRoute,private router:Router) { }



  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getBookById(this.id).subscribe(data=>{
      this.book=data;
    });
  }

  onSubmit(){
    this.service.updateBook(this.id,this.book).subscribe(data=>{
      this.gotoBookList();
    })
  }

  gotoBookList(){
    this.router.navigate(['/books']);
  }

}
