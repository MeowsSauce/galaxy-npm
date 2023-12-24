const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('包名');
rl.question('PackageName: ', (name) => {
  console.log('版本');
  rl.question('Version: ', (version) => {
    console.log('项目描述');
    rl.question('Description: ', (description) => {
      console.log('开源许可证');
      rl.question('License: ', (license) => {
        console.log('主文件');
        rl.question('Main: ', (main) => {
          console.log('作者');
          rl.question('Author: ', (author) => {
            console.log('您已到达一个标准的"package.json"文件要求，是否继续？');
            rl.question('Yes or No: ', (oK) => {
              if (oK === 'Yes') {
                console.log('项目仓库');
                rl.question('Repository: ', (repository) => {
                  console.log('项目主页');
                  rl.question('HomePage: ', (projectUrl) => {
                    rl.close();

                    const packageJson = {
                      name: name,
                      version: version,
                      description: description,
                      license: license,
                      main: main,
                      repository: repository,
                      homepage: projectUrl,
                      author: author
                    }; //存储输入信息到变量里

                    const packageJsonString = JSON.stringify(packageJson, null, 2); //将json字符串以string形式存储

                    fs.writeFile('package.json', packageJsonString, err => {
                      if (err) {
                        console.error(err);
                      } else {
                        console.log('package.json文件已创建');
                      }
                    });
                  });
                });
              } else {
                console.log('程序已终止');
              }
            });
          });
        });
      });
    });
  });
});