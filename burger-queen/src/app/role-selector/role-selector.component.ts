import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-role-selector',
  templateUrl: './role-selector.component.html',
  styleUrls: ['./role-selector.component.css']
})
export class RoleSelectorComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

  public redirectWaiter(){
    this.router.navigate(['/waitertables']);
}

  public redirectKitchen(){
    this.router.navigate(['/products']);
  }

}
