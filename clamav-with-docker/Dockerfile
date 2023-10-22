FROM alpine:3.17
WORKDIR /filescanner
RUN mkdir /filescanner/uploads
RUN apk update
RUN apk add clamav clamav-daemon npm
RUN freshclam
COPY index.js /filescanner
COPY package.json /filescanner
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
