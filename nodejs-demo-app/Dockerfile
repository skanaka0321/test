FROM node:20 as build-env

WORKDIR /app

COPY package*.json /app/
RUN npm ci --omit=dev

COPY . /app

FROM gcr.io/distroless/nodejs20-debian11

COPY --from=build-env /app /app

WORKDIR /app
EXPOSE 3000

CMD ["server.js"]
