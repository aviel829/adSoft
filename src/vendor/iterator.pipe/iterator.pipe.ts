import { Pipe  } from '@angular/core';


@Pipe({ name: 'values',  pure: false })
export class ValuesPipe {
  transform(dict: Object) {
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}