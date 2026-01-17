import { Component } from '@angular/core';
import { IUser } from '../user/user.model';
@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  user: IUser | null = null;
  constructor() { }

}
