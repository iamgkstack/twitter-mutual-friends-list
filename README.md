# twitter-mutual-friends-list
Full Stack Project for find out the mutual friend lists

## Requirements

* NODE: `>= 10`
* YARN: `1.19.1`

## Clone the Project

```bash 
# clone the project
git clone https://github.com/iamgkstack/twitter-mutual-friends-list.git
```


## Setup for the BackEnd

```bash 
# Go to the backend folder
cd backend

# install the dependencies
yarn

# start the project
yarn start

# test, if you are using Windows OS
yarn test_windows_os

# test, if you are using Linux OS 
yarn test_linux_os
```

* This starts the server on the port 5200

## APIs availabe

Get all the the mutual friends between two given twitter accounts

```curl
curl -X GET 'http://localhost:5200/api/v1/mutual/friends?user1=iamgk5296&user2=RamKishorBajpai'
```



## Setup for the FrontEnd

```bash 
# Go to the frontend folder
cd frontend

# install the dependencies
yarn

# start the project
yarn start
```
