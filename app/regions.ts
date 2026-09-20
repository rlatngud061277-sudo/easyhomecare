
export type Region = {
  name: string;
  slug: string;
  province: string;
};

const makeRegions = (
  province: string,
  entries: [string, string][]
): Region[] =>
  entries.map(([name, slug]) => ({
    name,
    slug,
    province,
  }));

export const regions: Region[] = [
  ...makeRegions("서울", [
    ["종로구", "jongno"],
    ["중구", "seoul-jung"],
    ["용산구", "yongsan"],
    ["성동구", "seongdong"],
    ["광진구", "gwangjin"],
    ["동대문구", "dongdaemun"],
    ["중랑구", "jungnang"],
    ["성북구", "seongbuk"],
    ["강북구", "gangbuk"],
    ["도봉구", "dobong"],
    ["노원구", "nowon"],
    ["은평구", "eunpyeong"],
    ["서대문구", "seodaemun"],
    ["마포구", "mapo"],
    ["양천구", "yangcheon"],
    ["강서구", "seoul-gangseo"],
    ["구로구", "guro"],
    ["금천구", "geumcheon"],
    ["영등포구", "yeongdeungpo"],
    ["동작구", "dongjak"],
    ["관악구", "gwanak"],
    ["서초구", "seocho"],
    ["강남구", "gangnam"],
    ["송파구", "songpa"],
    ["강동구", "gangdong"],
  ]),

  ...makeRegions("경기", [
    ["수원시", "suwon"],
    ["성남시", "seongnam"],
    ["의정부시", "uijeongbu"],
    ["안양시", "anyang"],
    ["부천시", "bucheon"],
    ["광명시", "gwangmyeong"],
    ["평택시", "pyeongtaek"],
    ["동두천시", "dongducheon"],
    ["안산시", "ansan"],
    ["고양시", "goyang"],
    ["과천시", "gwacheon"],
    ["구리시", "guri"],
    ["남양주시", "namyangju"],
    ["오산시", "osan"],
    ["시흥시", "siheung"],
    ["군포시", "gunpo"],
    ["의왕시", "uiwang"],
    ["하남시", "hanam"],
    ["용인시", "yongin"],
    ["파주시", "paju"],
    ["이천시", "icheon"],
    ["안성시", "anseong"],
    ["김포시", "gimpo"],
    ["화성시", "hwaseong"],
    ["광주시", "gwangju-gyeonggi"],
    ["양주시", "yangju"],
    ["포천시", "pocheon"],
    ["여주시", "yeoju"],
    ["연천군", "yeoncheon"],
    ["가평군", "gapyeong"],
    ["양평군", "yangpyeong"],
  ]),

  ...makeRegions("인천", [
    ["중구", "incheon-jung"],
    ["동구", "incheon-dong"],
    ["미추홀구", "michuhol"],
    ["연수구", "yeonsu"],
    ["남동구", "namdong"],
    ["부평구", "bupyeong"],
    ["계양구", "gyeyang"],
    ["서구", "incheon-seo"],
    ["강화군", "ganghwa"],
    ["옹진군", "ongjin"],
  ]),

  ...makeRegions("충남", [
    ["천안시", "cheonan"],
    ["공주시", "gongju"],
    ["보령시", "boryeong"],
    ["아산시", "asan"],
    ["서산시", "seosan"],
    ["논산시", "nonsan"],
    ["계룡시", "gyeryong"],
    ["당진시", "dangjin"],
    ["금산군", "geumsan"],
    ["부여군", "buyeo"],
    ["서천군", "seocheon"],
    ["청양군", "cheongyang"],
    ["홍성군", "hongseong"],
    ["예산군", "yesan"],
    ["태안군", "taean"],
  ]),

  ...makeRegions("충북", [
    ["청주시", "cheongju"],
    ["충주시", "chungju"],
    ["제천시", "jecheon"],
    ["보은군", "boeun"],
    ["옥천군", "okcheon"],
    ["영동군", "yeongdong"],
    ["증평군", "jeungpyeong"],
    ["진천군", "jincheon"],
    ["괴산군", "goesan"],
    ["음성군", "eumseong"],
    ["단양군", "danyang"],
  ]),
];

export const getRegion = (slug: string) =>
  regions.find((region) => region.slug === slug);

export const getRegionName = (region: Region) =>
  `${region.province} ${region.name}`;

export const getRegionUrl = (region: Region) =>
  `/tree-removal/${region.slug}`;
