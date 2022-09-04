import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/models/field';
import { FieldService } from 'src/app/services/field.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  fields: any = [];

  constructor(private _fieldService: FieldService, private router: Router) { }

  ngOnInit() {
    this.getFields();
  }

  getFields() {
    this.fields = [
      {imageURL:"../../../assets/img/loc1.jpeg",
      title: "Saloon 1",
      priceHour: "12",
      location: "Vijaynagra"},
      {imageURL:"../../../assets/img/loc2.jpg",
      title: "Saloon 2",
      priceHour: "121",
      location: "WhiteField"},
      {imageURL:"../../../assets/img/loc3.jpg",
      title: "Saloon 3",
      priceHour: "121",
      location: "Mejastic"},
      {imageURL:"../../../assets/img/loc4.jpeg",
      title: "Saloon 4",
      priceHour: "121",
      location: "Jaynagra"}
    ];
    // this._fieldService.getFields().subscribe(
    //   (fields: Field[]) => {
    //     this.fields = fields;
    //   })
  }

  redirectToAngularCalendar(field: Field) {
    localStorage.setItem('field', JSON.stringify(field));
    this.router.navigateByUrl('/field/' + field.pathURL);
  }

}
