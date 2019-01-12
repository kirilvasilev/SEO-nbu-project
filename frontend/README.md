I would like to list things I did think about but did not have the time to do.

0. the current setup

Build:
npm run build
copy index.html and bundle.js from dist to build

Run develop:
npm run start
add a proxy from 3333 -> 3000 or (quick and dirty) you could add http://localhost:3000/ to the axios calls

1. Add additional information about project in the README.md
2. Bigger test coverage, only 1 test currently for demo
3. Fix some css imperfections
4. Extend the webpack config
5. Fix the bug when opening the extra info dialog
6. Fix the Map to show the correct location