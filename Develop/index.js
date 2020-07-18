const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      //プロジェクト名
      name: 'Project_title',
      message: 'What is the title of your project??',
    },
    {
      //プロジェクトの説明
      name: 'Project_description',
      message: 'Please describe the project',
    },
    {
      //インストール手順
      name: 'Installation_procedure',
      message: 'Please describe the installation procedure',
    },
    {
      //使用方法
      name: 'How_to_use',
      message: 'Please describe how to use',
    },
    {
      //投稿ガイドライン
      name: 'Posting_guidelines',
      message: 'Please describe the Contribution guidelines',
    },
    {
      //テスト手順
      name: 'Test_procedure',
      message: 'Please describe the test procedure',
    },
    { 
      //ライセンス
      type: 'list',
      name: 'License',
      message: 'Which is your License?',
      choices: ['A', 'B','C','D','E'],
    },

    {
      //ユーザ名
      name: 'username',
      message: 'Enter your username.',
      // default: 'mlc-user'
    },
    {
      //ユーザアドレス
      name: 'Email_address',
      message: 'Enter your Email address',
      // default: 'mlc-user'
    },

  ])
  .then(answers => {

    var jsonData = JSON.stringify(answers);

    let Project_title = answers.Project_title
    let Project_description = answers.Project_description
    let Installation_procedure = answers.Installation_procedure
    let How_to_use = answers.How_to_use
    let Posting_guidelines = answers.Posting_guidelines
    let Test_procedure = answers.Test_procedure
    let License = answers.License
    let userName = answers.username
    let Email_address = answers.Email_address

    var fs = require('fs');
    fs.writeFile("README.md", `
    # Answers Readme:

    ## Project Title
     ${Project_title}

    ## Project Description
     ${Project_description}

    ## Table of Contents
      1.Installation
      2.Usage
      3.License
      4.Contributing
      5.Tests
      6.Questions
    ------------------------

      1.Installation
        -${Installation_procedure}

      2.Usage
        -${How_to_use}

      3.License
        -${License}

      4.Contributing
        -${Posting_guidelines}

      5.Test Procedure
        -${Test_procedure}

      6.Questions
      If you have any questions, please contact
        ${userName}
        ${Email_address}

    --by Mio Sagawa--

    `, function(err) {
      if (err) {
        console.log(err);

    }
console.log(jsonData)
});


});
