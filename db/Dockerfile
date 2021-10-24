FROM mariadb:10.4

ENV MARIADB_ROOT_PASSWORD=gist
ENV MARIADB_DATABASE=gist
ENV MARIADB_USER=gist
ENV MARIADB_PASSWORD=gist

ADD sql/favorite.sql /docker-entrypoint-initdb.d

EXPOSE 3306
