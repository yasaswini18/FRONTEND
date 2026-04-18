import { Component } from '@angular/core';
import { Customer } from '../../modules/customer';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-customer-list',
  imports: [FormsModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  customers: Customer[] = [
    {id:1,name:"Yash",address:"vizag",email:"yash@gmail.com",phone:'2345678',dateOfBirth: new Date("2004-10-18"),gender:'female'},
     {id:2,name:"Anugya",address:"Up",email:"anugya@gmail.com",phone:'2345432',dateOfBirth: new Date("2004-01-21"),gender:'female'},
      {id:3,name:"Sidd",address:"bihar",email:"sid@gmail.com",phone:'5432345',dateOfBirth: new Date("2004-12-13"),gender:'male'},
       {id:4,name:"Sweta",address:"vizag",email:"sweta@gmail.com",phone:'98765434',dateOfBirth: new Date("2004-10-14"),gender:'female'},
        {id:5,name:"Sahithi",address:"vizag",email:"sahithi@gmail.com",phone:'5456744',dateOfBirth: new Date("2004-10-13"),gender:'female'},
         {id:6,name:"Simpi",address:"himachal",email:"simpi@gmail.com",phone:'88765424',dateOfBirth: new Date("2004-06-26"),gender:'female'},
          {id:7,name:"Alice",address:"Us",email:"alice@gmail.com",phone:'98765345',dateOfBirth: new Date("2004-10-18"),gender:'male'},
           {id:8,name:"Bob",address:"Us",email:"bob@gmail.com",phone:'23456543',dateOfBirth: new Date("2004-10-18"),gender:'male'},
            {id:9,name:"Ram",address:"vizag",email:"ram@gmail.com",phone:'6543245',dateOfBirth: new Date("2004-10-18"),gender:'male'},
             {id:10,name:"Sweety",address:"banglore",email:"sweety@gmail.com",phone:'8765432',dateOfBirth: new Date("2003-06-21"),gender:'female'},
             {id:11,name:"Yasaswini",address:"vizag",email:"yash@gmail.com",phone:'2345678',dateOfBirth: new Date("2004-10-18"),gender:'female'}
  ]
  displayCustomer: Customer[] =[];
  start=0;
  pageSize=3;
  constructor(){
    this.start=this.start;
  }
  previous()
  {
    console.log("previous");
     console.log(this.start);
      this.start=this.start-this.pageSize
      this.displayCustomer=this.customers.slice(this.start-this.pageSize,this.start)
  
  }
  next()
  {
    console.log("next");
    if(this.start<this.customers.length)
    {
      console.log(this.start);
      this.displayCustomer=this.customers.slice(this.start,this.start+this.pageSize)
      this.start=this.start+this.pageSize
      console.log(this.start);
    }
  }
  customer=''
  showCustomers()
  {
    console.log(this.customer);
  
    this.displayCustomer= this.customers.filter(c=>
          c.name.toLowerCase().includes(this.customer.toLowerCase())
         )
         console.log(this.displayCustomer);
         

  }
  
}
