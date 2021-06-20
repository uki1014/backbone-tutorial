import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import TodoView from './todo_view';

export default class TodoListView extends Backbone.View {
  // https://backbonejs.org/#View-constructor
  initialize() {
    this.listenTo(this.collection, 'add', this.addTodoView);
    this.listenTo(this.collection, 'change', this.updateCount);
  }

  addTodoView(todo) {
    this.$el.append(new TodoView({ model: todo }).render().el);
  }

  // 残りのtodoの数を計算
  // todo_listに定義しているnotCompletedメソッドを使って現在のCollectionの数を計算
  updateCount() {
    $('#count').html(this.collection.notCompleted().length);
  }
}
