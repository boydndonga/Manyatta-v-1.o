import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('already-signed-in-navbar', 'Integration | Component | already signed in navbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{already-signed-in-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#already-signed-in-navbar}}
      template block text
    {{/already-signed-in-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
