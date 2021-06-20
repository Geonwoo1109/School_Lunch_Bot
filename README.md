# School_Lunch_Bot
Kakaotalk Bot

[사용된 기능]

1. "\u200d".repeat(500)
-> 전체보기 시에 사용되는 녀석

2. new Date().toISOString().replace(/-/g,"").slice(0,8)
-> 8자리 형식(YYYYMMDD)으로 날짜를 불러옴

3. for(i=0 ; i<6 ; i++) { }
-> 세팅값, 조건(~라면), 수행 => (6번 반복됨)

4. try{ A } catch (e) { B }
-> A시행 중 오류가 나면 오류내용을 e에 저장 후 B 실행
-> 오류를 잡아낼때 쓰는 구문. 에러가 나도 봇이 멈추지 않음


!!!다음 코드로 통합됨: https://github.com/Geonwoo1109/Overall_School_Bot
