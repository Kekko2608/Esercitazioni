import { Component } from '@angular/core';
import { IAuto } from '../../../models/iAuto';
@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  autos!: IAuto[];
    brand!: string;
    brandLogo!: string

    ngOnInit(): void {
        this.getAutos();
    }

    async getAutos() {
        const res = await fetch('../../assets/db.json');
        const response = await res.json();
        this.autos = response;
        this.autos = this.autos.filter((auto) => auto.brand == 'Fiat')
        this.brandLogo = this.autos[0].brandLogo;
        this.brand = this.autos[0].brand;
    }
}
