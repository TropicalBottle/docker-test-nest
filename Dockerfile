FROM node:alpine as DEPENDANCY
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:alpine as BUILD
WORKDIR /app
COPY --from=DEPENDANCY /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:alpine as RUN
WORKDIR /app
COPY --from=BUILD /app/dist ./dist
COPY --from=BUILD /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
