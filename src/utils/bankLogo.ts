export const getBankLogo = (bank: string) => {
  if (bank.match(/국민|KB|케이비/g)) return '/images/banks/kb.png';
  else if (bank.match(/신한|제주/g)) return '/images/banks/shinhan.png';
  else if (bank.match(/농협|엔에이치/g)) return '/images/banks/nh.png';
  else if (bank.match(/우리/g)) return '/images/banks/woori.png';
  else if (bank.match(/카카오/g)) return '/images/banks/kakao.png';
  else if (bank.match(/케이뱅크/g)) return '/images/banks/kbank.png';
  else if (bank.match(/제일/g)) return '/images/banks/sc.png';
  else if (bank.match(/토스/g)) return '/images/banks/toss.png';
  else if (bank.match(/대구|디지비/g)) return '/images/banks/daegu.png';
  else if (bank.match(/대신/g)) return '/images/banks/daeshin.png';
  else if (bank.match(/한화/g)) return '/images/banks/hanhwa.png';
  else if (bank.match(/한국/g)) return '/images/banks/hankuk.png';
  else if (bank.match(/현대/g)) return '/images/banks/hyundai.png';
  else if (bank.match(/전북|광주/g)) return '/images/banks/jeonbuk_gwangju.png';
  else if (bank.match(/키움/g)) return '/images/banks/kium.png';
  else if (bank.match(/교보/g)) return '/images/banks/kyobo.png';
  else if (bank.match(/메리츠/g)) return '/images/banks/meritz.png';
  else if (bank.match(/미래/g)) return '/images/banks/mirae.png';
  else if (bank.match(/삼성/g)) return '/images/banks/samsung.png';
  else if (bank.match(/산업/g)) return '/images/banks/sanup.png';
  else if (bank.match(/수협/g)) return '/images/banks/suhyup.png';
  else if (bank.match(/기업/g)) return '/images/banks/ibk.png';
  else if (bank.match(/하나/g)) return '/images/banks/hana.png';
  else if (bank.match(/OK|오케이/g)) return '/images/banks/ok.png';
  else if (bank.match(/웰컴/g)) return '/images/banks/welcome.png';
  else if (bank.match(/JT/g)) return '/images/banks/jt.png';
  else if (bank.match(/BNK|비엔케이|부산|경남/g)) return '/images/banks/bnk.png';
  else if (bank.match(/폭스바겐/g)) return '/images/banks/volks.png';
  else if (bank.match(/삼호/g)) return '/images/banks/sh.png';
  else if (bank.match(/예가람|흥국|고려/g)) return '/images/banks/yegaram.png';
  else if (bank.match(/DB|디비/g)) return '/images/banks/db.png';
  else if (bank.match(/진주|스마트|스타|청주|모아|민국/g)) return '/images/banks/jinju.png';
  else if (bank.match(/상상인/g)) return '/images/banks/sangsang.png';
  else if (bank.match(/한성/g)) return '/images/banks/hansung.png';
  else if (bank.match(/페퍼/g)) return '/images/banks/peper.png';
  else if (bank.match(/세람/g)) return '/images/banks/seram.png';
  else if (bank.match(/SBI/g)) return '/images/banks/sbi.png';
  else if (bank.match(/OSB/g)) return '/images/banks/osb.png';
  else if (bank.match(/애큐온/g)) return '/images/banks/eq.png';
  else if (bank.match(/롯데/g)) return '/images/banks/lotte.png';
  else if (bank.match(/비씨/g)) return '/images/banks/bc.png';
  else return '/images/banks/no-bank.png';
};

/*
㈜디지비캐피탈
㈜우리카드
경남은행
고려저축은행
광주은행
교보생명보험주식회사
농협생명보험주식회사
농협은행주식회사
대구은행
대신저축은행
동원제일저축은행
디비저축은행
롯데카드㈜
롯데캐피탈㈜
메리츠캐피탈㈜
모아저축은행
미래에셋생명보험주식회사
미래에셋캐피탈㈜
민국저축은행
부산은행
비씨카드㈜
비엔케이캐피탈㈜
삼성생명보험주식회사
삼성카드㈜
삼호저축은행
상상인플러스저축은행
세람저축은행
수협은행
스마트저축은행
스타저축은행
신한라이프생명보험주식회사
신한은행
신한은행
신한저축은행
신한카드㈜
애큐온저축은행
엔에이치농협캐피탈㈜
엔에이치저축은행
예가람저축은행
오케이캐피탈 ㈜
우리금융캐피탈㈜
우리은행
웰컴저축은행
전북은행
제이비우리캐피탈㈜
제주은행
주식회사 카카오뱅크
주식회사 케이뱅크
중소기업은행
진주저축은행
청주저축은행
케이비캐피탈㈜
키움예스저축은행
키움저축은행
토스뱅크 주식회사
페퍼저축은행
폭스바겐파이낸셜서비스코리아㈜
하나은행
하나저축은행
하나카드㈜
한국산업은행
한국스탠다드차타드은행
한국씨티은행
한국캐피탈㈜
한국투자저축은행
한성저축은행
한화생명보험주식회사
한화저축은행
현대카드㈜
현대캐피탈㈜
흥국생명보험주식회사
BNK저축은행
DB손해보험주식회사
JT저축은행
JT친애저축은행
KB저축은행
OK저축은행
OSB저축은행
SBI저축은행
*/
