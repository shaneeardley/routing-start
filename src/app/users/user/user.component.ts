import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // };
    this.paramsSubscription = this.route.params.subscribe(p => {
      this.user = {
        id: p['id'],
        name: p['name']
      };
    });
  }

}
