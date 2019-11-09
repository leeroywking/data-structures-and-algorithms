const constructFromPrePost = require('./constructFromPrePost.js');

describe('Construct binary tree from pre-post order traversal', () => {
  it('passes the first test case ', () => {
    expect(
      constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
    ).toEqual(true);
  });
});
