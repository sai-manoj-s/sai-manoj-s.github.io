import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  values: any[]=[];
  comp:number=0;
  swap:number=0;
  isDisabled:boolean=false
  ishidden:boolean = false
  block:boolean =true
  constructor() { }
  size:number=80;

  ngOnInit(): void {
    this.createArray();
  }



  async refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;
    this.ishidden=false;
    this.block=true;

  await this.delay(10)
   
    this.createArray();
    console.log(this.values.length)
   
  }

  createArray(){  
    for (let index = 0; index < this.size; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*70)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }
  async bubbleSort(){
    this.ishidden=true;
    this.block=false;
    this.isDisabled=true;
    document.getElementById('link1').style.pointerEvents="none"
    document.getElementById('link2').style.pointerEvents="none"
    document.getElementById('link3').style.pointerEvents="none"
    document.getElementById('link4').style.pointerEvents="none"
    document.getElementById('link5').style.pointerEvents="none"


    for (let inde = 0; inde < this.values.length; inde++) {
      for (let index = 0; index < this.values.length-inde-1; index++) {
       
////////////////changin color of selected bars////////////////////////////
    var id1=JSON.stringify(index)
    var id2=JSON.stringify(index+1)
    let element1:any = document.getElementById(id1)
    let element2:any = document.getElementById(id2)
    
    element1.style.backgroundColor = "green"
    element2.style.backgroundColor = "blue"

    await this.delay(10);

    element1.style.backgroundColor = "yellow"
    element2.style.backgroundColor = "yellow"

/////////////////////////////////////////////////////////////////////////////

        
    this.comp=this.comp+1;
    if(this.values[index].val>this.values[index+1].val){
        await this.delay(10);
        this.swap=this.swap+1;
        let temp=this.values[index].val;
        this.values[index].val=this.values[index+1].val;
        this.values[index+1].val=temp;
      }
  }
      this.values[this.values.length-1-inde].state="sorted";
      document.getElementById(JSON.stringify(this.values.length-1-inde)).style.backgroundColor = "red"     
}
this.isDisabled=false;
this.ishidden = false
  this.block=true
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


