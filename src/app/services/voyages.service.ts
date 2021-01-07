import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  url = "http://localhost/gestion-voyages/public/api";

  constructor(private httpClient : HttpClient) { }
  getVoyages(){
    return this.httpClient.get<any[]>(this.url+'/voyages');
  }
  getVoyageById(id){
    return this.httpClient.get<any>(this.url+'/voyage/'+id);
  }
  postVoyages(formData){
    return this.httpClient.post<any>(this.url+ '/voyages',formData);
  }
  editVoyages(voyage){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.url+ '/voyages',voyage,{headers:headers});
  }
  deleteVoyage(id){
    return this.httpClient.delete<any>(this.url+'/voyages/'+id);
  }
}
