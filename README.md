## API Spec

Visit localhost:800/api for the API specification
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


This app connects to a local postgres database using prisma. To use the endpoints you should have a database set up with the following tables

Your .env file should include DATABASE_URL="postgresql://user:@host:port/DatabaseName?schema=public"

CREATE TABLE IF NOT EXISTS public."Board"
(
    name character varying COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 )
)

CREATE TABLE IF NOT EXISTS public."Column"
(
    name character varying COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    color character varying COLLATE pg_catalog."default",
    board bigint,
    CONSTRAINT "Column_pkey" PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public."Task"
(
    name character varying COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    description character varying COLLATE pg_catalog."default",
    parent bigint,
    "column" bigint,
    board bigint
)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
