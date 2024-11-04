import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet, Routes} from "@angular/router";
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})


export class AuthorComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(r => {});
  }
}
