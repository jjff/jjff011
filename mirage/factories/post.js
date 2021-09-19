import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title : () => faker.lorem.sentence(),
  body : () => faker.lorem.paragraph(),
  publishedAt : () => faker.date.past(),
});