import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/app1/src/environments/environment';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss'],
})
export class View1Component implements OnInit {
  environmentVar = environment.test;
  constructor() {}

  ngOnInit(): void {}
}
