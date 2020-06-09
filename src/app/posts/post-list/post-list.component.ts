import { Component, Input } from '@angular/core';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {

  // posts = [
  //   {title: "First Post", content: "This is the first post\'s component"},
  //   {title: "Second Post", content: "This is the second post\'s component"},
  //   {title: "Third Post", content: "This is the third post\'s component"},
  //   {title: "Fourth Post", content: "This is the fourth post\'s component"},
  //   {title: "Fifth Post", content: "This is the fifth post\'s component"},
  // ]

  @Input() posts = []
}
