import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import TodoList from '../collection/todo_list';
import Todo from '../model/todo';
import TodoListView from '../view/todo_list_view';

export default class AppView extends Backbone.View {
  events() {
    return {
      'click #add-todo': 'addNew',
    };
  }

  initialize() {
    // viewの初期化時にformの要素を取得
    this.$title = $("#add-form [name='title']");
    this.$memo = $("#add-form [name='memo']");

    // validationのためにModelインスタンスを作成する
    this.model = new Todo();
    // Todo一覧を表示するためのCollectionインスタンス
    this.collection = new TodoList();
    // TodoListインスタンスを用いてTodo一覧のViewを作成
    this.todoListView = new TodoListView({
      el: $('#todo-list'),
      collection: this.collection,
    });

    this.render();
  }

  // 残りのtodoの数を計算
  updateCount() {
    $('#count').html(this.collection.notCompleted().length);
  }

  // Modelをtemplateに渡す
  render() {
    this.$title.val('');
    this.$memo.val('');
    this.updateCount();
  }

  // collectionに新たなModelを追加し、viewに反映
  addNew() {
    const check = this.model.set(
      { title: this.$title.val(), memo: this.$memo.val(), completed: false },
      { validate: true }
    );
    if (check) {
      this.collection.add({
        title: this.$title.val(),
        memo: this.$memo.val(),
        completed: false,
      });
    } else {
      confirm('Titleを空欄で作成することはできません。');
    }
    this.render();
  }
}
