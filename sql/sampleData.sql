drop table hospital;
create table hospital(
    hospital_id     number(10),
    hname           varchar(30),
    address         varchar(50),
    address_id      number(20),
    lat             number(10),
    lng             number(10),
    status_id       number(10),
    status          varchar(30)
);
--기본키
alter table hospital add constraint hospital_hospital_id_pk primary key(hospital_id);

--시퀀스생성
drop sequence hospital_hospital_id_seq;
create sequence hospital_hospital_id_seq;


--생성--
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '리버동물의료센터', '울산광역시 중구 태화로 250 (태화동)', 44456, 408742.380038267, 230578.087329673, 01, '영업/정상');
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '라온 동물 메디컬센터', '울산광역시 중구 번영로 524 (반구동)', 44508, 412098.146497538, 232133.993657291, 01, '영업/정상');
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '전영호동물병원', '울산광역시 중구 구교로 163 (반구동)', 44513, 412104.3710084, 231353.791548619, 01, '영업/정상');



commit;