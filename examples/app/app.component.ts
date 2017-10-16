import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
   
  ) {
    
  }

  public list: any[] = [
    {
      name: 'Drilldown list', id: 'drilldown_list', route: 'drilldown_list'
    },
    {
      name: 'Action list', id: 'action_list', route: 'action_list'
    },
    {
      name: 'Toggle buttons', id: 'toggle_buttons', route: 'toggle_buttons'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
  }
}
