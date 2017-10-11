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
      name: 'Main', id: 'main', route: 'main'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
  }
}
