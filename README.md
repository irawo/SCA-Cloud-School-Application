# SCA-Cloud-School-Application

Link to Docker Repo: https://hub.docker.com/repository/docker/sumbic/nodejs-image-demo

Steps followed detailed here: https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

Output of command below:

sudo docker build -t sumbic/nodejs-image-demo .
Sending build context to Docker daemon  44.54kB
Step 1/9 : FROM node:10-alpine
10-alpine: Pulling from library/node
0a6724ff3fcd: Pull complete 
b258c56640f1: Pull complete 
51a5f3cdff58: Pull complete 
5e1af1677b84: Pull complete 
Digest: sha256:aa38d0212b474344d2a0d180a1a656a34cff8a4c785adcb116de510d3f17f699
Status: Downloaded newer image for node:10-alpine
 ---> deec1e19c524
Step 2/9 : RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
 ---> Running in b61764ddbff6
Removing intermediate container b61764ddbff6
 ---> e89b7184f9c7
Step 3/9 : WORKDIR /home/node/app
 ---> Running in 75845fabb2f5
Removing intermediate container 75845fabb2f5
 ---> a21b836c2e9a
Step 4/9 : COPY package*.json ./
COPY failed: no source files were specified
ubuntu@ip-172-31-6-49:~/Dockerfile$ nano dockerfile 
ubuntu@ip-172-31-6-49:~/Dockerfile$ sudo docker build -t sumbic/nodejs-image-demo .
Sending build context to Docker daemon  44.54kB
Step 1/8 : FROM node:10-alpine
 ---> deec1e19c524
Step 2/8 : RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
 ---> Using cache
 ---> e89b7184f9c7
Step 3/8 : WORKDIR /home/node/app
 ---> Using cache
 ---> a21b836c2e9a
Step 4/8 : USER node
 ---> Running in af3519b730c1
Removing intermediate container af3519b730c1
 ---> e9786c1a13b5
Step 5/8 : RUN npm install
 ---> Running in f6c1cc1ed6b3
npm WARN saveError ENOENT: no such file or directory, open '/home/node/app/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/home/node/app/package.json'
npm WARN app No description
npm WARN app No repository field.
npm WARN app No README data
npm WARN app No license field.

up to date in 0.163s
found 0 vulnerabilities

Removing intermediate container f6c1cc1ed6b3
 ---> d760f7986403
Step 6/8 : COPY --chown=node:node . .
 ---> 9d65fa891464
Step 7/8 : EXPOSE 8080
 ---> Running in ec019bb7c7fb
Removing intermediate container ec019bb7c7fb
 ---> 3c074f3a1e06
Step 8/8 : CMD [ "node", "app.js" ]
 ---> Running in 0485366b6f70
Removing intermediate container 0485366b6f70
 ---> a7041301559f
Successfully built a7041301559f
Successfully tagged sumbic/nodejs-image-demo:latest

sudo docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
sumbic/nodejs-image-demo   latest              a7041301559f        4 minutes ago       82.8MB
node                       10-alpine           deec1e19c524        10 days ago         82.7MB


sudo docker run --name nodejs-image-demo -p 80:8080 -d sumbic/nodejs-image-demo
7da026dd2e26065061fba729a69b09078fd3fd2715a115c06acd9dd822dfe2f0

sudo docker ps
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                  NAMES
7da026dd2e26        sumbic/nodejs-image-demo   "docker-entrypoint.s…"   58 seconds ago      Up 56 seconds       0.0.0.0:80->8080/tcp   nodejs-image-demo
