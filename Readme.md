# GRAPHQL API

CRUD operation of differnt Authenication, User, Profile and Cities with GraphQL.

## Install

    npm install

## Run the app

    npm run dev

## Endpoint

    http://[DOMAIN]:[PORT]/graphql

# Authentication

Basic User Authentication

## Register the User

`MUTATION register`

```graphql
mutation Mutation(
  $name: String!
  $email: String!
  $password: String!
  $role: AllowedRoles!
) {
  register(name: $name, email: $email, password: $password, role: $role) {
    message
  }
}
```

`Variables`

```graphql
name: "yatin",
email: "yatin7@gmail.com",
password: "test",
role: "admin" || "users"
```

## Verify the User

`MUTATION verify`

```graphql
mutation Mutation($verifyId: String!) {
  verify(id: $verifyId) {
    message
  }
}
```

`Variables`

```graphql
verifyId: "61856a59c261f2738388d088"
```

## Forgot Password

`MUTATION forgetPassword`

```graphql
mutation ForgetPassword($email: String!) {
  forgetPassword(email: $email) {
    resetToken
    message
  }
}
```

`Variables`

```graphql
email: "test@test.com"
```

## Reset Password

`MUTATION reset`

```graphql
mutation Reset($resetToken: String!, $password: String!) {
  reset(resetToken: $resetToken, password: $password) {
    message
  }
}
```

`Variables`

```graphql
resetToken: "2MzcxMDExfQ.43X3Rxfx-aoUCMdYxrgMGcFUs5inGBK6H1GDiF3PlY4"
password: "test"
```

## Login

`MUTATION login`

```graphql
mutation MUTATION($email: String!, $password: String!) {
  login(password: $password, email: $email) {
    message
    token
    user {
      _id
      verified
      urlGitHub
      urlTwitter
      name
      email
      role
      phone
      city
      country
      createdAt
      updatedAt
    }
  }
}
```

`Variables`

```graphql
email: "yatin7@gmail.com",
password: "test"
```

## Token Fetch

`QUERY token`

```graphql
query Token {
  token {
    token
  }
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

# Users CRUD

Basic User CRUD operation

## Users List with Condition

`QUERY Users`

```graphql
query Users($page: Int, $limit: Int, $sort: String, $order: Int) {
  users(page: $page, limit: $limit, sort: $sort, order: $order) {
    _id
    name
    email
    role
    verified
    phone
    city
    country
    urlTwitter
    urlGitHub
    createdAt
    updatedAt
  }
}
```

`Variables`

```graphql
"page": 1,
"limit": 5,
"sort": "name",
"order": 1
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## User Creation

`MUTATION register`

```graphql
mutation CreateUser($input: createUserInput) {
  createUser(input: $input) {
    message
    user {
      _id
      name
      email
      role
      verified
      phone
      city
      country
      urlTwitter
      urlGitHub
      updatedAt
      createdAt
    }
  }
}
```

`Variables`

```graphql
input {
    name: "yatin",
    email: "yatin7@gmail.com",
    password: "test",
    role: "admin" || "users"
    city: "delhi",
    country: "india",
    phone: "13124242323"
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## User Deletion

`MUTATION DeleteUser`

```graphql
mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    message
  }
}
```

`Variables`

```graphql
id: "618804402d5ee64df0d277d9"
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## User Single Fetch

`QUERY SingleUser`

```graphql
query SingleUser($id: String!) {
  singleUser(id: $id) {
    user {
      _id
      name
      email
      role
      verified
      phone
      city
      country
      urlTwitter
      urlGitHub
      createdAt
      updatedAt
    }
  }
}
```

`Variables`

```graphql
id: "61856a59c261f2738388d088"
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## User Update

`MUTATION updateUser`

```graphql
mutation Mutation($id: String!, $userDetails: UserDetailsInput!) {
  updateUser(id: $id, userDetails: $userDetails) {
    message
  }
}
```

`Variables`

```graphql
id: "6182bc91a1be9b300dda0ce1",
userDetails: {
    email: "monika23@gmail.com",
    name: "test",
    role: "user",
    phone: "3242423",
    city: "delhi",
    country: "UK"
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

# Profile CRUD

Basic Profile CRUD operation

## Profile Fetch

`QUERY Profile`

```graphql
query Profile {
  profile {
    name
    _id
    email
    role
    verified
    phone
    city
    country
    urlTwitter
    urlGitHub
    createdAt
    updatedAt
  }
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## Profile Update

`MUTATION updateProfile`

```graphql
mutation UpdateProfile($userDetails: UserDetailsInput!) {
  updateProfile(userDetails: $userDetails) {
    message
  }
}
```

`Variables`

```graphql
userDetails: {
    email: "test@gmail.com",
    name: "test",
    role: "user",
    phone: "3242423",
    city: "delhi",
    country: "India"
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## Change Password

`MUTATION changePassword`

```graphql
mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    message
  }
}
```

`Variables`

```graphql
oldPassword: "test2",
newPassword: "test"
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

# Cities CRUD

Basic Cities CRUD operation

## Cities List

`QUERY allCity`

```graphql
query Query {
  allCity {
    name
    _id
  }
}
```

`Headers`

```graphql
Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW
```

## Cities List with Condition

`GET /cities?filter=Bucaramanga&fields=name&page=1&limit=5&sort=name&order=1`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/cities?filter=Bucaramanga&fields=name&page=1&limit=5&sort=name&order=1'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

## City Creation

`POST /cities`

    curl --location -g --request POST 'http://[DOMAIN]:[PORT]/cities'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'name=Miami'

## Single City Fetch

`GET /cities/5bd08db979bbc504c14ebfdd`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/cities/5bd08db979bbc504c14ebfdd'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Accept-Language: es'

## City Update

`PATCH /cities/5bd08db979bbc504c14ebfdd`

    curl --location -g --request PATCH 'http://[DOMAIN]:[PORT]/cities/5bd08db979bbc504c14ebfdd'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'name=Seatle2'

## City Deletion

`DELETE /cities/5b38171b1843d58427c5d6c4`

    curl --location -g --request DELETE 'http://[DOMAIN]:[PORT]/cities/5b38171b1843d58427c5d6c4'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --data-urlencode 'name=Seatle2'
