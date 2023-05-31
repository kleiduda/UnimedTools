import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { Tools } from './tools.model';
import { TOOLS } from './data';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  toolsCards: Tools[] = [];

  constructor () { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Ferramentas de apoio', path: '/' }, { label: 'Tools', path: '/', active: true }];
    this._fetchData();
  }

  _fetchData(): void {
    this.toolsCards = TOOLS;
  }

}
