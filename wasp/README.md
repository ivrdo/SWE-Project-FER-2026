# sonar (Wasp)

# Instalacija

Općenito potrebno je instalirati sljedeći software:

- Node.js >= 24.14.1
- Wasp CLI 0.26: `npm i -g @wasp.sh/wasp-cli@0.26`
- Docker Desktop / samo Docker

## Windows

- Na Windowsu je potrebno instalirati IntelliJ IDEA Ultimate i Docker Desktop. Različite upute su već dane.
- Na otvaranje direktorija projekta, IntelliJ bi trebao ponuditi "Reopen in Container"
- Provesti set up naredbe, ali bez `docker compose up -d db`: baza se pokreće sama
  s containerom, a Node i Wasp CLI su već instalirani

## MacOS

- Instalirati Docker Desktop i IntelliJ IDEA Ultimate
- Koristeći [Homebrew](https://brew.sh/) instalirati node 24, znači `brew install node@24`
- Instalirati wasp, `npm i -g @wasp.sh/wasp-cli@0.26`
- Provesti set up naredbe

## Linux

- Instalirati docker binary s compose pluginom i IntelliJ IDEA Ultimate
- Instalirati npm / node >= 24.14.1
- Instalirati wasp, `npm i -g @wasp.sh/wasp-cli@0.26`
- Provesti set up naredbe 

## Prvo pokretanje

Iz korijena repozitorija:

```sh
docker compose up -d db
cd wasp
cp .env.server.example .env.server
wasp install
wasp db migrate-dev
wasp start
```

- klijent: http://localhost:3000
- server: http://localhost:3001

`docker compose up -d` (ili "Start All" u IntelliJ-u) pokreće samo bazu; servisi
`server` i `caddy` su u profilu `prod`.

## Svaki dan

```sh
docker compose up -d db
cd wasp
wasp start
```

Kad netko commita nove migracije, prije `wasp start` pokrenuti `wasp db migrate-dev`.

## Nakon promjene `schema.prisma`

1. Zaustaviti `wasp start`. Wasp ne dopušta dvije naredbe nad istim projektom
   istovremeno.
2. `wasp db migrate-dev --name <ime>` (`<ime>` kratko opisuje promjenu)
3. Commitati novu mapu u `migrations/` zajedno s promjenom sheme.

## Baza

- zaustavljanje: `docker compose stop db`
- brisanje svih podataka: `docker compose down -v`
- lozinka je `dev`, osim ako je u `../.env` postavljen `DB_PASSWORD`. Lozinka u
  `DATABASE_URL` u `.env.server` mora biti ista.
