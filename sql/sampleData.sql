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
--�⺻Ű
alter table hospital add constraint hospital_hospital_id_pk primary key(hospital_id);

--����������
drop sequence hospital_hospital_id_seq;
create sequence hospital_hospital_id_seq;


--����--
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '���������ǷἾ��', '��걤���� �߱� ��ȭ�� 250 (��ȭ��)', 44456, 408742.380038267, 230578.087329673, 01, '����/����');
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '��� ���� �޵��ü���', '��걤���� �߱� ������ 524 (�ݱ���)', 44508, 412098.146497538, 232133.993657291, 01, '����/����');
insert into hospital(hospital_id,hname,address,address_id,lat,lng,status_id,status)
     values(hospital_hospital_id_seq.nextval, '����ȣ��������', '��걤���� �߱� ������ 163 (�ݱ���)', 44513, 412104.3710084, 231353.791548619, 01, '����/����');



commit;