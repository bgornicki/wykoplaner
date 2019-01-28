docker build ./backend/ -f ./backend/Dockerfile.development -t wykoplaner-backend

docker stack rm wykoplaner

until [ -z "$(docker service ls --filter label=com.docker.stack.namespace=wykoplaner -q)" ] || [ 60 -lt 0 ]; do
  echo 'Waiting for services to be removed...'
  sleep 1;
done

until [ -z "$(docker network ls --filter label=com.docker.stack.namespace=wykoplaner -q)" ] || [ 60 -lt 0 ]; do
  echo 'Waiting for network to be removed...'
  sleep 1;
done

docker stack deploy -c docker-compose.development.yml wykoplaner