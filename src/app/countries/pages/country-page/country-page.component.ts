import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor( 
    private activetedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}

  ngOnInit(): void {
                        //params es un observable porque me estoy suscribiendo
    this.activetedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
      )
      .subscribe( country => { //se desestructura params
        // console.log({ params });
        
        if(!country){
          return this.router.navigateByUrl('');
        }

        // console.log(`TENEMOS UN PAIS: `);
        return this.country = country;       
      })

  }


}

