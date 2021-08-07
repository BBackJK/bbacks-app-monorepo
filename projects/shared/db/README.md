# docker compose로 불러온 mariadb volumn 관련 저장소

## conf.d

``my.cnf`` 파일에 기본 설정 셋팅

## data

mariadb 기본 데이터관련 설정 volumn이 저장될 공간 

따로 파일은 추가 x

## initdb.d

``create_table.sql``와 ``load_data.sql`` 파일을 만들어서 처음 로드할 때 필요한 테이블과 데이터를 정의


> 우선 생각이 compose밖에 안나서 compose로 이미지 실행중.. 단일 이미지로도 충분히 가능한 부분.. (혹시 나중에 다른 서비스를 추가해야할 일 (ex: redis 등) 이 있을지 모르므로 ...)

## 실행

``docker-compose -f docker-db.yml up -d``

## 실행중인 컨테이너에 접속

``docker exec -it [실행중인 container ID - 5자리] /bin/bash``
