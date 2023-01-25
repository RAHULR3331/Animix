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
  allanime.forEach((anime: any) => {
    if (anime[propname].trim().toLowerCase().includes(searchkey.toLowerCase())) {
      result.push(anime)


    }
  })
  return result;
}

}
