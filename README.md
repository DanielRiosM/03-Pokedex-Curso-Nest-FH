<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Run project

1. Clone repository
2. Run

```
$ npm run start:dev
```

3. Install NestJS CLI

```
$ npm i -g @nestjs/cli
```
4. Up Database

```
$ docker-compose up -d
```

5. Clone the archive ```.env.template``` and rename to ```.env```

6. Fill in the environment variables defined in the ```.env```

7. Run the project in development mode

```
$ npm run start:dev
```

8. Rebuild the data base with seed

```
http://localhost:3000/api/v2/seed
```
# Stack used

- NestJS
- MongoDB
- Docker
- Docker Compose