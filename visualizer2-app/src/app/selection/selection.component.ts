import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  values: any[]=[];
  time:number=10;
  comp:number=0;
  swap:number=0;
  isDisabled:boolean=false
  ishidden:boolean = false
  block:boolean =true
  size:number=80
 
 // sort:string="sorted";

  constructor() {
  }
  
   ngOnInit(): void {
   this.createArray();
  }
  stop(){
    this.time=0;
  }
  
  createArray(){  
    for (let index = 0; index < this.size; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*70)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }

  async refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;
    this.ishidden=false;
    this.block=true;
    this.isDisabled=false;
    await this.delay(this.time)
   
    document.getElementById('link1').style.pointerEvents="all"
    document.getElementById('link2').style.pointerEvents="all"
    document.getElementById('link3').style.pointerEvents="all"
    document.getElementById('link4').style.pointerEvents="all"
    document.getElementById('link5').style.pointerEvents="all"
  
    this.comp=0;
    this.swap=0;
  
    this.createArray();
    console.log(this.values)
    this.ishidden=false;
    this.block=true;
  }
  async selection(){
    this.ishidden=true;
  this.block=false;
  this.isDisabled=true;
  document.getElementById('link1').style.pointerEvents="none"
    document.getElementById('link2').style.pointerEvents="none"
    document.getElementById('link3').style.pointerEvents="none"
    document.getElementById('link4').style.pointerEvents="none"
    document.getElementById('link5').style.pointerEvents="none"

    let n:number = this.values.length; 
    
    for (let index = 0; index <n-1; index++) { 
      let min_idx:number = index; 
   
      for (let inde = index+1; inde < n; inde++) {
        this.comp++
        var id1=JSON.stringify(index)
        var id2=JSON.stringify(inde)
        let element1:any = document.getElementById(id1)
        let element2:any = document.getElementById(id2)
        
        element1.style.backgroundColor = "green"
        element2.style.backgroundColor = "blue"
  
        await this.delay(this.time);
  
        element1.style.backgroundColor = "yellow"
        element2.style.backgroundColor = "yellow"
        if (this.values[inde].val < this.values[min_idx].val) 
          min_idx = inde; 
      }
        if(min_idx!=index){
          this.swap++;
        let temp = this.values[min_idx].val; 
        this.values[min_idx].val = this.values[index].val; 
        this.values[index].val = temp; 
        } 
        document.getElementById(JSON.stringify(index)).style.backgroundColor="red"
      
    }
    document.getElementById(JSON.stringify(this.values.length-1)).style.backgroundColor="red"
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
