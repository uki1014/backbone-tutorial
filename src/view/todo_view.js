import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

export default class TodoView extends Backbone.View {
  // https://backbonejs.org/#View-events
  events() {
    return {
      'click .delete': 'destroy',
      'click .toggle': 'toggle',
    };
  }

  destroy() {
    if (confirm('本当に削除しても良いですか？')) {
      this.model.destroy();
      this.remove();
    }
  }

  toggle() {
    this.model.set({ completed: !this.model.get('completed') });
    // インスタンスの状態を変更したので再度レンダリングしてviewを更新
    this.render();
  }

  // underscore.jsのtemplate
  // htmlの<script type="text/template">部分をtemplateとして使用し、Modelのデータを入れ込む
  template = _.template($('#todo-template').html());

  // https://backbonejs.org/#View-render
  render() {
    // template（#todo-template）に対してTodo Modelの状態を流し込む
    // Todoの状態→title, memo, completed
    const template = this.template(this.model.toJSON());
    this.$el.html(template);
    return this;
  }
}
