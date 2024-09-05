default := 'squid'
types := 'typegen'

set dotenv-load

process:
	@npx sqd process

serve:
	@npx squid-graphql-server

up *FLAGS:
  docker compose up {{FLAGS}}

upd:
	@just up -d

pull:
  docker compose pull

clear:
  docker compose rm -f
  rm -rf .data

down:
  docker compose down

build:
	npm run build

codegen:
	npx squid-typeorm-codegen

typegen: ksmVersion
	npx squid-substrate-typegen typegen.json

ksmVersion: explore

explore:
	npx squid-substrate-metadata-explorer \
		--archive $ARCHIVE_URL \
		--out kusamaVersions.jsonl

bug: down upd

reset: migrate

quickstart: migrate process

new-schema: codegen build update-db

prod TAG:
	gh pr create --base release-{{TAG}}

migrate:
	npx squid-typeorm-migration apply

update-db:
	npx squid-typeorm-migration generate

db: update-db migrate

test:
  npm run test:unit

improve TAG:
	npx sqd squid:update mimick@{{TAG}} -e VERSION={{TAG}}

release TAG:
	npx sqd squid:release mimick@{{TAG}}

kill TAG:
	npx sqd squid:kill mimick@{{TAG}}

exec:
	docker exec -it mimick-db-1 psql -U postgres -d squid

brutal TAG:
	npx sqd squid:update mimick@{{TAG}} --hardReset -e VERSION={{TAG}}

update-deps:
	npx npm-check-updates -u

tail TAG:
	npx sqd squid logs mimick@{{TAG}} -f

dump:
	docker exec -i mimick-db-1 /bin/bash -c "pg_dump --username postgres squid" > dump.sql

ink FILE OUT:
  npx squid-ink-typegen --abi=src/abi/{{FILE}}.json --output=src/abi/{{OUT}}.ts

psp TAG:
	npx squid-ink-typegen --abi=src/abi/erc{{TAG}}.json --output=src/abi/erc{{TAG}}.ts