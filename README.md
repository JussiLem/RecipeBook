# Recipe book

React Native school project. This project aims to show how to create a mobile application using cloud resources.
AWS AppSync GraphQL API as well as a DynamoDB tables is being used by the app.
AppSync is a managed service that uses GraphQL
[Amazon Cognito](https://aws.amazon.com/cognito/) is used as the main authentication provider.
Amazon Cognito is a robust user directory service that can handle user registration,
authentication, account recovery & other operations. Authentication uses email & password combination.

## Techs

* React Native
* Hooks
* [AWS Amplify React Hooks](https://www.npmjs.com/package/aws-amplify-react-hooks)
* [GraphQL](https://www.howtographql.com/)
* [AWS AppSync](https://aws.amazon.com/appsync/)
* AWS Amplify CI/CD
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
* [AWS Cognito](https://aws.amazon.com/cognito/)


## General info

### Folder structure

The components and screens are separated so they can be more easily recycled in the application.
The graphql folder contains auto generated files are created by the appsync.
The original schema that can be edited can be found from:
``/amplify/backend/api/recipebook/schema.graphql``

````bash
src/
├── AppNavigator.js
├── components
│   ├── AppContainer
│   ├── AppStyles.js
│   ├── Button
│   ├── Card
│   ├── CardRecipe
│   ├── CardRecipeDetail
│   ├── Header
│   ├── Loading
│   ├── Space
│   ├── TabBar
│   ├── TextError
│   ├── TextLink
│   ├── index.js
│   ├── ingredientDetails
├── constants.js
├── graphql
│   ├── mutations.js
│   ├── queries.js
│   ├── schema.json
│   └── subscriptions.js
└── screens
    ├── Authenticator
    │   ├── ConfirmSignUp
    │   ├── Forgot
    │   ├── ForgotPassSubmit
    │   ├── Form
    │   ├── SignIn
    │   ├── SignUp
    │     
    ├── Hello
    ├── Home
    ├── Recipes
    └── User
````

## How to

### Step 1 - Install dependencies
To install all dependencies run:
```shell script
yarn
```

### Step 2 - Register your AWS account

Register according to these instructions 📃 and check all 5 steps according to the video tutorial.
**Attention!!!** You will need a bank card 💳, where should be more than 1 $ 💵

### Step 3 - Init Amplify

`amplify init`


This will send changes to the cloud 💭

`amplify push`

✔ All resources will be updated in the cloud

### Step 4 - Run expo

```shell script
yarn start
```

The web build can be accessed from [here](https://master.d3ppqs497a73jr.amplifyapp.com/)
