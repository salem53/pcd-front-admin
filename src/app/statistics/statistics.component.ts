import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../services/admin/admin.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics;
  constructor(public service: AdminService) { }

  ngOnInit(): void {
    this.service.getStatistics().subscribe(data => {
      this.statistics = data;
    } )

  }

}
