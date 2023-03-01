drop user c##petHospital;
--계정생성
CREATE USER c##petHospital IDENTIFIED BY pethospital
    DEFAULT TABLESPACE users
    TEMPORARY TABLESPACE temp
    PROFILE DEFAULT;
--권한부여
GRANT CONNECT, RESOURCE TO c##petHospital;
GRANT CREATE VIEW, CREATE SYNONYM TO c##petHospital;
GRANT UNLIMITED TABLESPACE TO c##petHospital;
--락 풀기
ALTER USER c##petHospital ACCOUNT UNLOCK;
