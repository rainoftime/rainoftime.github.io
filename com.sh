git checkout --orphan tmp
git add .
git commit -m "update"
git branch -D master
git branch -m master
git push -f origin master
