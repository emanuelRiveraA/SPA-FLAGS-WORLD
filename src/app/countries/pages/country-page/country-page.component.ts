import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit{

  constructor( 
    private activetedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {

    this.activetedRoute.params
      .subscribe( ({id}) => { //se desestructura params
        // console.log({ params });
        
        this.countriesService.searchCountryByAlphaCode( id )
          .subscribe( countries => {
            console.log({countries});//teoricamente me deberia regresar un solo pais pero la API asi es, regresa un arreglo
            
          })
      })

  }



}

