# Thunder React App

Demo app to fetch content from Thunder.

## Prerequirements

A recent version of the Thunder distribution. This patch is required for Thunder:
https://github.com/drupal-graphql/graphql/pull/1189

## Usage

```
git clone https://github.com/thunder/thunder-react-app.git
cd thunder-react-app
npm install
```

To run the app a .env file is needed. The following vars can be defined inside
that file:

*REACT_APP_GRAPHQL_SERVER* The GraphQL endpoint URL

*REACT_APP_GRAPHQL_SERVER_USER* Basic auth user

*REACT_APP_GRAPHQL_SERVER_PASSWORD* Basic auth password

## Start the app

```
npm run start
```
