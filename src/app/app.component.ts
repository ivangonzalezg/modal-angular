import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./components/modal/modal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public Name: string = "Movie";
  public name: string = "movie";
  public list: Array<object> = [
    {
      name: "A star is born",
      image:
        "https://mirandoradio.files.wordpress.com/2018/10/mv5bmje3mdq0mta3m15bml5banbnxkftztgwmdmwndy2ntm-_v1_.jpg?w=1382"
    },
    {
      name: "Taken",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Taken_film_poster.jpg/220px-Taken_film_poster.jpg"
    },
    {
      name: "Star wars",
      image: "http://es.web.img3.acsta.net/pictures/17/10/10/09/18/3077483.jpg"
    }
  ];

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(name, image) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.image = image;
  }
}
