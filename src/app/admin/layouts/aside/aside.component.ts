import { Component, OnInit } from '@angular/core';
import { AdminDecodeService } from '../../login/service/admin-decode.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  userName: string = "";

  constructor(
    private adminDecodeService: AdminDecodeService
  ) { }

  ngOnInit(): void {
    this.userName = this.adminDecodeService.getUserName();
  }

}
