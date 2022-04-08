#!/bin/bash

docker load -i frontend.tar
docker load -i server.tar
docker load -i fileserver.tar

docker-compose -f "docker-compose-run.yaml" up -d --build
