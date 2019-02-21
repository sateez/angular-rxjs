import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 's3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent       {
  title = 's3';

  favourites:Observable<Object>;

  constructor      (private afdb: AngularFireDatabase){
      this.favourites = this.afdb.object('favourites').valueChanges();
  }
}
