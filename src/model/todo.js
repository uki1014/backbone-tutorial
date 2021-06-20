import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

export default class Todo extends Backbone.Model {
  // https://backbonejs.org/#Model-defaults
  // modelの初期値を設定（fluxやReduxで言うinitialStateのようなもの）
  defaults() {
    return {
      title: '',
      memo: '',
      completed: false,
    };
  }

  // 完了の状態を切り替え(現在の状態と逆の状態に切り替える)
  toggle() {
    // saveはBackbone.jsから継承したメソッド
    // https://backbonejs.org/#Model-save
    this.save({
      completed: !this.get('completed'),
    });
  }

  // https://backbonejs.org/#Model-validate
  // Modelとして保存する（=描画する）ときのバリデーション
  validate(attrs) {
    if (_.isEmpty(attrs.title)) {
      return 'Error title is empty';
    }
  }
}
