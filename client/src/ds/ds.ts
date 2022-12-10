import {axiosClient} from "../config";

export class Todo {
  constructor() {}

  async createTodo(title: string) {
    return axiosClient.post(`/`, { title });
  }

  async toggleTodo(id: string, completed: boolean) {
    return axiosClient.put(`/${id}`, { completed });
  }

  async editTodo(id: string, title: string) {
    return axiosClient.put(`/${id}`, { title });
  }

  async deleteTodo(id: string){
    return axiosClient.delete(`/${id}`)
  }

  async getTodos(){
    return axiosClient.get(`/`)
  }

}
