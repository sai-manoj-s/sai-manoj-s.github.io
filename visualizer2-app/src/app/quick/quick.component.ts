import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

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



  async refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;
    this.ishidden=false;
    this.block=true;

    await this.delay(10)
  
   
    this.createArray();
   
  }

  createArray(){  
    for (let index = 0; index < this.size; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*70)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }

  async quick(){
    this.ishidden=true;
    this.block=false;
    this.isDisabled=true;
    document.getElementById('link1').style.pointerEvents="none"
    document.getElementById('link2').style.pointerEvents="none"
    document.getElementById('link3').style.pointerEvents="none"
    document.getElementById('link4').style.pointerEvents="none"
    document.getElementById('link5').style.pointerEvents="none"

   await  this.sort(this.values,0,this.values.length-1)
   this.isDisabled=false;
   this.ishidden = false
     this.block=true
     document.getElementById('link1').style.pointerEvents="all"
    document.getElementById('link2').style.pointerEvents="all"
    document.getElementById('link3').style.pointerEvents="all"
    document.getElementById('link4').style.pointerEvents="all"
    document.getElementById('link5').style.pointerEvents="all"
  }
  
  async sort(val:any[],low:number,high:number){
    if(low<high){
       let pivotIndex:number= await this.partition(this.values,low,high)
      document.getElementById(JSON.stringify(pivotIndex)).style.backgroundColor="red"
      await this.delay(200)
     await this.sort(this.values,low,pivotIndex-1);
      await this.sort(this.values,pivotIndex+1,high);
    }
    for (let index = low; index <=high; index++) {
      document.getElementById(JSON.stringify(index)).style.backgroundColor="red"
      
    }
  
  }
  
   async partition(valies:any[],low:number,high:number):Promise<number>{
  
    let pivot = this.values[high].val; 
    //document.getElementById(JSON.stringify(pivot)).style.backgroundColor="blue"
    
    let i = (low-1); // index of smaller element 
    for (let j=low; j<high; j++) 
    { 
      var id1=JSON.stringify(high)
      var id2=JSON.stringify(j)
      let element1:any = document.getElementById(id2)
      let element2:any = document.getElementById(id1)
      
      element1.style.backgroundColor = "green"
      element2.style.backgroundColor = "blue"
      this.comp++
     await this.delay(20)
  
      element1.style.backgroundColor = "yellow"
      element2.style.backgroundColor = "yellow"
        if (this.values[j].val < pivot) 
        { 
            i++; 
            let temp = this.values[i].val; 
            this.values[i].val= this.values[j].val; 
            this.values[j].val = temp;
            this.swap++ 
        } 
    } 
    let temp = this.values[i+1].val; 
    this.values[i+1].val = this.values[high].val; 
    this.values[high].val = temp;
    this.swap++; 
  
    return i+1; 
   
  }
  
  
  
  
  
  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
