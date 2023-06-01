In gitconfig file:

```
[alias]
	clear = fetch --prune
        // Remember to npm install -g git-removed-branches
        // https://www.npmjs.com/package/git-removed-branches
	flush = removed-branches --prune
        // create a new branch($0) from dev and prefix the new branch name with task/
	task-dev = "!sh -c 'git branch task/\"$0\" dev'"
        // create a new branch($0) from $1 which is a user defined source branch and prefix the new branch name with task/
	task-else = "!sh -c 'git branch task/\"$0\" \"$1\"'"
	feature-dev = "!sh -c 'git branch feature/\"$0\" dev'"
	feature-else = "!sh -c 'git branch feature/\"$0\" \"$1\"'"
	bugfix-dev = "!sh -c 'git branch bugfix/\"$0\" dev'"
	bugfix-else = "!sh -c 'git branch bugfix/\"$0\" \"$1\"'"
```
