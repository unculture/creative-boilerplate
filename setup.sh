#!/bin/bash
NamePlaceholder="creative-boilerplate"
echo -n "Enter project name and press [ENTER]:"
read project
project="$(echo -n "${project}" | sed -e 's/[^[:alnum:]]/-/g' \
| tr -s '-' | tr A-Z a-z)"
sed "s/$NamePlaceholder/$project/g" "./package.json" > "./package.json.tmp"
mv "./package.json.tmp" "package.json"

DescPlaceholder="SmartContent Creative Boilerplate"
echo -n "Enter project description and press [ENTER]:"
read desc
sed "s/$DescPlaceholder/$desc/g" "./package.json" > "./package.json.tmp"
mv "./package.json.tmp" "package.json"

echo -n "Enter git repo target and press [ENTER]:"
read origin

rm -rf ".git"
git init
git add .
git commit -am "Initial commit by setup.sh"
git remote add origin "$origin"
git push -u origin master

npm install

npm run dev