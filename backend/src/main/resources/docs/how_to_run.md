## How to run?

The application can be run in development or production mode by applying the following steps.
<br/>

### Prerequisites

The following apps should be installed before running the application:

- A command line app
- Docker Desktop 
<br/>

> **Note** <br/>
> For more information regarding the system requirements, etc. refer to the following pages: <br/>
> [Install on Mac](https://docs.docker.com/desktop/install/mac-install/)<br/>
> [Install on Windows](https://docs.docker.com/desktop/install/windows-install/)<br/>
> [Install on Linux](https://docs.docker.com/desktop/install/linux-install/)<br/>

<br/>

### Running app in Development mode

In order to run the application in development mode, apply the following steps:

1. Run Docker desktop.

<br/>


2. Open command prompt window and clone the project from GitHub using the following command:

```
git clone https://github.com/yildizmy/e-wallet.git
```
<br/>



3. Change the current directory to the project directory where the `docker-compose.yml` file is in:

```
cd e-wallet
```
<br/>


4. Run the following command to compose and start up database container of the application on Docker. 

> **Note** <br/>
> If you want to use different environment variables than predefined, you can update them via `.env` file located in the project root before running this command.

```
docker-compose up --build
```
<br/>

5. After database container starts on Docker, open backend project using IntelliJ IDEA and run the application.

> **Note** <br/>
> If _Lombok requires enabled annotation processing_ dialog appears at this stage, click _Enable annotation processing_ button.

<br/>

6. Open another command prompt window/tab and change the current directory to the frontend project:

```
cd e-wallet/frontend
```
<br/>

7. Run the following commands respectively:

```
npm install
```

```
npm start
```
<br/>

At this step, the application starts on your default browser (http://localhost:3000/) and the accounts given in the "User Accounts" section can be used for logging in to the application.
Alternatively, API requests can be sent to the endpoints using Postman, etc. For this purpose, see the details on [How to test?](how_to_test.md) section.

<br/>

### User Accounts

```
username: johndoe
password: johnd@e
role: admin

username: lindacalvin
password: lindac@lvin
role: admin

username: jeffreytaylor
password: jeffreyt@ylor
role: user
```

<br/>


### Running app in Production mode

In order to run the application in production mode, apply the following steps:

1. Run Docker desktop.

<br/>

2. Open command prompt window and clone the project from GitHub using the following command:

```
git clone https://github.com/yildizmy/e-wallet.git
```
<br/>

3. Change the current directory to the project directory where the `docker-compose.yml` file is in:

```
cd e-wallet
```
<br/>

4. Run the following command:

> **Warning** <br/>
> Before running this command, if exists, delete previously composed containers (`db`, `backend`, `frontend`), images (`e-wallet-backend`, `e-wallet-frontend`) and volumes (`e-wallet_db-data`) belonging to the application. 
On the other hand, if the app is running on IntelliJ IDEA, stop it to prevent a possible port error. 

```
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

<br/>

By running this command, application app and database containers are built and start up. After this step is completed, the application will be available on http://localhost:3000 and the accounts given in the "User Accounts" section can be used for logging in to the application. 
Alternatively, API requests can be sent to the endpoints using Postman, etc. For this purpose, see the details on [How to test?](how_to_test.md) section. 
 
<br/>

> **Note** <br/>
> For connecting to the application database, the following url and credentials given in the `.env` file can be used. 

```
url: jdbc:postgresql://localhost:5432/<${db_name}>
```

<br/>

### Troubleshooting

If there is any process using the same port of the application, _"ports are not available"_ or _"port is already in use"_ errors might be encountered. 
In this situation, terminating that process and restarting the related containers will fix the problem. If the problem continues, 
delete the containers (db, backend and frontend) and re-run the `docker compose` command in the previous step. 

<br/>

### Documentation

[docker compose up](https://docs.docker.com/engine/reference/commandline/compose_up/)<br/>


<br/>
<br/>