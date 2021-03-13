import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  dal=null;
  signo=null;
  da2=null;
  res=null;
  constructor(){}
  cacular(){
    if(this.signo=="+"){
      this.res=parseFloat(this.dal)+parseFloat(this.da2)
    }

    if(this.signo=="-"){
      this.res=parseFloat(this.dal)-this.da2
    }

    if(this.signo=="*"){
      this.res=parseFloat(this.dal)*this.da2
    }

    if(this.signo=="/"){
      this.res=parseFloat(this.dal)/this.da2
    }
  }
  ngOnInit() {
  }
}
