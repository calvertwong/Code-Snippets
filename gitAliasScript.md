In gitconfig file:

```
[alias]
	clear = fetch --prune
        // Remember to npm install -g git-removed-branches
        // https://www.npmjs.com/package/git-removed-branches
	flush = removed-branches --prune
        // create a new branch($0) from REMOTE dev branch and prefix the new branch name with task/ and push the created local branch to remote
	task-dev = "!sh -c 'git branch task/\"$0\" origin/dev && git push -u origin task/\"$0\"'"
        // create a new branch($0) from $1 which is a user defined REMOTE source branch and prefix the new branch name with task/ and push the created local branch to remote
	task-else = "!sh -c 'git branch task/\"$0\" origin/\"$1\" && git push -u origin task/\"$0\"'"
	feature-dev = "!sh -c 'git branch feature/\"$0\" origin/dev && git push -u origin feature/\"$0\"'"
	feature-else = "!sh -c 'git branch feature/\"$0\" origin/\"$1\" && git push -u origin task/\"$0\"'"
	bugfix-dev = "!sh -c 'git branch bugfix/\"$0\" origin/dev && git push -u origin bugfix/\"$0\"'"
	bugfix-else = "!sh -c 'git branch bugfix/\"$0\" origin/\"$1\" && git push -u origin task/\"$0\"'"
```
