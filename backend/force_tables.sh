#!/usr/bin/bash

POSITIONS_CMD="create table if not exists positions(
id serial primary key,
name varchar(60) unique not null);"

USERS_CMD="create table if not exists users(
id serial primary key,
name varchar(60) not null,
email varchar(255) unique not null,
phone varchar(13) unique not null,
\"positionId\" integer not null,
photo varchar(255) default 'default.jpg',
\"createdAt\" timestamp default current_timestamp,
\"updatedAt\" timestamp default current_timestamp,
constraint fk_position foreign key(\"positionId\") references positions(id));"

psql -h "localhost" -U "mark" -d "postgres" -c "drop database if exists abz_agency;"
psql -h "localhost" -U "mark" -d "postgres" -c "create database abz_agency;"

psql -h "localhost" -U "mark" -d "abz_agency" -c "drop table if exists users;"
psql -h "localhost" -U "mark" -d "abz_agency" -c "drop table if exists positions;"

psql -h "localhost" -U "mark" -d "abz_agency" -c "$POSITIONS_CMD"
psql -h "localhost" -U "mark" -d "abz_agency" -c "$USERS_CMD"
