#!/bin/bash
if [ $# -eq 0 ]; then
  echo "please input new version. e.g. 1.0.0"
  exit 1
elif [ $# -ge 2 ]; then
  echo "too much args"
  exit 1
fi
sed -i "" -e "s/\"version\": \".*\"/\"version\": \"${1}\"/" package.json &&
npm install &&
npm run build &&
git add package.json package-lock.json &&
git commit -m "v${1}" &&
git tag "v${1}" HEAD -f &&
echo "push by below command:\n $ git push --tags && npm publish"
