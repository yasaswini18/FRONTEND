import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UserDetails } from './components/user-details/user-details';
import { LaptopDetails } from './components/laptop-details/laptop-details';
import { CustomerList } from './components/customer-list/customer-list';
import { FormsModule } from '@angular/forms';
import {  CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LaptopDetails,FormsModule,DatePipe,CurrencyPipe,CustomerList],
  templateUrl: './app.html',
  // template : `
  // <h1>This is the content of app component</h1>
  // `,  // can write html and ts in the same file
  styleUrl: './app.css'
})
export class App {
  protected  title = '';
  start = 0;
  pageSize=2;
   user={
    id:1,
    name:"yash",
    age:21,
    phones:[123455345,145543223]
  }
  date=new Date()
  users=[
    {name:'yash',address:'vizag',age:21,gender:'female',edit:true,pic:'https://cdn.pixabay.com/photo/2019/01/18/20/08/heart-3940561__480.jpg'},
    {name:'anugya',address:'up',age:21,gender:'male',edit:true,pic:'https://cdn.pixabay.com/photo/2019/01/18/20/08/heart-3940561__480.jpg'},
    {name:'avni',address:'chandigarh',age:21,gender:'female',edit:false,pic:'https://cdn.pixabay.com/photo/2019/01/18/20/08/heart-3940561__480.jpg'}
  ]
  // changeTitle()
  // {
  //   this.title="Changed Title"
  // }
  parentAction(data:any)
  {

    console.log("Parent has received for action",data);
    for(let i=0;i<this.userDetails.length;i++)
    {
      if(this.userDetails[i].name===data.name)
      {
        this.userDetails.splice(i,1); break;
      }
    }
  }
 userDetails=[
    {name:'simpi',age:21,address:'himachal',gender:'female'},
    {name:'sahithi',age:21,address:'vizag',gender:'female'},
    {name:'sidd',age:21,address:'bihar',gender:'male'},
  ]
  laptopDetails=[
    {id:1,brand:"Hp",price:80000,img:"https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-hp-notebook-15-8-laptop-intel-core-i5-8th-image_2890220.jpg"},
    {id:2,brand:"Mac",price:120000,img:"https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"},
    {id:3,brand:"Dell",price:70000,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzctliVIhjzs1d-0NfWXtope8cvXjxpKflw&s"},
    {id:4,brand:"Lenovo",price:60000,img:"https://5.imimg.com/data5/AY/DP/MY-11673038/lenovo-laptop.png"},
    {id:5,brand:"Asus",price:50000,img:"data:image/jpeg;base64,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"},
    {id:6,brand:"JioBook",price:67000,img:"https://m.media-amazon.com/images/I/61IDcxw27+L._AC_UF1000,1000_QL80_.jpg"}
  ]
  laptops:any[]=[];
  constructor()
  {
    this.laptops = this.laptopDetails.slice(this.start, this.start + this.pageSize);
    console.log(this.start);
    
  }
  showPrevious()
  {
    // console.log("showing previous")
    if(this.start>0){
      this.start=this.start - this.pageSize;
    this.laptops=this.laptopDetails.slice(this.start,this.start+this.pageSize)
    }
  }
  showNext()
  {
    // console.log("showing next");
    
    if(this.start+this.pageSize<=this.laptopDetails.length){
      console.log(this.laptopDetails.length);
      this.start=this.start + this.pageSize;
      this.laptops=this.laptopDetails.slice(this.start,this.start + this.pageSize)
      console.log(this.start);
      
    }

    

  }
}
