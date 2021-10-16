FROM node:16-alpine as installation
WORKDIR /app

COPY . .

RUN npm ci

FROM installation as dev
WORKDIR /app
COPY --from=installation /app ./
CMD ["npm", "run", "dev"]

FROM installation as build
WORKDIR /app
COPY --from=installation /app ./
CMD ["npm", "run", "build"]

FROM installation as test
WORKDIR /app
COPY --from=installation /app ./
CMD ["npm", "run", "test"]

# FROM nginx:latest as prod
# WORKDIR /app
# COPY --from=build /app/build ./build
