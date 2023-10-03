import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  image:string = "";
  title:string = "";
  description:string = "";
  id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0];

    this.image = result.image;
    this.title = result.title;
    this.description = result.completeDescription;
  }
}
