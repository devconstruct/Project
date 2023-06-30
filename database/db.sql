CREATE DATABASE database_links;

USE database_links;

--tabla de usuarios

create table users(
     id int(11) NOT NULL,
     username varchar(16) NOT NULL,
     password varchar(60) NOT NULL,
     fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    modify id int(11) NOT NULL AUTO_INCREMENT;

--tabla de links
create table links(
    id int(11) NOT NULL,
    title varchar(150) NOT NULL,
    url varchar(255) NOT NULL,
    description TEXT,
    user_id int(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

alter table links
    ADD PRIMARY KEY (id); 

    ALTER TABLE links
    modify id int(11) not null AUTO_INCREMENT;