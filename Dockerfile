FROM node:23-alpine

ARG version="dev"
ARG revision="dev"

LABEL org.opencontainers.image.authors="Jack Gledhill"
LABEL org.opencontainers.image.description="My personal CV / portfolio website introducing myself and the work I've done"
LABEL org.opencontainers.image.documentation="https://github.com/Jack-Gledhill/jackgledhill.com"
LABEL org.opencontainers.image.licenses="MPL-2.0"
LABEL org.opencontainers.image.revision=$revision
LABEL org.opencontainers.image.source="https://github.com/Jack-Gledhill/jackgledhill.com"
LABEL org.opencontainers.image.title="jackgledhill.com"
LABEL org.opencontainers.image.url="https://jackgledhill.com"
LABEL org.opencontainers.image.version=$version

ENV NODE_ENV="production"

# Only copy over the files we actually need
COPY . /app
WORKDIR /app

RUN npm install --production=false
RUN npm run build

EXPOSE 4173

ENTRYPOINT ["npm", "run", "preview"]