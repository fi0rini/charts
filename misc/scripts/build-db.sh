#!/bin/zsh
# Script to add dummy data into local mongo database using zsh

PROJECT_ROOT=${0%/*}/..

for comp in $(ls);do {
	mongoimport --drop --db $comp --collection=users --file=$PROJECT_ROOT/data/$comp/users.json
	mongoimport --drop --db $comp --collection=ambulances --file=$PROJECT_ROOT/data/$comp/ambulances.json
	mongoimport --drop --db $comp --collection=info --file=$PROJECT_ROOT/data/$comp/info.json
	mongoimport --drop --db $comp --collection=challenges --file=$PROJECT_ROOT/data/$comp/challenges.json
};done
