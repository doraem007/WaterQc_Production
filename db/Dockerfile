FROM mysql:8.0.36
WORKDIR /app

MAINTAINER nareubad112@gmail.com
ENV MYSQL_ROOT_PASSWORD Xe_3AtNwRUTBtbSa
ENV MYSQL_USER doraem0070
ENV MYSQL_PASSWORD P@ssword1234

COPY my.cnf /etc/mysql/conf.d/

ADD localhost.sql /docker-entrypoint-initdb.d

EXPOSE 3310
