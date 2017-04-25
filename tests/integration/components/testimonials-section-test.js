import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('testimonials-section', 'Integration | Component | testimonials section', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{testimonials-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#testimonials-section}}
      template block text
    {{/testimonials-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
