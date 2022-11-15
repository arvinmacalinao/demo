import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {

  id: string;
  ids: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  Employees = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    }
  ];

  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    if(this.id === '1'){
      this.name = this.Employees[0].name;
      this.username = this.Employees[0].username;
      this.email = this.Employees[0].email;
      this.phone = this.Employees[0].phone;
    }
    else if(this.id === '2'){
      this.name = this.Employees[0].name;
      this.username = this.Employees[0].username;
      this.email = this.Employees[0].email;
      this.phone = this.Employees[0].phone;
    }
    else{
      this.name = this.Employees[0].name;
      this.username = this.Employees[0].username;
      this.email = this.Employees[0].email;
      this.phone = this.Employees[0].phone;
    }
  }

}
