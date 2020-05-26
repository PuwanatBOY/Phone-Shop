import { Component, OnInit } from '@angular/core';
import { AddListService } from 'src/app/service/add-list.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  dataList = new FormGroup({
    nameCargo: new FormControl(''),
    type: new FormControl(''),
    codeCargo: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    detail: new FormGroup({ 
      produceDate:new FormControl(''),
      typeOS: new FormControl(''),
      size: new FormControl(''),
      display: new FormControl(''),
      cpu: new FormControl(''),
      ram: new FormControl(''),
      rom: new FormControl(''),
      externalDrive: new FormControl(''),
      camFace: new FormControl(''),
      camBack: new FormControl(''),
      batt: new FormControl(''),
      twoSim: new FormControl('')
    })
  });

  

  constructor(private addListService: AddListService) { }

  submitted = false;

  ngOnInit(): void {
  }
  get uploader(){ return this.addListService.uploader}

  saveDataList() {
    const data = {
      nameCargo: this.dataList.value.nameCargo,
      type: this.dataList.value.type,
      codeCargo: this.dataList.value.codeCargo,
      quantity: this.dataList.value.quantity,
      price: this.dataList.value.price,
      produceDate: this.dataList.value.detail.produceDate,
      typeOS: this.dataList.value.detail.typeOS,
      size: this.dataList.value.detail.size,
      display: this.dataList.value.detail.display,
      cpu: this.dataList.value.detail.cpu,
      ram: this.dataList.value.detail.ram,
      rom: this.dataList.value.detail.rom,
      externalDrive: this.dataList.value.detail.externalDrive,
      camFace: this.dataList.value.detail.camFace,
      camBack: this.dataList.value.detail.camBack,
      batt: this.dataList.value.detail.batt,
      twoSim: this.dataList.value.detail.twoSim,

    };
    console.log(data);
    this.addListService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          alert("เพิ่มสำเร็จ !")
        },
        error => {
          console.log(error);
        });
  } 
}
