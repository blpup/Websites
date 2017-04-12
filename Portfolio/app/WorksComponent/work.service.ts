import {Injectable} from '@angular/core';
import {Work} from './work';
import {WORKS} from './mock-work';

@Injectable()
export class WorkService{
  getWorks(): Promise<Work[]>{
    return Promise.resolve(WORKS)
  };
  getWork(id:number):Promise<Work>{
    return this.getWorks().then(works => works.find(work=>work.id === id));
  };
};
