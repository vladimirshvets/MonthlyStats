#!/bin/bash

cd ./backend &&
rm -rf dist &&
cd ../client &&
npm run build &&
cd .. &&
cp -r ./client/dist ./backend/
