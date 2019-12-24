export interface CommitTree {
  sha: string;
  url: string;
}

export interface RepoUser {
  name: string;
  email: string;
  date: string;
}

export interface CommitInfo {
  author: RepoUser;
  committer: RepoUser;
  message: string;
  tree: CommitTree;
  url: string;
  comment_count: number;
}

export interface Commit {
  sha: string;
  node_id: string;
  commit: CommitInfo;
  url: string;
  html_url: string;
  comments_url: string;

}

export default Commit;
