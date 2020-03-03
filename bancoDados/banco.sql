create database db_cometa;
use db_cometa;

create table tb_registros(
id int not null auto_increment,
idoso int not null,
estudantes int not null,
internet int not null,
normal int not null, 
horarios time not null,
total int not null,
createdAt datetime not null,
updatedAt datetime not null,
primary key (id));

insert into tb_registros (idoso,estudantes,internet,normal,horarios,total) values ('2','5','10','15','08:00','32');

select * from tb_registros;

drop database db_cometa;
drop table tb_registros;
