#!/bin/bash

placeholderName="creative-boilerplate"
placeholderDescription="SmartContent Creative Boilerplate"

# Ask for project name
echo -n "Enter project name and press [ENTER]:"
read projectName

# Normalise project name and set in package.json
projectNameSlug="$(echo -n "${projectName}" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)"
sed -i.bak "s/$placeholderName/$projectNameSlug/g" package.json

# Ask for project description, and set in package.json and readme
echo -n "Enter project description and press [ENTER]:"
read projectDescription
sed -i.bak "s/$placeholderDescription/$projectDescription/g" package.json
echo -e "# $projectName\n\n$projectDescription" > "./readme.md"

rm package.json.bak

# Ask for git repository
echo -n "Enter git repo target and press [ENTER]:"
read origin

# Initialise fresh git repository
rm -rf ".git"
git init
git add .
git commit -am "Initial commit by setup.sh"
git remote add origin "$origin"
git push origin master

# Install packages
npm install
