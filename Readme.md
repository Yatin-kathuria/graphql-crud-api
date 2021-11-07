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

    mutation Mutation($name: String!, $email: String!, $password: String!, $role: AllowedRoles!) {
      register(name: $name, email: $email, password: $password, role: $role) {
        message
      }
    }

`Variables`

    name: "yatin",
    email: "yatin7@gmail.com",
    password: "test",
    role: "admin" || "users"

## Verify the User

`MUTATION verify`

    mutation Mutation($verifyId: String!) {
        verify(id: $verifyId) {
            message
        }
    }

`Variables`

    verifyId: "61856a59c261f2738388d088"

## Forgot Password

`MUTATION forgetPassword`

    mutation ForgetPassword($email: String!) {
        forgetPassword(email: $email) {
            resetToken
            message
        }
    }

`Variables`

    email: "test@test.com"

## Reset Password

`MUTATION reset`

    mutation Reset($resetToken: String!, $password: String!) {
        reset(resetToken: $resetToken, password: $password) {
            message
        }
    }

`Variables`

    resetToken: "2MzcxMDExfQ.43X3Rxfx-aoUCMdYxrgMGcFUs5inGBK6H1GDiF3PlY4"
    password: "test"

## Login

`MUTATION login`

    mutation MUTATION($email: String! ,$password: String!) {
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

`Variables`

    email: "yatin7@gmail.com",
    password: "test"

## Token Fetch

`QUERY token`

    query Token {
        token {
            token
        }
    }

`Headers`

    Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW

# Users CRUD

Basic User CRUD operation

## Users List with Condition

`GET /users?filter=ad&fields=name,email&page=1&limit=10&sort=name&order=-1`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/users?filter=ad&fields=name,email&page=1&limit=10&sort=name&order=-1'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

## User Creation

`MUTATION register`

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

`Variables`

    name: "yatin",
    email: "yatin7@gmail.com",
    password: "test",
    role: "admin" || "users"
    city: "delhi",
    country: "india",
    phone: "13124242323"

`Headers`

    Authorization: Bearer eyJhbGciOiJIUzI1NiIs.eyJfaWQiOiI2MTg1NmE1OW

## User Deletion

`DELETE /users/5aab2443ef417d2d19e6c8f2`

    curl --location -g --request DELETE 'http://[DOMAIN]:[PORT]/users/5aab2443ef417d2d19e6c8f2'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

## User Single Fetch

`GET /users/5aa1c2c35ef7a4e97b5e995a`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/users/5aa1c2c35ef7a4e97b5e995a'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

## User Update

`PATCH /users/5aa1c2c35ef7a4e97b5e995a`

    curl --location --request PATCH 'http://localhost:3000/users/5aa1c2c35ef7a4e97b5e995a'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'name=New Name'
    --data-urlencode 'email=new@email.com'
    --data-urlencode 'role=admin'
    --data-urlencode 'phone=12345'
    --data-urlencode 'city=Cali'
    --data-urlencode 'country=Colombia'

# Profile CRUD

Basic Profile CRUD operation

## Profile Fetch

`GET /profile`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/profile'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

## Profile Update

`PATCH /profile`

    curl --location -g --request PATCH 'http://[DOMAIN]:[PORT]/profile'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'name=My Name'
    --data-urlencode 'urlTwitter=https://hello.com'
    --data-urlencode 'urlGitHub=https://hello.io'
    --data-urlencode 'phone=444444'
    --data-urlencode 'city=Boston2'
    --data-urlencode 'country=Colombia2'

## Change Password

`POST /profile/changePassword`

    curl --location -g --request POST 'http://[DOMAIN]:[PORT]/profile/changePassword'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'oldPassword=12345'
    --data-urlencode 'newPassword=12345'

# Cities CRUD

Basic Cities CRUD operation

## Cities List

`GET /cities/all`

    curl --location -g --request GET 'http://[DOMAIN]:[PORT]/cities/all'
    --header 'Authorization: Bearer [AUTH_TOKEN_STRING]'

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
