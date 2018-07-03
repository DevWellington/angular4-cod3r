
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'

@Injectable()

export class RestaurantsService {

  constructor(private http: Http){}

  restaurants = (): Observable<Restaurant[]> =>
    this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  
  restaurantById = (id: string): Observable<Restaurant> =>
  	this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  
  reviewsOfRestaurant = (id: string): Observable<any> =>
    this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)

  menuOfRestaurant = (id: string): Observable<MenuItem[]> =>
    this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
  	  .map(response => response.json())
      .catch(ErrorHandler.handlerError)

}