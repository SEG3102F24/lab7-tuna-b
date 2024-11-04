import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Author, Book} from "../../books/model/book";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ServicesService} from "../service/services.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit, OnDestroy{
  selectedAuthor!: Author | null;
  books!: Book[] | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  private subscription!: Subscription;
  authorService: ServicesService = inject(ServicesService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.authorService.getAuthorByID(id).subscribe({
        next: (data: Author) => {
          this.selectedAuthor = data;
          this.books = data.books;
          console.log(data)
          console.log(this.books)
        },
        error: (_: any) => {
          this.selectedAuthor = null;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
