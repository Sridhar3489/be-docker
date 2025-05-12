# be-docker

- npm init -y
- npm install typescript
- npx tsc --init
- npm install prisma express @types/express
- npx prisma init
- ``` bash
    docker run -d 
    -p 5432:5432 
    --name pg-db 
    -e POSTGRES_USER=myuser  
    -e POSTGRES_DB=mydb 
    -e POSTGRES_PASSWORD=mypassword 
    postgres
    ```

### Docker Execution Steps
- Create a network - `docker network create prisma-node`
- Create a db container with network and name - `docker run -d -p 5433:5432 --network prisma node --name pg_db postgres`
- Create a Dockerfile for the application with env variable pointing to host network(host machine - localhost(since we mapped db ports to 5433 of local host machine)) to run prisma migrate(to get the schemas)
- Create docker image with host network - `docker build --network host -t node-server .`
- Run node-server image with bridge network and connecting db to running pg-db container - `docker run -d --network prisma-node -p 3000:3000 -e DATABASE_URL="postgresql://myuser:mypassword@pg_db:5432/postgres" node-server`
