drop user c##petHospital;
--��������
CREATE USER c##petHospital IDENTIFIED BY pethospita1234
    DEFAULT TABLESPACE users
    TEMPORARY TABLESPACE temp
    PROFILE DEFAULT;
--���Ѻο�
GRANT CONNECT, RESOURCE TO c##petHospital;
GRANT CREATE VIEW, CREATE SYNONYM TO c##petHospital;
GRANT UNLIMITED TABLESPACE TO c##petHospital;
--�� Ǯ��
ALTER USER c##petHospital ACCOUNT UNLOCK;