import Backbone from 'backbone';
import Todo from '../model/todo';

export default class TodoList extends Backbone.Collection {
  // https://backbonejs.org/#Collection-model
  model = Todo;

  // completedがfalseなModelのみを抽出する
  notCompleted() {
    return this.where({ completed: false });
  }
}
