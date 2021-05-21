import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../services/admin/admin.service';

@Component({
  selector: 'app-completed-missions',
  templateUrl: './completed-missions.component.html',
  styleUrls: ['./completed-missions.component.css']
})
export class CompletedMissionsComponent implements OnInit {
  completedMissions;
  constructor(public service : AdminService) { }

  ngOnInit(): void {
    this.service.getCompletedMissions().
    subscribe(value => {
      this.completedMissions = value;
    } )
  }

}
