import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {Location, JsonPipe} from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
"use strict";


@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnInit {

  values: any[]=[];
  dup:number[][]=[]
  ids:number[][][]=[];
  comp:number=0;
  swap:number=0;
  id: number;
  id3: number;
  id2: number;
 // sort:string="sorted";

  constructor(public loc:Location, public rot:Router) {
  }
  
   ngOnInit(): void {
   this.createArray();
  }
  
  createArray(){  
    for (let index = 0; index < 75; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*70)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }

  refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;

  
   this. dup=[]
    this.ids=[];
    this.comp=0;
    this.swap=0;
    this.id=0;
    this.id3=0;
    this.id2=0;
    this.createArray();
    console.log(this.values)
  }

  async bubbleSort(){
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
 } 


 async mergeSort(){
   console.log(this.values)
   let dupli:number[]=[]; 
   for (let index = 0; index < this.values.length; index++) {
     dupli[index]=this.values[index].val;
     
   }
 
 this.mergeSortRange(dupli,0,this.values.length-1);
  await this.delay(1000)
  console.log(dupli)
  console.log(this.values)
  console.log(this.dup)
 for (let index = 0; index < this.ids.length; index++) {
   for (let ind = 0; ind < this.ids[index].length; ind++) {
     
     //this.ids[index][ind][1];
     var id1=JSON.stringify(this.ids[index][ind][0])
     var id2=JSON.stringify(this.ids[index][ind][1])
     let element1:any = document.getElementById(id1)
     let element2:any = document.getElementById(id2)
     
     element1.style.backgroundColor = "green"
     element2.style.backgroundColor = "blue"

     await this.delay(50);


     element1.style.backgroundColor = "yellow"
     element2.style.backgroundColor = "yellow" 
     this.comp++;    
   } 
  
 
   for (let indexs= 0; indexs < this.dup[index].length; indexs++) {
    this.values[indexs].val=this.dup[index][indexs];
    await this.delay(5)
   
  }
 }
 for (let index = 0; index < this.values.length; index++) {
  document.getElementById(JSON.stringify(index)).style.backgroundColor="red";
  await this.delay(5)
   
 }



}



async mergeSortRange(list: number[],l:number,h:number){
  
  //await this.delay(10);
  
  if(l>=h) return;
  let m= Math.floor(l+(h-l)/2);
  this.mergeSortRange(list,l,m);
  this.mergeSortRange(list,m+1,h);
  //await this.delay(90)
// this.sleep(5)
 // this.merge(list,l,m,h);

 
 let compare:number[][]=[]
  let n1:number= m-l+1;
  let n2:number = h-m

  let a1:number[]=[];
  let a2:number[]=[];
  for (let index = 0; index <n1; index++) {
    a1[index]=list[l+index]; 
  }
  for (let index = 0; index <n2; index++) {
    a2[index]=list[m+1+index]; 
  }
  let i:number=0;
  let j:number=0;
  let k:number=l;
  while (i < n1 && j < n2) { 
    
   
     var id1=JSON.stringify(l+i)
    var id2=JSON.stringify(l+n1+j)
     let pair:number[]=[l+i,l+n1+j]
    
     compare.push(pair)
 
    if (a1[i] <= a2[j]) { 
      //this.dup[k]=a1[i];
        list[k] = a1[i]; 
        i++; 
    } 
    else { 
     // this.dup[k]=a2[j];
        list[k] = a2[j]; 
        j++; 
    } 
    k++; 
} 
this.ids.push(compare)
  while (i < n1) { 
   // this.dup[k]=a1[i];
    list[k] = a1[i]; 
    i++; 
    k++; 
  } 

  while (j < n2) { 
    //this.dup[k]=a2[j];
    list[k] = a2[j]; 
    j++; 
    k++; 
  } 
  let a = list.slice(0,70)
  
  this.dup.push(a)
  }


async insertion(){
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

        await this.delay(10);

        element1.style.backgroundColor = "yellow"
        element2.style.backgroundColor = "yellow"
      this.values[j + 1].val = this.values[j].val;
      this.swap++; 
      j = j - 1; 
  } 
  this.values[j + 1].val = key; 
    
  }
  for (let index = 0; index < len; index++) {
   document.getElementById(JSON.stringify(index)).style.backgroundColor="red";
   await this.delay(5)
    
  }
}

async selection(){

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

      await this.delay(10);

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
    
  }
}

async quick(){
  this.sort(this.values,0,this.values.length-1)
}

async sort(val:any[],low:number,high:number){
  if(low<high){
     let pivotIndex:number= await this.partition(this.values,low,high)
    document.getElementById(JSON.stringify(pivotIndex)).style.backgroundColor="red"
    await this.delay(2000)
   await this.sort(this.values,low,pivotIndex-1);
    await this.sort(this.values,pivotIndex+1,high);
  }
  for (let index = low; index <=high; index++) {
    document.getElementById(JSON.stringify(index)).style.backgroundColor="red"
    
  }

}

 async partition(valies:any[],low:number,high:number):Promise<number>{

  let pivot = this.values[high].val; 
  document.getElementById(JSON.stringify(pivot)).style.backgroundColor="blue"
  await this.delay(1000)
  let i = (low-1); // index of smaller element 
  for (let j=low; j<high; j++) 
  { 
    var id1=JSON.stringify(pivot)
    var id2=JSON.stringify(j)
    let element1:any = document.getElementById(id2)
    let element2:any = document.getElementById(id1)
    
    element1.style.backgroundColor = "green"
    element2.style.backgroundColor = "blue"

   await this.delay(100)

    element1.style.backgroundColor = "yellow"
    element2.style.backgroundColor = "yellow"
      if (this.values[j].val < pivot) 
      { 
          i++; 
          let temp = this.values[i].val; 
          this.values[i].val= this.values[j].val; 
          this.values[j].val = temp; 
      } 
  } 
  let temp = this.values[i+1].val; 
  this.values[i+1].val = this.values[high].val; 
  this.values[high].val = temp; 

  return i+1; 
 
}





private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
 sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
  
  
}
