#!/bin/bash

pushd /home/m/workspace/scaena/

cp ../dream-server/build/classes/java/main/META-INF/swagger/dream-server-0.0.yml ./schemas/
npx openapi-typescript ./schemas/dream-server-0.0.yml -o ./schemas/dream-server-0.0.d.ts

popd
