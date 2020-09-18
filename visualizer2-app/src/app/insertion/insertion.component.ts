import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.css']
})
export class InsertionComponent implements OnInit {
  time:number=10;
  values: any[]=[];
  comp:number=0;
  swap:number=0;
  isDisabled:boolean=false
  ishidden:boolean = false
  block:boolean =true
  size:number=80
  constructor() { }

  ngOnInit(): void {
    this.createArray();
  }
  stop(){
    this.time=0;
  }


 async  refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;
    this.ishidden=false;
    this.block=true;
    await this.delay(this.time)
    document.getElementById('link1').style.pointerEvents="all"
    document.getElementById('link2').style.pointerEvents="all"
    document.getElementById('link3').style.pointerEvents="all"
    document.getElementById('link4').style.pointerEvents="all"
    document.getElementById('link5').style.pointerEvents="all"
   
    this.createArray();
    this.ishidden=false;
    this.block=true;
   
   
  }

  createArray(){  
    for (let index = 0; index < this.size; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*70)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }


async insertion(){
  this.ishidden=true;
  this.block=false;
  this.isDisabled=true;
  document.getElementById('link1').style.pointerEvents="none"
    document.getElementById('link2').style.pointerEvents="none"
    document.getElementById('link3').style.pointerEvents="none"
    document.getElementById('link4').style.pointerEvents="none"
    document.getElementById('link5').style.pointerEvents="none"
  let len:number=this.values.length
  for (let index = 1; index < len; index++) {
    let key:number = this.values[index].val;
    let j:number=index-1;
    

    while (j >= 0 && this.values[j].val > key) { 
        var id1=JSON.stringify(j)
        var id2=JSON.stringify(j+1)
        let element1:any = document.getElementById(id1)
        let element2:any = document.getElementById(id2)
        
        element1.style.backgroundColor = "green"
        element2.style.backgroundColor = "blue"
        this.comp++
        await this.delay(this.time);

        element1.style.backgroundColor = "yellow"
        element2.style.backgroundColor = "yellow"
      this.values[j + 1].val = this.values[j].val;
      this.swap++; 
      j = j - 1; 
  } 
  this.values[j + 1].val = key; 
  this.swap++;
    
  }
  for (let index = 0; index < len; index++) {
   document.getElementById(JSON.stringify(index)).style.backgroundColor="red";
   await this.delay(this.time/2)
    
  }
  this.isDisabled=false
  this.ishidden = false
  this.block =true
  document.getElementById('link1').style.pointerEvents="all"
    document.getElementById('link2').style.pointerEvents="all"
    document.getElementById('link3').style.pointerEvents="all"
    document.getElementById('link4').style.pointerEvents="all"
    document.getElementById('link5').style.pointerEvents="all"
}

private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
