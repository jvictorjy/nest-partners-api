FROM docker.io/library/node:18-alpine

WORKDIR /home/node/app

COPY . .

RUN apk add bash
RUN apk add --update --no-cache openssl3 procps


# Creates /.npm folder and sets 775 to non-root user, required for npx prisma migrate deploy.
RUN mkdir -p /npm && chmod -R 775 /npm

COPY ./docker-entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "/usr/bin/entrypoint.sh" ]

#CMD tail -f /dev/null
CMD ["npm", "run", "start:dev"]

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1
