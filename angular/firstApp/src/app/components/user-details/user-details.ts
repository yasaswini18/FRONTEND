// import { Component,Input, Output, EventEmitter} from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-user-details',
//   imports: [CommonModule],
//   templateUrl: './user-details.html',
//   styleUrl: './user-details.css',
// })
// export class UserDetails {
   

//   @Input() userDetails:any;
//   @Output() onupdate = new EventEmitter<any>();
//   // constructor()
//   // {
//   //   //values are not injected so default values will be shown
//   //   console.log("In constructor of user details");
//   //   console.log(this.userDetails);
//   // }
//   // ngOnInit()
//   // {
//   //   //values will be injected here
//   //    console.log("In ngOnInt of user details");
//   //   console.log(this.userDetails);

//   // }
//   isCardView=false;
//   isListView=false;

//   displayCardView() {
//      console.log("displaying card view");
//     this.isCardView=true
//     this.isListView=false
//   }
//   displayListView()
//   {
//     console.log("displaying list view");
    
//     this.isListView=true
//     this.isCardView=false
//   }
//   informParent()
//   {
//     this.onupdate.emit({this:this.userDetails})
//   }
// }
