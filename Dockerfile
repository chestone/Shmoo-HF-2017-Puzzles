FROM node:latest
ADD . /opt/steal_deathstar_plans
WORKDIR /opt/steal_deathstar_plans
RUN npm i
ENV VIRTUAL_HOST deathstar.web.hackfortress.net
EXPOSE 3000
CMD node app.js
