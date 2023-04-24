import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-errors-helper',
  templateUrl: './errors-helper.component.html',
  styleUrls: ['./errors-helper.component.scss']
})
export class ErrorsHelperComponent implements OnInit {

  @Input()
  formErrors: any;

  constructor() { }

  ngOnInit(): void {
  }

}
