import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  values: any[]=[];
  dup:number[][]=[]
  ids:number[][][]=[];
  comp:number=0;
  swap:number=0;
  isDisabled:boolean=false
  ishidden:boolean = false
  block:boolean =true
  size:number=80
  id: number;
  id3: number;
  id2: number;
 // sort:string="sorted";

  constructor() {
  }
  
   ngOnInit(): void {
   this.createArray();
  }
  
  createArray(){  
    for (let index = 0; index < this.size; index++) {
        this.values.push({"id":index,"val":Math.floor(Math.random()*67)+5,"state":"unsorted"}) 
    }
      // console.log(this.values)
  }

  async refresh(){
    this.values=[];
    this.comp=0;
    this.swap=0;
    this.ishidden=false;
    this.block=true;

  await this.delay(10)
   
  
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

  async merge(){
    this.ishidden=true;
    this.block=false;
    this.isDisabled=true;
    document.getElementById('link1').style.pointerEvents="none"
    document.getElementById('link2').style.pointerEvents="none"
    document.getElementById('link3').style.pointerEvents="none"
    document.getElementById('link4').style.pointerEvents="none"
    document.getElementById('link5').style.pointerEvents="none"
    
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
 
      await this.delay(30);
 
 
      element1.style.backgroundColor = "yellow"
      element2.style.backgroundColor = "yellow" 
      this.comp++;    
    } 
   
  
    for (let indexs= 0; indexs < this.dup[index].length; indexs++) {
     this.values[indexs].val=this.dup[index][indexs];
     await this.delay(1)
    
   }
  }
  for (let index = 0; index < this.values.length; index++) {
   document.getElementById(JSON.stringify(index)).style.backgroundColor="red";
   await this.delay(5)
    
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
   let a = list.slice(0,this.size)
   
   this.dup.push(a)
   }

   private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
