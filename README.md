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
- Create a Dockerfile for the application with prisma client generation
- Create docker image with host network - `docker build -t node-server .`
- Run node-server image with bridge network and connecting db to running pg-db container - `docker run -d --network prisma-node -p 3000:3000 -e DATABASE_URL="postgresql://myuser:mypassword@pg_db:5432/postgres" node-server`
- Create an entrypoint.sh file to run migrations during bridge network communication and add it in CMD of Dockerfile