import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardContent,IonCardSubtitle,IonCardTitle } from '@ionic/angular/standalone';
import { Auto } from 'src/app/models/auto';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
            IonCard,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader 

  ]
})
export class VerPage implements OnInit {


  autos:Auto[]=[
    {
      color:"Azul",
      imagen:"https://www.automoli.com/common/vehicles/_assets/img/gallery/f68/honda-civic-type-r-fk8-facelift-2020.jpg",
      marca:"Honda",
      modelo:"Civic",
      patente:"abcd12",
      precio:1500
    },
    {
      color:"azul",
      imagen:"https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_5e24773059f24d70985cb547bc7a0cdf.jpg",
      marca:"Nissan",
      modelo:"V16",
      patente:"qwer00",
      precio:5000
    }
  ];



  constructor() { }



  ngOnInit() {
  }

}
