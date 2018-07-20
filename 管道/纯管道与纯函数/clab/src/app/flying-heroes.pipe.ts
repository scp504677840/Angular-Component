import {Pipe, PipeTransform} from '@angular/core';
import {Flyer} from './flyer';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}
