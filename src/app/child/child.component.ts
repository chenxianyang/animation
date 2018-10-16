import { Component, OnInit, Input,OnChanges,SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit,OnChanges{
  @Input() option;
  @Input() name;
  @Input() friend;
  old = [];
  constructor(private ChangeDetectorRef: ChangeDetectorRef ) {}
  ngOnChanges(changes:SimpleChanges):void{
    this.option.name =this.name;
    this.option.friend =this.friend;
    this.old =this.friend;
    console.log(this.old === this.friend);
    this.option.age++;
    console.log(changes);
  }
  ngOnInit() {
  }
}
