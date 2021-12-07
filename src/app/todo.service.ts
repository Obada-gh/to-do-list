import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AddNewTaskPage } from './add-new-task/add-new-task.page';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()


  }

  addTask(key, value){
    this.storage.set(key,value)




  }

  deleteTask(key){
    // console.log(key); the key rememper

    this.storage.remove(key)


  }

  updateTask(){

  }

  getAllTasks(){
    let tasks: any= []

    this.storage.forEach((key,value,index)=>{
      tasks.push({'key':value, 'value':key})
    });
    return tasks

  }

  async init(){
    await this.storage.ready()
  }


}







