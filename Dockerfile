FROM node:16-alpine3.11
# LABEL maintainer=UICORE<info@paques.id>

WORKDIR /angular-quiz
# Run as non-privileged user
# RUN addgroup -S xuser && adduser -S -g xuser xuser
# USER xuser
ENV NODE_ENV=development
ENV NODE_OPTIONS=--max-old-space-size=2048
COPY package*.json .
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /angular-quiz/dist/ /usr/share/nginx/html
