import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './pipes.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    } else {
      return posts.filter(post => {
        return post[field].toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}
