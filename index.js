const inquirer = require('inquirer');
const fs = require('fs');

function generateHTML(data) {
    const html =
        `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${data.name}'s Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-6 align-items-center text-align-center">
              <h1 class="name">${data.name}</h1>
              <p class="lead">Location: ${data.location}</p>
              <p class="lead">Bio: ${data.bio}</p>
              <p class="lead"><a href="${data.linkedin}">LinkedIn</a></p>
              <p class="lead"><a href="https://github.com/${data.github}">GitHub</a></p>
            </div>
          </div>
        </div>
      </body>
    </html>`;

    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
    fs.writeFile(filename, html, (err) => {
        if (err) throw err;
        console.log('HTML file generated!');
    });
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What are your favorite hobbies?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'LinkedIn URL>',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
    ])
    .then((data) => {
        generateHTML(data);
    });