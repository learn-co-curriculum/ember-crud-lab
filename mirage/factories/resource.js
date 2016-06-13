import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: function(){
    return `Learn ${faker.hacker.ingverb()}`;
  },
  description: function(){
    return `This is a great book! ${faker.hacker.phrase()}`;
  },
  url: faker.internet.domainName,
  topic: faker.hacker.noun
});



