#!/bin/bash

################
#install mongo
################

#get mongodb binaries
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz

#extract mongodb
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz mongodb


################
#run mongo
################

#make data file
mkdir -p /data/db
sudo chown -R /data
mongodb & #start mongo in background