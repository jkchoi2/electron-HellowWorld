#===================================
#electron Helow-worlld Example
#===================================
1. mkdir electronHellowWorld & cd electronHellowWorld

2. npm init -y                     --> package.json만들어짐
3. npm i --save-dev electron       --> electron설치하고 dependancy저장
{
    "name": "start-electron",
    "version": "1.0.0",
    "description": "",
    "main": "main.js",
    "scripts": {
      "start": "electron ."
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "electron": "^17.1.1"
    }
  }

4. index.html 파일 작성
5. main.js  작성

6. npm run start
