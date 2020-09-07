import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<any> {
    return this.http.get('https://bbdd-1a7ca.firebaseio.com/products');
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post('https://bbdd-1a7ca.firebaseio.com/products', product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://bbdd-1a7ca.firebaseio.com/products/${id}.json`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`https://bbdd-1a7ca.firebaseio.com/products${id}.json`, product);
  }

}
