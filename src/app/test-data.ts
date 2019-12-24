import Commit from './repo-history/interfaces';

export const testUrl = 'test.com';
export const sha = '5d81a6bbc084';
export const testCommit: Commit = {
  sha,
  commit: {
    author: {
      name: 'Test User',
      email: 'test+user@users.noreply.github.com',
      date: '2019-12-24T14:13:55Z',
    },
    committer: {
      name: 'GitHub',
      email: 'noreply@github.com',
      date: '2019-12-24T14:13:55Z',
    },
    message: '[branch] comment to the commit',
    tree: {
      sha,
      url: testUrl,
    },
    url: testUrl,
    comment_count: 0,
  },
  url: testUrl,
  html_url: testUrl,
  comments_url: testUrl,
};
