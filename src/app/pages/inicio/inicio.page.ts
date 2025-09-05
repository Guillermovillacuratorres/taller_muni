import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenuButton,IonMenu,IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonList, IonItem, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonImg, IonItem, IonList, IonLabel, IonMenuButton,IonMenu, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  private router = inject(Router);

  constructor() { }


  ngOnInit() {
  }


  agregar(){
    this.router.navigateByUrl("crear");
  }

  ver(){

  }


  editar(){

  }

  cerrar(){

  }

}
