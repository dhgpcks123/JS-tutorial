const regex = /(https?:\/\/)?(www\.)?youtu\.be\/([a-zA-Z0-9-]{11})/;
const url = 'http://www.youtu.be/-ZClicWm0zM';
const url1 = 'https://www.youtu.be/-ZClicWm0zM';
const url2 = 'https://youtu.be/-ZClicWm0zM';
const url3 = 'youtu.be/-ZClicWm0zM';

console.log(url.match(regex));
//매칭 데이터, 매치오디는 그룹의 정보 등

const result = url.match(regex);

result[0]; //-> 모든 문자
result[1]; //-> 유튜브 아이디
