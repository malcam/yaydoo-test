import faker from 'faker';
import { describe } from 'mocha';
import { expect } from 'chai';

import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {
  let helloWorld: HelloWorld;

  beforeEach(() => {
    helloWorld = new HelloWorld();
  });

  it('should be a valid instance', () => {
    expect(helloWorld).to.be.instanceOf(HelloWorld);
  });

  it('should return Hello `$name` when we given a valid name', () => {
    const fakeName = faker.name.firstName();
    expect(helloWorld.hello(fakeName)).to.eq(`Hello ${fakeName}`);
  });
});
