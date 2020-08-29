import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route : ActivatedRoute, 
    private rot : Router,private loc:Location) { }

  ngOnInit(): void {
  }
  refresh():void{
    this.rot.navigateByUrl('/new'); 
    console.log("g")
    
    this.rot.navigateByUrl("/new",{skipLocationChange:true}).then(()=>{
      this.rot.navigate([decodeURI(this.loc.path())]);
      console.log(decodeURI(this.loc.path()))
    });
  }
}
