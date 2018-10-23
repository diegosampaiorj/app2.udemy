import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { promise } from 'protractor';



@Injectable()
export class OfertasService{

    constructor(private http : Http){}


    public getOfertas():Promise<Array<Oferta>>{
        
        // efetuar um request http 
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta : any) => resposta.json())
        //retornar uma promise Oferta[]

    }    
}