let user = {

    //properties: key-value pair
    name: 'naveen',
    age : '30',
    dept: 'QA',
    salary: 34.44,
    city: 'Pune',

    //functions: Inside object no need to use keyword function

    coding()
    {
        console.log('coding started....');
    },

    completed()
    {
        console.log('coding completed...');
    }
}

console.log(user);
console.log(user.name);
user.coding();
user.completed();

console.log('============');

let loginPage = {
    username: 'abc@gmail.com',
    password: 'abc12345',
    role: 'admin',

    // login(username, password)
    // {
    //     console.log('login to app using',username,password);
    // },

    login()
    {
        console.log('Login to app using', this.username);
        this.resetpwd();
    },
    resetpwd()
    {
        console.log('reset password');
    }
}

//loginPage.login(loginPage.username, loginPage.password);

loginPage.login();