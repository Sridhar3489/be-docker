FROM node:22-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

ENV DATABASE_URL="postgresql://myuser:mypassword@localhost:5433/postgres"

RUN npx prisma migrate dev

RUN npx prisma generate

RUN npm run build

CMD ["npm", "start"]