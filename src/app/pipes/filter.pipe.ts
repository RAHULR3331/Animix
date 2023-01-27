import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allanime: [], searchkey: string, propname: string): any[] {
    const result: any = [];
    
    if (!allanime || searchkey == '' || propname == '') {
      return allanime
  }

  //Search 
  allanime.forEach((animie: any) => {
    if (animie[propname].trim().toLowerCase().includes(searchkey.toLowerCase())) {
      result.push(animie)


    }
  })
  return result;
}



}
