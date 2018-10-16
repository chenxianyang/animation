import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css'],
})
export class CoComponent implements OnInit{

  constructor( ) {}
  option = {
    name: 'lili',
    age:10,
    friend: []
  };
  friend = [];
  name = 'yaya';
  ngOnInit() {
  }
  onclick(){
    this.option.age = 16;
    this.friend =[{name:'anny',age: 12}];
  }
  onclick1(){
    this.friend =[{name: 'anan',age: 13}]
  }
}
