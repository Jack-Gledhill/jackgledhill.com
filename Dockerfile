ARG NODE_VERSION="lts"
FROM node:${NODE_VERSION}-alpine AS builder

ARG COMMIT
ARG ENVIRONMENT="production"
ARG RELEASE

COPY . /app
WORKDIR /app

RUN npm install

ENV PUBLIC_COMMIT=$COMMIT
ENV PUBLIC_ENVIRONMENT=$ENVIRONMENT
ENV PUBLIC_RELEASE=$RELEASE

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine

ARG COMMIT="development"
ARG RELEASE="development"

LABEL org.opencontainers.image.authors="Jack Gledhill"
LABEL org.opencontainers.image.description="My personal CV / portfolio website introducing myself and the work I've done"
LABEL org.opencontainers.image.documentation="https://github.com/Jack-Gledhill/jackgledhill.com"
LABEL org.opencontainers.image.licenses="MPL-2.0"
LABEL org.opencontainers.image.revision=$COMMIT
LABEL org.opencontainers.image.source="https://github.com/Jack-Gledhill/jackgledhill.com"
LABEL org.opencontainers.image.title="jackgledhill.com"
LABEL org.opencontainers.image.url="https://jackgledhill.com"
LABEL org.opencontainers.image.version=$RELEASE

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
HEALTHCHECK --timeout=3s CMD curl -f http://localhost:8080 || exit 1
CMD ["nginx", "-g", "daemon off;"]