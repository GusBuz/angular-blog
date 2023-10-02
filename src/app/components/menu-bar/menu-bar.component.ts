import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  menuItems:string[] = [
    "Engineering",
    "Product",
    "Security",
    "Open Source",
    "Enterprise",
    "Policy",
    "Education",
    "Community",
    "Company"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
