import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class StationNamesService {

  private readonly stationNamesAndCRS = [
    {
      stationName: 'Aberdare',
      crsCode: 'ABA'
    },
    {
      stationName: 'Aberdour',
      crsCode: 'AUR'
    },
    {
      stationName: 'Aberdovey',
      crsCode: 'AVY'
    },
    {
      stationName: 'Aber',
      crsCode: 'ABE'
    },
    {
      stationName: 'Abergele & Pensarn',
      crsCode: 'AGL'
    },
    {
      stationName: 'Abercynon',
      crsCode: 'ACY'
    },
    {
      stationName: 'Aberdeen',
      crsCode: 'ABD'
    },
    {
      stationName: 'Abererch',
      crsCode: 'ABH'
    },
    {
      stationName: 'Abergavenny',
      crsCode: 'AGV'
    },
    {
      stationName: 'Aberystwyth',
      crsCode: 'AYW'
    },
    {
      stationName: 'Abbey Wood (London)',
      crsCode: 'ABW'
    },
    {
      stationName: 'Acton Bridge',
      crsCode: 'ACB'
    },
    {
      stationName: 'Achanalt',
      crsCode: 'AAT'
    },
    {
      stationName: 'Achnashellach',
      crsCode: 'ACH'
    },
    {
      stationName: 'Auchinleck',
      crsCode: 'AUK'
    },
    {
      stationName: 'Achnasheen',
      crsCode: 'ACN'
    },
    {
      stationName: 'Acklington',
      crsCode: 'ACK'
    },
    {
      stationName: 'Acle',
      crsCode: 'ACL'
    },
    {
      stationName: 'Acocks Green',
      crsCode: 'ACG'
    },
    {
      stationName: 'Accrington',
      crsCode: 'ACR'
    },
    {
      stationName: 'Acton Central',
      crsCode: 'ACC'
    },
    {
      stationName: 'Acton Main Line',
      crsCode: 'AML'
    },
    {
      stationName: 'Adderley Park',
      crsCode: 'ADD'
    },
    {
      stationName: 'Addiewell',
      crsCode: 'ADW'
    },
    {
      stationName: 'Adisham',
      crsCode: 'ADM'
    },
    {
      stationName: 'Adlington (Cheshire)',
      crsCode: 'ADC'
    },
    {
      stationName: 'Addlestone',
      crsCode: 'ASN'
    },
    {
      stationName: 'Adlington (Lancs)',
      crsCode: 'ADL'
    },
    {
      stationName: 'Adwick',
      crsCode: 'AWK'
    },
    {
      stationName: 'Aughton Park',
      crsCode: 'AUG'
    },
    {
      stationName: 'Aigburth',
      crsCode: 'AIG'
    },
    {
      stationName: 'Ainsdale',
      crsCode: 'ANS'
    },
    {
      stationName: 'Aintree',
      crsCode: 'AIN'
    },
    {
      stationName: 'Airbles',
      crsCode: 'AIR'
    },
    {
      stationName: 'Airdrie',
      crsCode: 'ADR'
    },
    {
      stationName: 'Newcastle Airport Metro',
      crsCode: 'APN'
    },
    {
      stationName: 'Albany Park',
      crsCode: 'AYP'
    },
    {
      stationName: 'Albrighton',
      crsCode: 'ALB'
    },
    {
      stationName: 'Alderley Edge',
      crsCode: 'ALD'
    },
    {
      stationName: 'Aldermaston',
      crsCode: 'AMT'
    },
    {
      stationName: 'Aldershot',
      crsCode: 'AHT'
    },
    {
      stationName: 'Aldrington',
      crsCode: 'AGT'
    },
    {
      stationName: 'Liverpool South Parkway',
      crsCode: 'LPY'
    },
    {
      stationName: 'Alexandra Palace',
      crsCode: 'AAP'
    },
    {
      stationName: 'Alfreton',
      crsCode: 'ALF'
    },
    {
      stationName: 'Allens West',
      crsCode: 'ALW'
    },
    {
      stationName: 'Alloa',
      crsCode: 'ALO'
    },
    {
      stationName: 'Alness',
      crsCode: 'ASS'
    },
    {
      stationName: 'Alnmouth',
      crsCode: 'ALM'
    },
    {
      stationName: 'Alresford (Essex)',
      crsCode: 'ALR'
    },
    {
      stationName: 'Alsager',
      crsCode: 'ASG'
    },
    {
      stationName: 'Aylesham',
      crsCode: 'AYH'
    },
    {
      stationName: 'Althorne',
      crsCode: 'ALN'
    },
    {
      stationName: 'Altnabreac',
      crsCode: 'ABC'
    },
    {
      stationName: 'Alton',
      crsCode: 'AON'
    },
    {
      stationName: 'Althorpe',
      crsCode: 'ALP'
    },
    {
      stationName: 'Altrincham',
      crsCode: 'ALT'
    },
    {
      stationName: 'Alvechurch',
      crsCode: 'ALV'
    },
    {
      stationName: 'Alexandria',
      crsCode: 'ALX'
    },
    {
      stationName: 'Alexandra Parade',
      crsCode: 'AXP'
    },
    {
      stationName: 'Ambergate',
      crsCode: 'AMB'
    },
    {
      stationName: 'Amersham',
      crsCode: 'AMR'
    },
    {
      stationName: 'Amberley',
      crsCode: 'AMY'
    },
    {
      stationName: 'Ammanford',
      crsCode: 'AMF'
    },
    {
      stationName: 'Ancaster',
      crsCode: 'ANC'
    },
    {
      stationName: 'Andover',
      crsCode: 'ADV'
    },
    {
      stationName: 'Anderston',
      crsCode: 'AND'
    },
    {
      stationName: 'Anerley',
      crsCode: 'ANZ'
    },
    {
      stationName: 'Angel Road',
      crsCode: 'AGR'
    },
    {
      stationName: 'Angmering',
      crsCode: 'ANG'
    },
    {
      stationName: 'Annan',
      crsCode: 'ANN'
    },
    {
      stationName: 'Ansdell & Fairhaven',
      crsCode: 'AFV'
    },
    {
      stationName: 'Anniesland',
      crsCode: 'ANL'
    },
    {
      stationName: 'Appleby',
      crsCode: 'APP'
    },
    {
      stationName: 'Appledore (Kent)',
      crsCode: 'APD'
    },
    {
      stationName: 'Apperley Bridge',
      crsCode: 'APY'
    },
    {
      stationName: 'Appley Bridge',
      crsCode: 'APB'
    },
    {
      stationName: 'Appleford',
      crsCode: 'APF'
    },
    {
      stationName: 'Apsley',
      crsCode: 'APS'
    },
    {
      stationName: 'Arbroath',
      crsCode: 'ARB'
    },
    {
      stationName: 'Arrochar & Tarbet',
      crsCode: 'ART'
    },
    {
      stationName: 'Ardgay',
      crsCode: 'ARD'
    },
    {
      stationName: 'Ardlui',
      crsCode: 'AUI'
    },
    {
      stationName: 'Ardrossan Harbour',
      crsCode: 'ADS'
    },
    {
      stationName: 'Ardrossan South Beach',
      crsCode: 'ASB'
    },
    {
      stationName: 'Ardrossan Town',
      crsCode: 'ADN'
    },
    {
      stationName: 'Ardwick',
      crsCode: 'ADK'
    },
    {
      stationName: 'Argyle Street',
      crsCode: 'AGS'
    },
    {
      stationName: 'Arisaig',
      crsCode: 'ARG'
    },
    {
      stationName: 'Arlesey',
      crsCode: 'ARL'
    },
    {
      stationName: 'Armadale (W Lothian)',
      crsCode: 'ARM'
    },
    {
      stationName: 'Armathwaite',
      crsCode: 'AWT'
    },
    {
      stationName: 'Arnside',
      crsCode: 'ARN'
    },
    {
      stationName: 'Arram',
      crsCode: 'ARR'
    },
    {
      stationName: 'Arundel',
      crsCode: 'ARU'
    },
    {
      stationName: 'Ascot',
      crsCode: 'ACT'
    },
    {
      stationName: 'Ascott-under-Wychwood',
      crsCode: 'AUW'
    },
    {
      stationName: 'Ashford (Surrey)',
      crsCode: 'AFS'
    },
    {
      stationName: 'Ashfield',
      crsCode: 'ASF'
    },
    {
      stationName: 'Ashburys',
      crsCode: 'ABY'
    },
    {
      stationName: 'Ashchurch for Tewkesbury',
      crsCode: 'ASC'
    },
    {
      stationName: 'Ashtead',
      crsCode: 'AHD'
    },
    {
      stationName: 'Ashford International',
      crsCode: 'AFK'
    },
    {
      stationName: 'Ash',
      crsCode: 'ASH'
    },
    {
      stationName: 'Ashley',
      crsCode: 'ASY'
    },
    {
      stationName: 'Ashton-under-Lyne',
      crsCode: 'AHN'
    },
    {
      stationName: 'Ashurst (Kent)',
      crsCode: 'AHS'
    },
    {
      stationName: 'Ash Vale',
      crsCode: 'AHV'
    },
    {
      stationName: 'Ashwell & Morden',
      crsCode: 'AWM'
    },
    {
      stationName: 'Askam',
      crsCode: 'ASK'
    },
    {
      stationName: 'Aslockton',
      crsCode: 'ALK'
    },
    {
      stationName: 'Aspley Guise',
      crsCode: 'APG'
    },
    {
      stationName: 'Aspatria',
      crsCode: 'ASP'
    },
    {
      stationName: 'Aston',
      crsCode: 'AST'
    },
    {
      stationName: 'Attadale',
      crsCode: 'ATT'
    },
    {
      stationName: 'Atherton',
      crsCode: 'ATN'
    },
    {
      stationName: 'Atherstone',
      crsCode: 'ATH'
    },
    {
      stationName: 'Attenborough',
      crsCode: 'ATB'
    },
    {
      stationName: 'Attleborough',
      crsCode: 'ATL'
    },
    {
      stationName: 'Audley End',
      crsCode: 'AUD'
    },
    {
      stationName: 'Aviemore',
      crsCode: 'AVM'
    },
    {
      stationName: 'Avoncliff',
      crsCode: 'AVF'
    },
    {
      stationName: 'Avonmouth',
      crsCode: 'AVN'
    },
    {
      stationName: 'Axminster',
      crsCode: 'AXM'
    },
    {
      stationName: 'Aylesford',
      crsCode: 'AYL'
    },
    {
      stationName: 'Aylesbury',
      crsCode: 'AYS'
    },
    {
      stationName: 'Aylesbury Vale Parkway',
      crsCode: 'AVP'
    },
    {
      stationName: 'Ayr',
      crsCode: 'AYR'
    },
    {
      stationName: 'Bache',
      crsCode: 'BAC'
    },
    {
      stationName: 'Burnage',
      crsCode: 'BNA'
    },
    {
      stationName: 'Bagshot',
      crsCode: 'BAG'
    },
    {
      stationName: 'Baildon',
      crsCode: 'BLD'
    },
    {
      stationName: 'Balcombe',
      crsCode: 'BAB'
    },
    {
      stationName: 'Baldock',
      crsCode: 'BDK'
    },
    {
      stationName: 'Balham',
      crsCode: 'BAL'
    },
    {
      stationName: 'Baillieston',
      crsCode: 'BIO'
    },
    {
      stationName: 'Balloch',
      crsCode: 'BHC'
    },
    {
      stationName: 'Balmossie',
      crsCode: 'BSI'
    },
    {
      stationName: 'Bamford',
      crsCode: 'BAM'
    },
    {
      stationName: 'Banavie',
      crsCode: 'BNV'
    },
    {
      stationName: 'Bangor (Gwynedd)',
      crsCode: 'BNG'
    },
    {
      stationName: 'Banstead',
      crsCode: 'BAD'
    },
    {
      stationName: 'Barassie',
      crsCode: 'BSS'
    },
    {
      stationName: 'Bare Lane',
      crsCode: 'BAR'
    },
    {
      stationName: 'Bargoed',
      crsCode: 'BGD'
    },
    {
      stationName: 'Barking',
      crsCode: 'BKG'
    },
    {
      stationName: 'Barlaston',
      crsCode: 'BRT'
    },
    {
      stationName: 'Barming',
      crsCode: 'BMG'
    },
    {
      stationName: 'Barnes',
      crsCode: 'BNS'
    },
    {
      stationName: 'Barrow-in-Furness',
      crsCode: 'BIF'
    },
    {
      stationName: 'Barrow upon Soar',
      crsCode: 'BWS'
    },
    {
      stationName: 'Barry',
      crsCode: 'BRY'
    },
    {
      stationName: 'Barry Docks',
      crsCode: 'BYD'
    },
    {
      stationName: 'Barry Island',
      crsCode: 'BYI'
    },
    {
      stationName: 'Barrow Haven',
      crsCode: 'BAV'
    },
    {
      stationName: 'Basildon',
      crsCode: 'BSO'
    },
    {
      stationName: 'Bat & Ball',
      crsCode: 'BBL'
    },
    {
      stationName: 'Bath Spa',
      crsCode: 'BTH'
    },
    {
      stationName: 'Batley',
      crsCode: 'BTL'
    },
    {
      stationName: 'Battersea Park',
      crsCode: 'BAK'
    },
    {
      stationName: 'Battle',
      crsCode: 'BAT'
    },
    {
      stationName: 'Bayford',
      crsCode: 'BAY'
    },
    {
      stationName: 'Birchgrove',
      crsCode: 'BCG'
    },
    {
      stationName: 'Beckenham Hill',
      crsCode: 'BEC'
    },
    {
      stationName: 'Beckenham Junction',
      crsCode: 'BKJ'
    },
    {
      stationName: 'Blackwater',
      crsCode: 'BAW'
    },
    {
      stationName: 'Buckley',
      crsCode: 'BCK'
    },
    {
      stationName: 'Birchington-on-Sea',
      crsCode: 'BCH'
    },
    {
      stationName: 'Beaconsfield',
      crsCode: 'BCF'
    },
    {
      stationName: 'Bicester North',
      crsCode: 'BCS'
    },
    {
      stationName: 'Bicester Village',
      crsCode: 'BIT'
    },
    {
      stationName: 'Bricket Wood',
      crsCode: 'BWO'
    },
    {
      stationName: 'Bedhampton',
      crsCode: 'BDH'
    },
    {
      stationName: 'Bedminster',
      crsCode: 'BMT'
    },
    {
      stationName: 'Bidston',
      crsCode: 'BID'
    },
    {
      stationName: 'Bearley',
      crsCode: 'BER'
    },
    {
      stationName: 'Beasdale',
      crsCode: 'BSL'
    },
    {
      stationName: 'Beauly',
      crsCode: 'BEL'
    },
    {
      stationName: 'Bebington',
      crsCode: 'BEB'
    },
    {
      stationName: 'Beccles',
      crsCode: 'BCC'
    },
    {
      stationName: 'Bedford',
      crsCode: 'BDM'
    },
    {
      stationName: 'Bedworth',
      crsCode: 'BEH'
    },
    {
      stationName: 'Bedwyn',
      crsCode: 'BDW'
    },
    {
      stationName: 'Bekesbourne',
      crsCode: 'BKS'
    },
    {
      stationName: 'Belmont',
      crsCode: 'BLM'
    },
    {
      stationName: 'Bellingham',
      crsCode: 'BGM'
    },
    {
      stationName: 'Belper',
      crsCode: 'BLP'
    },
    {
      stationName: 'Belvedere',
      crsCode: 'BVD'
    },
    {
      stationName: 'Bempton',
      crsCode: 'BEM'
    },
    {
      stationName: 'Benfleet',
      crsCode: 'BEF'
    },
    {
      stationName: 'Bere Alston',
      crsCode: 'BAS'
    },
    {
      stationName: 'Bere Ferrers',
      crsCode: 'BFE'
    },
    {
      stationName: 'Berkhamsted',
      crsCode: 'BKM'
    },
    {
      stationName: 'Bermuda Park',
      crsCode: 'BEP'
    },
    {
      stationName: 'Berry Brow',
      crsCode: 'BBW'
    },
    {
      stationName: 'Berwick (Sussex)',
      crsCode: 'BRK'
    },
    {
      stationName: 'Bescar Lane',
      crsCode: 'BES'
    },
    {
      stationName: 'Bedford St Johns',
      crsCode: 'BSJ'
    },
    {
      stationName: 'Beeston',
      crsCode: 'BEE'
    },
    {
      stationName: 'Betws-y-Coed',
      crsCode: 'BYC'
    },
    {
      stationName: 'Beverley',
      crsCode: 'BEV'
    },
    {
      stationName: 'Bexhill',
      crsCode: 'BEX'
    },
    {
      stationName: 'Bexley',
      crsCode: 'BXY'
    },
    {
      stationName: 'Baglan',
      crsCode: 'BAJ'
    },
    {
      stationName: 'Bridge of Allan',
      crsCode: 'BEA'
    },
    {
      stationName: 'Barnt Green',
      crsCode: 'BTG'
    },
    {
      stationName: 'Birmingham International',
      crsCode: 'BHI'
    },
    {
      stationName: 'Jewellery Quarter',
      crsCode: 'JEQ'
    },
    {
      stationName: 'Birmingham Moor Street',
      crsCode: 'BMO'
    },
    {
      stationName: 'Birmingham New Street',
      crsCode: 'BHM'
    },
    {
      stationName: 'Birmingham Snow Hill',
      crsCode: 'BSW'
    },
    {
      stationName: 'Bush Hill Park',
      crsCode: 'BHK'
    },
    {
      stationName: 'Bickley',
      crsCode: 'BKL'
    },
    {
      stationName: 'Biggleswade',
      crsCode: 'BIW'
    },
    {
      stationName: 'Bilbrook',
      crsCode: 'BBK'
    },
    {
      stationName: 'Billericay',
      crsCode: 'BIC'
    },
    {
      stationName: 'Billingshurst',
      crsCode: 'BIG'
    },
    {
      stationName: 'Bingham',
      crsCode: 'BIN'
    },
    {
      stationName: 'Birchwood',
      crsCode: 'BWD'
    },
    {
      stationName: 'Birkbeck',
      crsCode: 'BIK'
    },
    {
      stationName: 'Bishopton',
      crsCode: 'BPT'
    },
    {
      stationName: 'Burntisland',
      crsCode: 'BTS'
    },
    {
      stationName: 'Bitterne',
      crsCode: 'BTE'
    },
    {
      stationName: 'Birkdale',
      crsCode: 'BDL'
    },
    {
      stationName: 'Brockholes',
      crsCode: 'BHS'
    },
    {
      stationName: 'Bucknell',
      crsCode: 'BUK'
    },
    {
      stationName: 'Brockenhurst',
      crsCode: 'BCU'
    },
    {
      stationName: 'Berkswell',
      crsCode: 'BKW'
    },
    {
      stationName: 'Blaenau Ffestiniog',
      crsCode: 'BFF'
    },
    {
      stationName: 'Blairhill',
      crsCode: 'BAI'
    },
    {
      stationName: 'Blakedown',
      crsCode: 'BKD'
    },
    {
      stationName: 'Blantyre',
      crsCode: 'BLT'
    },
    {
      stationName: 'Blair Atholl',
      crsCode: 'BLA'
    },
    {
      stationName: 'Blaydon',
      crsCode: 'BLO'
    },
    {
      stationName: 'Blackhorse Road',
      crsCode: 'BHO'
    },
    {
      stationName: 'Blackpool Pleasure Beach',
      crsCode: 'BPB'
    },
    {
      stationName: 'Blackpool North',
      crsCode: 'BPN'
    },
    {
      stationName: 'Blackpool South',
      crsCode: 'BPS'
    },
    {
      stationName: 'Bleasby',
      crsCode: 'BSB'
    },
    {
      stationName: 'London Blackfriars',
      crsCode: 'BFR'
    },
    {
      stationName: 'Bellgrove',
      crsCode: 'BLG'
    },
    {
      stationName: 'Beaulieu Road',
      crsCode: 'BEU'
    },
    {
      stationName: 'Blackburn',
      crsCode: 'BBN'
    },
    {
      stationName: 'Blackheath',
      crsCode: 'BKH'
    },
    {
      stationName: 'Blackridge',
      crsCode: 'BKR'
    },
    {
      stationName: 'Blake Street',
      crsCode: 'BKT'
    },
    {
      stationName: 'Belle Vue',
      crsCode: 'BLV'
    },
    {
      stationName: 'Blundellsands & Crosby',
      crsCode: 'BLN'
    },
    {
      stationName: 'Billingham',
      crsCode: 'BIL'
    },
    {
      stationName: 'Bloxwich North',
      crsCode: 'BWN'
    },
    {
      stationName: 'Bloxwich',
      crsCode: 'BLX'
    },
    {
      stationName: 'Blackrod',
      crsCode: 'BLK'
    },
    {
      stationName: 'Bellshill',
      crsCode: 'BLH'
    },
    {
      stationName: 'Bletchley',
      crsCode: 'BLY'
    },
    {
      stationName: 'Bolton-Upon-Dearne',
      crsCode: 'BTD'
    },
    {
      stationName: 'Beltring',
      crsCode: 'BEG'
    },
    {
      stationName: 'Blythe Bridge',
      crsCode: 'BYB'
    },
    {
      stationName: 'Bamber Bridge',
      crsCode: 'BMB'
    },
    {
      stationName: 'Bramhall',
      crsCode: 'BML'
    },
    {
      stationName: 'Bramley (Hants)',
      crsCode: 'BMY'
    },
    {
      stationName: 'Banbury',
      crsCode: 'BAN'
    },
    {
      stationName: 'Brandon',
      crsCode: 'BND'
    },
    {
      stationName: 'Bingley',
      crsCode: 'BIY'
    },
    {
      stationName: 'Burnham (Berks)',
      crsCode: 'BNM'
    },
    {
      stationName: 'Barnhill',
      crsCode: 'BNL'
    },
    {
      stationName: 'Bank Hall',
      crsCode: 'BAH'
    },
    {
      stationName: 'Ben Rhydding',
      crsCode: 'BEY'
    },
    {
      stationName: 'Barnes Bridge',
      crsCode: 'BNI'
    },
    {
      stationName: 'Burneside (Cumbria)',
      crsCode: 'BUD'
    },
    {
      stationName: 'Barnsley',
      crsCode: 'BNY'
    },
    {
      stationName: 'Barnetby',
      crsCode: 'BTB'
    },
    {
      stationName: 'Bentley (Hants)',
      crsCode: 'BTY'
    },
    {
      stationName: 'Brentford',
      crsCode: 'BFD'
    },
    {
      stationName: 'Bentham',
      crsCode: 'BEN'
    },
    {
      stationName: 'Brunswick',
      crsCode: 'BRW'
    },
    {
      stationName: 'Bodmin Parkway',
      crsCode: 'BOD'
    },
    {
      stationName: 'Bodorgan',
      crsCode: 'BOR'
    },
    {
      stationName: 'Bognor Regis',
      crsCode: 'BOG'
    },
    {
      stationName: 'Bogston',
      crsCode: 'BGS'
    },
    {
      stationName: 'Bolton',
      crsCode: 'BON'
    },
    {
      stationName: 'Bournemouth',
      crsCode: 'BMH'
    },
    {
      stationName: 'Bookham',
      crsCode: 'BKA'
    },
    {
      stationName: 'Bridge of Orchy',
      crsCode: 'BRO'
    },
    {
      stationName: 'Bootle (Cumbria)',
      crsCode: 'BOC'
    },
    {
      stationName: 'Bootle New Strand',
      crsCode: 'BNW'
    },
    {
      stationName: 'Bootle Oriel Road',
      crsCode: 'BOT'
    },
    {
      stationName: 'Bourne End',
      crsCode: 'BNE'
    },
    {
      stationName: 'Borth',
      crsCode: 'BRH'
    },
    {
      stationName: 'Borough Green & Wrotham',
      crsCode: 'BRG'
    },
    {
      stationName: 'Bosham',
      crsCode: 'BOH'
    },
    {
      stationName: 'Boston',
      crsCode: 'BSN'
    },
    {
      stationName: 'Bottesford',
      crsCode: 'BTF'
    },
    {
      stationName: 'Botley',
      crsCode: 'BOE'
    },
    {
      stationName: 'Bournville',
      crsCode: 'BRV'
    },
    {
      stationName: 'Bow Brickhill',
      crsCode: 'BWB'
    },
    {
      stationName: 'Bowes Park',
      crsCode: 'BOP'
    },
    {
      stationName: 'Bowling',
      crsCode: 'BWG'
    },
    {
      stationName: 'Box Hill & Westhumble',
      crsCode: 'BXW'
    },
    {
      stationName: 'Bracknell',
      crsCode: 'BCE'
    },
    {
      stationName: 'Bradford Forster Square',
      crsCode: 'BDQ'
    },
    {
      stationName: 'Bradford Interchange',
      crsCode: 'BDI'
    },
    {
      stationName: 'Braintree Freeport',
      crsCode: 'BTP'
    },
    {
      stationName: 'Braintree',
      crsCode: 'BTR'
    },
    {
      stationName: 'Brampton (Suffolk)',
      crsCode: 'BRP'
    },
    {
      stationName: 'Branksome',
      crsCode: 'BSM'
    },
    {
      stationName: 'Broadbottom',
      crsCode: 'BDB'
    },
    {
      stationName: 'Brondesbury',
      crsCode: 'BSY'
    },
    {
      stationName: 'Brondesbury Park',
      crsCode: 'BSP'
    },
    {
      stationName: 'Bradford-on-Avon',
      crsCode: 'BOA'
    },
    {
      stationName: 'Bridgwater',
      crsCode: 'BWT'
    },
    {
      stationName: 'Brading',
      crsCode: 'BDN'
    },
    {
      stationName: 'Bridlington',
      crsCode: 'BDT'
    },
    {
      stationName: 'Bardon Mill',
      crsCode: 'BLL'
    },
    {
      stationName: 'Bordesley',
      crsCode: 'BBS'
    },
    {
      stationName: 'Bredbury',
      crsCode: 'BDY'
    },
    {
      stationName: 'Breich',
      crsCode: 'BRC'
    },
    {
      stationName: 'Broughty Ferry',
      crsCode: 'BYF'
    },
    {
      stationName: 'Broomfleet',
      crsCode: 'BMF'
    },
    {
      stationName: 'Bargeddie',
      crsCode: 'BGI'
    },
    {
      stationName: 'Bridgend',
      crsCode: 'BGN'
    },
    {
      stationName: 'Brigg',
      crsCode: 'BGG'
    },
    {
      stationName: 'London Road (Brighton)',
      crsCode: 'LRB'
    },
    {
      stationName: 'Brighton',
      crsCode: 'BTN'
    },
    {
      stationName: 'Barrhead',
      crsCode: 'BRR'
    },
    {
      stationName: 'Barnham',
      crsCode: 'BAA'
    },
    {
      stationName: 'Brighouse',
      crsCode: 'BGH'
    },
    {
      stationName: 'Bridgeton',
      crsCode: 'BDG'
    },
    {
      stationName: 'Brierfield',
      crsCode: 'BRF'
    },
    {
      stationName: 'Brimsdown',
      crsCode: 'BMD'
    },
    {
      stationName: 'Briton Ferry',
      crsCode: 'BNF'
    },
    {
      stationName: 'Brithdir',
      crsCode: 'BHD'
    },
    {
      stationName: 'Brixton',
      crsCode: 'BRX'
    },
    {
      stationName: 'Brookmans Park',
      crsCode: 'BPK'
    },
    {
      stationName: 'Conway Park',
      crsCode: 'CNP'
    },
    {
      stationName: 'Birkenhead Central',
      crsCode: 'BKC'
    },
    {
      stationName: 'Birkenhead North',
      crsCode: 'BKN'
    },
    {
      stationName: 'Birkenhead Park',
      crsCode: 'BKP'
    },
    {
      stationName: 'Brookwood',
      crsCode: 'BKO'
    },
    {
      stationName: 'Berrylands',
      crsCode: 'BRS'
    },
    {
      stationName: 'Burley Park',
      crsCode: 'BUY'
    },
    {
      stationName: 'Bromborough',
      crsCode: 'BOM'
    },
    {
      stationName: 'Bromborough Rake',
      crsCode: 'BMR'
    },
    {
      stationName: 'Bromley Cross',
      crsCode: 'BMC'
    },
    {
      stationName: 'Bramley (West Yorks)',
      crsCode: 'BLE'
    },
    {
      stationName: 'Barmouth',
      crsCode: 'BRM'
    },
    {
      stationName: 'Brampton (Cumbria)',
      crsCode: 'BMP'
    },
    {
      stationName: 'Bromsgrove',
      crsCode: 'BMV'
    },
    {
      stationName: 'Branchton',
      crsCode: 'BCN'
    },
    {
      stationName: 'Brinnington',
      crsCode: 'BNT'
    },
    {
      stationName: 'Barnehurst',
      crsCode: 'BNH'
    },
    {
      stationName: 'Burnham-on-Crouch',
      crsCode: 'BUU'
    },
    {
      stationName: 'Barnstaple',
      crsCode: 'BNP'
    },
    {
      stationName: 'Berney Arms',
      crsCode: 'BYA'
    },
    {
      stationName: 'Broad Green',
      crsCode: 'BGE'
    },
    {
      stationName: 'Brockley',
      crsCode: 'BCY'
    },
    {
      stationName: 'Bromley North',
      crsCode: 'BMN'
    },
    {
      stationName: 'Bromley South',
      crsCode: 'BMS'
    },
    {
      stationName: 'Broome',
      crsCode: 'BME'
    },
    {
      stationName: 'Brora',
      crsCode: 'BRA'
    },
    {
      stationName: 'Brough',
      crsCode: 'BUH'
    },
    {
      stationName: 'Broxbourne',
      crsCode: 'BXB'
    },
    {
      stationName: 'Barrhill',
      crsCode: 'BRL'
    },
    {
      stationName: 'Barry Links',
      crsCode: 'BYL'
    },
    {
      stationName: 'Burscough Bridge',
      crsCode: 'BCB'
    },
    {
      stationName: 'Burscough Junction',
      crsCode: 'BCJ'
    },
    {
      stationName: 'Burnside (Strathclyde)',
      crsCode: 'BUI'
    },
    {
      stationName: 'Broadstairs',
      crsCode: 'BSR'
    },
    {
      stationName: 'Bristol Temple Meads',
      crsCode: 'BRI'
    },
    {
      stationName: 'Bristol Parkway',
      crsCode: 'BPW'
    },
    {
      stationName: 'Barton-on-Humber',
      crsCode: 'BAU'
    },
    {
      stationName: 'Burton Joyce',
      crsCode: 'BUJ'
    },
    {
      stationName: 'Brentwood',
      crsCode: 'BRE'
    },
    {
      stationName: 'Bruce Grove',
      crsCode: 'BCV'
    },
    {
      stationName: 'Brundall',
      crsCode: 'BDA'
    },
    {
      stationName: 'Brundall Gardens',
      crsCode: 'BGA'
    },
    {
      stationName: 'Brunstane',
      crsCode: 'BSU'
    },
    {
      stationName: 'Bruton',
      crsCode: 'BRU'
    },
    {
      stationName: 'Berwick-upon-Tweed',
      crsCode: 'BWK'
    },
    {
      stationName: 'Brockley Whins',
      crsCode: 'BNR'
    },
    {
      stationName: 'Bryn',
      crsCode: 'BYN'
    },
    {
      stationName: 'Braystones',
      crsCode: 'BYS'
    },
    {
      stationName: 'Bishop Auckland',
      crsCode: 'BIA'
    },
    {
      stationName: 'Bescot Stadium',
      crsCode: 'BSC'
    },
    {
      stationName: 'Bearsden',
      crsCode: 'BRN'
    },
    {
      stationName: 'Bishopbriggs',
      crsCode: 'BBG'
    },
    {
      stationName: 'Bishops Stortford',
      crsCode: 'BIS'
    },
    {
      stationName: 'Basingstoke',
      crsCode: 'BSK'
    },
    {
      stationName: 'Bishop\'s Lydeard',
      crsCode: 'BIB'
    },
    {
      stationName: 'Bishopstone',
      crsCode: 'BIP'
    },
    {
      stationName: 'Bearsted',
      crsCode: 'BSD'
    },
    {
      stationName: 'Bury St Edmunds',
      crsCode: 'BSE'
    },
    {
      stationName: 'Betchworth',
      crsCode: 'BTO'
    },
    {
      stationName: 'Bathgate',
      crsCode: 'BHG'
    },
    {
      stationName: 'Bethnal Green',
      crsCode: 'BET'
    },
    {
      stationName: 'Butlers Lane',
      crsCode: 'BUL'
    },
    {
      stationName: 'Battlesbridge',
      crsCode: 'BLB'
    },
    {
      stationName: 'Bentley (S Yorks)',
      crsCode: 'BYK'
    },
    {
      stationName: 'Battersby',
      crsCode: 'BTT'
    },
    {
      stationName: 'Buckenham',
      crsCode: 'BUC'
    },
    {
      stationName: 'Bugle',
      crsCode: 'BGL'
    },
    {
      stationName: 'Builth Road',
      crsCode: 'BHR'
    },
    {
      stationName: 'Bulwell',
      crsCode: 'BLW'
    },
    {
      stationName: 'Bures',
      crsCode: 'BUE'
    },
    {
      stationName: 'Burgess Hill',
      crsCode: 'BUG'
    },
    {
      stationName: 'Burley-in-Wharfedale',
      crsCode: 'BUW'
    },
    {
      stationName: 'Burnley Barracks',
      crsCode: 'BUB'
    },
    {
      stationName: 'Burnley Central',
      crsCode: 'BNC'
    },
    {
      stationName: 'Burnley Manchester Road',
      crsCode: 'BYM'
    },
    {
      stationName: 'Bursledon',
      crsCode: 'BUO'
    },
    {
      stationName: 'Burton-on-Trent',
      crsCode: 'BUT'
    },
    {
      stationName: 'Busby',
      crsCode: 'BUS'
    },
    {
      stationName: 'Bushey',
      crsCode: 'BSH'
    },
    {
      stationName: 'Buxton',
      crsCode: 'BUX'
    },
    {
      stationName: 'Bexleyheath',
      crsCode: 'BXH'
    },
    {
      stationName: 'Buxted',
      crsCode: 'BXD'
    },
    {
      stationName: 'Byfleet & New Haw',
      crsCode: 'BFN'
    },
    {
      stationName: 'Bynea',
      crsCode: 'BYE'
    },
    {
      stationName: 'Cadoxton',
      crsCode: 'CAD'
    },
    {
      stationName: 'Caergwrle',
      crsCode: 'CGW'
    },
    {
      stationName: 'Calstock',
      crsCode: 'CSK'
    },
    {
      stationName: 'Cambridge',
      crsCode: 'CBG'
    },
    {
      stationName: 'Camelon',
      crsCode: 'CMO'
    },
    {
      stationName: 'Cambridge Heath (London)',
      crsCode: 'CBH'
    },
    {
      stationName: 'Canley',
      crsCode: 'CNL'
    },
    {
      stationName: 'London Cannon Street',
      crsCode: 'CST'
    },
    {
      stationName: 'Carbis Bay',
      crsCode: 'CBB'
    },
    {
      stationName: 'Cardiff Bay',
      crsCode: 'CDB'
    },
    {
      stationName: 'Cardiff Queen Street',
      crsCode: 'CDQ'
    },
    {
      stationName: 'Carfin',
      crsCode: 'CRF'
    },
    {
      stationName: 'Cark',
      crsCode: 'CAK'
    },
    {
      stationName: 'Carlisle',
      crsCode: 'CAR'
    },
    {
      stationName: 'Carmyle',
      crsCode: 'CML'
    },
    {
      stationName: 'Carrbridge',
      crsCode: 'CAG'
    },
    {
      stationName: 'Caersws',
      crsCode: 'CWS'
    },
    {
      stationName: 'Castleford',
      crsCode: 'CFD'
    },
    {
      stationName: 'Caterham',
      crsCode: 'CAT'
    },
    {
      stationName: 'Catford Bridge',
      crsCode: 'CFB'
    },
    {
      stationName: 'Catford',
      crsCode: 'CTF'
    },
    {
      stationName: 'Cathays',
      crsCode: 'CYS'
    },
    {
      stationName: 'Cattal',
      crsCode: 'CTL'
    },
    {
      stationName: 'Causeland',
      crsCode: 'CAU'
    },
    {
      stationName: 'Castle Bar Park',
      crsCode: 'CBP'
    },
    {
      stationName: 'Colwyn Bay',
      crsCode: 'CWB'
    },
    {
      stationName: 'Crowborough',
      crsCode: 'COH'
    },
    {
      stationName: 'Cobham & Stoke d\'Abernon',
      crsCode: 'CSD'
    },
    {
      stationName: 'Camborne',
      crsCode: 'CBN'
    },
    {
      stationName: 'Cranbrook',
      crsCode: 'CBK'
    },
    {
      stationName: 'Castle Cary',
      crsCode: 'CLC'
    },
    {
      stationName: 'Cathcart',
      crsCode: 'CCT'
    },
    {
      stationName: 'Caldicot',
      crsCode: 'CDT'
    },
    {
      stationName: 'Cardenden',
      crsCode: 'CDD'
    },
    {
      stationName: 'Cardonald',
      crsCode: 'CDO'
    },
    {
      stationName: 'Cardross',
      crsCode: 'CDR'
    },
    {
      stationName: 'Cefn-y-Bedd',
      crsCode: 'CYB'
    },
    {
      stationName: 'Croftfoot',
      crsCode: 'CFF'
    },
    {
      stationName: 'Crossflatts',
      crsCode: 'CFL'
    },
    {
      stationName: 'Crofton Park',
      crsCode: 'CFT'
    },
    {
      stationName: 'Chafford Hundred',
      crsCode: 'CFH'
    },
    {
      stationName: 'Chapelton (Devon)',
      crsCode: 'CPN'
    },
    {
      stationName: 'Chartham',
      crsCode: 'CRT'
    },
    {
      stationName: 'Chassen Road',
      crsCode: 'CSR'
    },
    {
      stationName: 'Chatham',
      crsCode: 'CTM'
    },
    {
      stationName: 'Charlbury',
      crsCode: 'CBY'
    },
    {
      stationName: 'Chichester',
      crsCode: 'CCH'
    },
    {
      stationName: 'Cheadle Hulme',
      crsCode: 'CHU'
    },
    {
      stationName: 'Cheddington',
      crsCode: 'CED'
    },
    {
      stationName: 'Chadwell Heath',
      crsCode: 'CTH'
    },
    {
      stationName: 'Cheam',
      crsCode: 'CHE'
    },
    {
      stationName: 'Chapel-en-le-Frith',
      crsCode: 'CEF'
    },
    {
      stationName: 'Chelford',
      crsCode: 'CEL'
    },
    {
      stationName: 'Chepstow',
      crsCode: 'CPW'
    },
    {
      stationName: 'Cheshunt',
      crsCode: 'CHN'
    },
    {
      stationName: 'Chetnole',
      crsCode: 'CNO'
    },
    {
      stationName: 'Chesterfield',
      crsCode: 'CHD'
    },
    {
      stationName: 'Church Fenton',
      crsCode: 'CHF'
    },
    {
      stationName: 'Chathill',
      crsCode: 'CHT'
    },
    {
      stationName: 'Chingford',
      crsCode: 'CHI'
    },
    {
      stationName: 'Chippenham',
      crsCode: 'CPM'
    },
    {
      stationName: 'Chirk',
      crsCode: 'CRK'
    },
    {
      stationName: 'Chiswick',
      crsCode: 'CHK'
    },
    {
      stationName: 'Chalfont & Latimer',
      crsCode: 'CFO'
    },
    {
      stationName: 'Chalkwell',
      crsCode: 'CHW'
    },
    {
      stationName: 'Chelmsford',
      crsCode: 'CHM'
    },
    {
      stationName: 'Chelsfield',
      crsCode: 'CLD'
    },
    {
      stationName: 'Cheltenham Spa',
      crsCode: 'CNM'
    },
    {
      stationName: 'Chilworth',
      crsCode: 'CHL'
    },
    {
      stationName: 'Chinley',
      crsCode: 'CLY'
    },
    {
      stationName: 'Cholsey',
      crsCode: 'CHO'
    },
    {
      stationName: 'Buckshaw Parkway',
      crsCode: 'BSV'
    },
    {
      stationName: 'Chorley',
      crsCode: 'CRL'
    },
    {
      stationName: 'Church & Oswaldtwistle',
      crsCode: 'CTW'
    },
    {
      stationName: 'Chapeltown',
      crsCode: 'CLN'
    },
    {
      stationName: 'Chappel & Wakes Colne',
      crsCode: 'CWC'
    },
    {
      stationName: 'Christchurch',
      crsCode: 'CHR'
    },
    {
      stationName: 'Charing Cross (Glasgow)',
      crsCode: 'CHC'
    },
    {
      stationName: 'Christs Hospital',
      crsCode: 'CHH'
    },
    {
      stationName: 'Chorleywood',
      crsCode: 'CLW'
    },
    {
      stationName: 'London Charing Cross',
      crsCode: 'CHX'
    },
    {
      stationName: 'Chipstead',
      crsCode: 'CHP'
    },
    {
      stationName: 'Chislehurst',
      crsCode: 'CIT'
    },
    {
      stationName: 'Chester Road',
      crsCode: 'CRD'
    },
    {
      stationName: 'Chessington North',
      crsCode: 'CSN'
    },
    {
      stationName: 'Chessington South',
      crsCode: 'CSS'
    },
    {
      stationName: 'Chester',
      crsCode: 'CTR'
    },
    {
      stationName: 'Chestfield & Swalecliffe',
      crsCode: 'CSW'
    },
    {
      stationName: 'Chatelherault',
      crsCode: 'CTE'
    },
    {
      stationName: 'Cherry Tree',
      crsCode: 'CYT'
    },
    {
      stationName: 'Chertsey',
      crsCode: 'CHY'
    },
    {
      stationName: 'Cilmeri',
      crsCode: 'CIM'
    },
    {
      stationName: 'Corkerhill',
      crsCode: 'CKH'
    },
    {
      stationName: 'Clacton-on-Sea',
      crsCode: 'CLT'
    },
    {
      stationName: 'Clandon',
      crsCode: 'CLA'
    },
    {
      stationName: 'Clapton',
      crsCode: 'CPT'
    },
    {
      stationName: 'Clarbeston Road',
      crsCode: 'CLR'
    },
    {
      stationName: 'Claverdon',
      crsCode: 'CLV'
    },
    {
      stationName: 'Hythe (Essex)',
      crsCode: 'HYH'
    },
    {
      stationName: 'Colchester Town',
      crsCode: 'CET'
    },
    {
      stationName: 'Colchester',
      crsCode: 'COL'
    },
    {
      stationName: 'Caledonian Road & Barnsbury',
      crsCode: 'CIR'
    },
    {
      stationName: 'Caldercruix',
      crsCode: 'CAC'
    },
    {
      stationName: 'Cleland',
      crsCode: 'CEA'
    },
    {
      stationName: 'Clifton Down',
      crsCode: 'CFN'
    },
    {
      stationName: 'Collingham',
      crsCode: 'CLM'
    },
    {
      stationName: 'Clitheroe',
      crsCode: 'CLH'
    },
    {
      stationName: 'Chilham',
      crsCode: 'CIL'
    },
    {
      stationName: 'Clock House',
      crsCode: 'CLK'
    },
    {
      stationName: 'Clapham High Street',
      crsCode: 'CLP'
    },
    {
      stationName: 'Clapham Junction',
      crsCode: 'CLJ'
    },
    {
      stationName: 'Clapham (N Yorks)',
      crsCode: 'CPY'
    },
    {
      stationName: 'Clarkston',
      crsCode: 'CKS'
    },
    {
      stationName: 'Chester-le-Street',
      crsCode: 'CLS'
    },
    {
      stationName: 'Cleethorpes',
      crsCode: 'CLE'
    },
    {
      stationName: 'Clifton (Manchester)',
      crsCode: 'CLI'
    },
    {
      stationName: 'Colwall',
      crsCode: 'CWL'
    },
    {
      stationName: 'Clydebank',
      crsCode: 'CYK'
    },
    {
      stationName: 'Claygate',
      crsCode: 'CLG'
    },
    {
      stationName: 'Clunderwen',
      crsCode: 'CUW'
    },
    {
      stationName: 'Cwmbach',
      crsCode: 'CMH'
    },
    {
      stationName: 'Camberley',
      crsCode: 'CAM'
    },
    {
      stationName: 'Cumbernauld',
      crsCode: 'CUB'
    },
    {
      stationName: 'Cambuslang',
      crsCode: 'CBL'
    },
    {
      stationName: 'Camden Road',
      crsCode: 'CMD'
    },
    {
      stationName: 'Cromer',
      crsCode: 'CMR'
    },
    {
      stationName: 'Carmarthen',
      crsCode: 'CMN'
    },
    {
      stationName: 'Cannock',
      crsCode: 'CAO'
    },
    {
      stationName: 'Canada Water',
      crsCode: 'ZCW'
    },
    {
      stationName: 'Canonbury',
      crsCode: 'CNN'
    },
    {
      stationName: 'Carnoustie',
      crsCode: 'CAN'
    },
    {
      stationName: 'Canterbury East',
      crsCode: 'CBE'
    },
    {
      stationName: 'Canterbury West',
      crsCode: 'CBW'
    },
    {
      stationName: 'Cantley',
      crsCode: 'CNY'
    },
    {
      stationName: 'Carntyne',
      crsCode: 'CAY'
    },
    {
      stationName: 'Coatbridge Central',
      crsCode: 'CBC'
    },
    {
      stationName: 'Coatbridge Sunnyside',
      crsCode: 'CBS'
    },
    {
      stationName: 'Coatdyke',
      crsCode: 'COA'
    },
    {
      stationName: 'Cooden Beach',
      crsCode: 'COB'
    },
    {
      stationName: 'Codsall',
      crsCode: 'CSL'
    },
    {
      stationName: 'Cogan',
      crsCode: 'CGN'
    },
    {
      stationName: 'Cooksbridge',
      crsCode: 'CBR'
    },
    {
      stationName: 'Coleshill Parkway',
      crsCode: 'CEH'
    },
    {
      stationName: 'Colne',
      crsCode: 'CNE'
    },
    {
      stationName: 'Coulsdon South',
      crsCode: 'CDS'
    },
    {
      stationName: 'Coulsdon Town',
      crsCode: 'CDN'
    },
    {
      stationName: 'Combe (Oxon)',
      crsCode: 'CME'
    },
    {
      stationName: 'Commondale',
      crsCode: 'COM'
    },
    {
      stationName: 'Conisbrough',
      crsCode: 'CNS'
    },
    {
      stationName: 'Congleton',
      crsCode: 'CNG'
    },
    {
      stationName: 'Connel Ferry',
      crsCode: 'CON'
    },
    {
      stationName: 'Conon Bridge',
      crsCode: 'CBD'
    },
    {
      stationName: 'Cononley',
      crsCode: 'CEY'
    },
    {
      stationName: 'Conwy',
      crsCode: 'CNW'
    },
    {
      stationName: 'Cookham',
      crsCode: 'COO'
    },
    {
      stationName: 'Coombe Junction Halt ()',
      crsCode: 'COE'
    },
    {
      stationName: 'Copplestone',
      crsCode: 'COP'
    },
    {
      stationName: 'Corby',
      crsCode: 'COR'
    },
    {
      stationName: 'Corpach',
      crsCode: 'CPA'
    },
    {
      stationName: 'Corrour',
      crsCode: 'CRR'
    },
    {
      stationName: 'Coryton',
      crsCode: 'COY'
    },
    {
      stationName: 'Coseley',
      crsCode: 'CSY'
    },
    {
      stationName: 'Cosford',
      crsCode: 'COS'
    },
    {
      stationName: 'Cosham',
      crsCode: 'CSA'
    },
    {
      stationName: 'Cottingley',
      crsCode: 'COT'
    },
    {
      stationName: 'Coventry Arena',
      crsCode: 'CAA'
    },
    {
      stationName: 'Coventry',
      crsCode: 'COV'
    },
    {
      stationName: 'Cowden',
      crsCode: 'CWN'
    },
    {
      stationName: 'Capenhurst',
      crsCode: 'CPU'
    },
    {
      stationName: 'Cradley Heath',
      crsCode: 'CRA'
    },
    {
      stationName: 'Craven Arms',
      crsCode: 'CRV'
    },
    {
      stationName: 'Crawley',
      crsCode: 'CRW'
    },
    {
      stationName: 'Corbridge',
      crsCode: 'CRB'
    },
    {
      stationName: 'Corkickle',
      crsCode: 'CKL'
    },
    {
      stationName: 'Cardiff Central',
      crsCode: 'CDF'
    },
    {
      stationName: 'Crediton',
      crsCode: 'CDI'
    },
    {
      stationName: 'Cressing',
      crsCode: 'CES'
    },
    {
      stationName: 'Crewe',
      crsCode: 'CRE'
    },
    {
      stationName: 'Crayford',
      crsCode: 'CRY'
    },
    {
      stationName: 'Craigendoran',
      crsCode: 'CGD'
    },
    {
      stationName: 'Crews Hill',
      crsCode: 'CWH'
    },
    {
      stationName: 'Criccieth',
      crsCode: 'CCC'
    },
    {
      stationName: 'Cricklewood',
      crsCode: 'CRI'
    },
    {
      stationName: 'Crewkerne',
      crsCode: 'CKN'
    },
    {
      stationName: 'Carluke',
      crsCode: 'CLU'
    },
    {
      stationName: 'Charlton',
      crsCode: 'CTN'
    },
    {
      stationName: 'Cramlington',
      crsCode: 'CRM'
    },
    {
      stationName: 'Carnforth',
      crsCode: 'CNF'
    },
    {
      stationName: 'Charing (Kent)',
      crsCode: 'CHG'
    },
    {
      stationName: 'Crianlarich',
      crsCode: 'CNR'
    },
    {
      stationName: 'Crookston',
      crsCode: 'CKT'
    },
    {
      stationName: 'Cromford',
      crsCode: 'CMF'
    },
    {
      stationName: 'Crosshill',
      crsCode: 'COI'
    },
    {
      stationName: 'Croston',
      crsCode: 'CSO'
    },
    {
      stationName: 'Crouch Hill',
      crsCode: 'CRH'
    },
    {
      stationName: 'Crowle',
      crsCode: 'CWE'
    },
    {
      stationName: 'Croy',
      crsCode: 'CRO'
    },
    {
      stationName: 'Caerphilly',
      crsCode: 'CPH'
    },
    {
      stationName: 'Carpenders Park',
      crsCode: 'CPK'
    },
    {
      stationName: 'Carshalton Beeches',
      crsCode: 'CSB'
    },
    {
      stationName: 'Carshalton',
      crsCode: 'CSH'
    },
    {
      stationName: 'Crosskeys',
      crsCode: 'CKY'
    },
    {
      stationName: 'Crossmyloof',
      crsCode: 'CMY'
    },
    {
      stationName: 'Cressington',
      crsCode: 'CSG'
    },
    {
      stationName: 'Carstairs',
      crsCode: 'CRS'
    },
    {
      stationName: 'Carlton',
      crsCode: 'CTO'
    },
    {
      stationName: 'Cartsdyke',
      crsCode: 'CDY'
    },
    {
      stationName: 'Crowhurst',
      crsCode: 'CWU'
    },
    {
      stationName: 'Creswell (Derbys)',
      crsCode: 'CWD'
    },
    {
      stationName: 'Crowthorne',
      crsCode: 'CRN'
    },
    {
      stationName: 'Crystal Palace',
      crsCode: 'CYP'
    },
    {
      stationName: 'Imperial Wharf',
      crsCode: 'IMW'
    },
    {
      stationName: 'Chandlers Ford',
      crsCode: 'CFR'
    },
    {
      stationName: 'Cross Gates',
      crsCode: 'CRG'
    },
    {
      stationName: 'Castleton (Manchester)',
      crsCode: 'CAS'
    },
    {
      stationName: 'Church Stretton',
      crsCode: 'CTT'
    },
    {
      stationName: 'City Thameslink',
      crsCode: 'CTK'
    },
    {
      stationName: 'Collington',
      crsCode: 'CLL'
    },
    {
      stationName: 'Castleton Moor',
      crsCode: 'CSM'
    },
    {
      stationName: 'Cottingham',
      crsCode: 'CGM'
    },
    {
      stationName: 'Cuddington',
      crsCode: 'CUD'
    },
    {
      stationName: 'Cuffley',
      crsCode: 'CUF'
    },
    {
      stationName: 'Culham',
      crsCode: 'CUM'
    },
    {
      stationName: 'Culrain',
      crsCode: 'CUA'
    },
    {
      stationName: 'Cupar',
      crsCode: 'CUP'
    },
    {
      stationName: 'Curriehill',
      crsCode: 'CUH'
    },
    {
      stationName: 'Cowdenbeath',
      crsCode: 'COW'
    },
    {
      stationName: 'Cwmbran',
      crsCode: 'CWM'
    },
    {
      stationName: 'Cuxton',
      crsCode: 'CUX'
    },
    {
      stationName: 'Cynghordy',
      crsCode: 'CYN'
    },
    {
      stationName: 'Daisy Hill',
      crsCode: 'DSY'
    },
    {
      stationName: 'Dalgety Bay',
      crsCode: 'DAG'
    },
    {
      stationName: 'Dalmuir',
      crsCode: 'DMR'
    },
    {
      stationName: 'Dalry',
      crsCode: 'DLY'
    },
    {
      stationName: 'Dalston Junction',
      crsCode: 'DLJ'
    },
    {
      stationName: 'Dalston Kingsland',
      crsCode: 'DLK'
    },
    {
      stationName: 'Dalston (Cumbria)',
      crsCode: 'DLS'
    },
    {
      stationName: 'Dalton',
      crsCode: 'DLT'
    },
    {
      stationName: 'Dalwhinnie',
      crsCode: 'DLW'
    },
    {
      stationName: 'Danby',
      crsCode: 'DNY'
    },
    {
      stationName: 'Danescourt',
      crsCode: 'DCT'
    },
    {
      stationName: 'Danzey',
      crsCode: 'DZY'
    },
    {
      stationName: 'Darnall',
      crsCode: 'DAN'
    },
    {
      stationName: 'Darsham',
      crsCode: 'DSM'
    },
    {
      stationName: 'Dartford',
      crsCode: 'DFD'
    },
    {
      stationName: 'Darwen',
      crsCode: 'DWN'
    },
    {
      stationName: 'Datchet',
      crsCode: 'DAT'
    },
    {
      stationName: 'Davenport',
      crsCode: 'DVN'
    },
    {
      stationName: 'Dawlish',
      crsCode: 'DWL'
    },
    {
      stationName: 'Dawlish Warren',
      crsCode: 'DWW'
    },
    {
      stationName: 'Kelvindale',
      crsCode: 'KVD'
    },
    {
      stationName: 'Deal',
      crsCode: 'DEA'
    },
    {
      stationName: 'Dean',
      crsCode: 'DEN'
    },
    {
      stationName: 'Deganwy',
      crsCode: 'DGY'
    },
    {
      stationName: 'Deighton',
      crsCode: 'DHN'
    },
    {
      stationName: 'Delamere',
      crsCode: 'DLM'
    },
    {
      stationName: 'Denham',
      crsCode: 'DNM'
    },
    {
      stationName: 'Denham Golf Club',
      crsCode: 'DGC'
    },
    {
      stationName: 'Denmark Hill',
      crsCode: 'DMK'
    },
    {
      stationName: 'Dent',
      crsCode: 'DNT'
    },
    {
      stationName: 'Dorking Deepdene',
      crsCode: 'DPD'
    },
    {
      stationName: 'Deptford',
      crsCode: 'DEP'
    },
    {
      stationName: 'Derby Road (Ipswich)',
      crsCode: 'DBR'
    },
    {
      stationName: 'Devonport',
      crsCode: 'DPT'
    },
    {
      stationName: 'Dingle Road',
      crsCode: 'DGL'
    },
    {
      stationName: 'Dagenham Dock',
      crsCode: 'DDK'
    },
    {
      stationName: 'Didcot Parkway',
      crsCode: 'DID'
    },
    {
      stationName: 'Digby & Sowton',
      crsCode: 'DIG'
    },
    {
      stationName: 'Dilton Marsh',
      crsCode: 'DMH'
    },
    {
      stationName: 'Dinas Powys',
      crsCode: 'DNS'
    },
    {
      stationName: 'Dinas (Rhondda)',
      crsCode: 'DMG'
    },
    {
      stationName: 'Dingwall',
      crsCode: 'DIN'
    },
    {
      stationName: 'Dinsdale',
      crsCode: 'DND'
    },
    {
      stationName: 'Disley',
      crsCode: 'DSL'
    },
    {
      stationName: 'Diss',
      crsCode: 'DIS'
    },
    {
      stationName: 'Dalmally',
      crsCode: 'DAL'
    },
    {
      stationName: 'Dalmarnock',
      crsCode: 'DAK'
    },
    {
      stationName: 'Dalmeny',
      crsCode: 'DAM'
    },
    {
      stationName: 'Dalreoch',
      crsCode: 'DLR'
    },
    {
      stationName: 'Darlington',
      crsCode: 'DAR'
    },
    {
      stationName: 'Dolwyddelan',
      crsCode: 'DWD'
    },
    {
      stationName: 'Dumbarton Central',
      crsCode: 'DBC'
    },
    {
      stationName: 'Dumbarton East',
      crsCode: 'DBE'
    },
    {
      stationName: 'Denby Dale',
      crsCode: 'DBD'
    },
    {
      stationName: 'Dunfermline Town',
      crsCode: 'DFE'
    },
    {
      stationName: 'Dunfermline Queen Margaret',
      crsCode: 'DFL'
    },
    {
      stationName: 'Dunlop',
      crsCode: 'DNL'
    },
    {
      stationName: 'Dunrobin Castle',
      crsCode: 'DNO'
    },
    {
      stationName: 'Dunston',
      crsCode: 'DOT'
    },
    {
      stationName: 'Dinting',
      crsCode: 'DTG'
    },
    {
      stationName: 'Denton',
      crsCode: 'DTN'
    },
    {
      stationName: 'Dockyard (Plymouth)',
      crsCode: 'DOC'
    },
    {
      stationName: 'Dodworth',
      crsCode: 'DOD'
    },
    {
      stationName: 'Dolau',
      crsCode: 'DOL'
    },
    {
      stationName: 'Doleham',
      crsCode: 'DLH'
    },
    {
      stationName: 'Dolgarrog',
      crsCode: 'DLG'
    },
    {
      stationName: 'Doncaster',
      crsCode: 'DON'
    },
    {
      stationName: 'Dore & Totley',
      crsCode: 'DOR'
    },
    {
      stationName: 'Dorridge',
      crsCode: 'DDG'
    },
    {
      stationName: 'Dorking',
      crsCode: 'DKG'
    },
    {
      stationName: 'Dormans',
      crsCode: 'DMS'
    },
    {
      stationName: 'Dover Priory',
      crsCode: 'DVP'
    },
    {
      stationName: 'Dovercourt',
      crsCode: 'DVC'
    },
    {
      stationName: 'Dovey Junction',
      crsCode: 'DVY'
    },
    {
      stationName: 'Downham Market',
      crsCode: 'DOW'
    },
    {
      stationName: 'Drayton Green',
      crsCode: 'DRG'
    },
    {
      stationName: 'Derby',
      crsCode: 'DBY'
    },
    {
      stationName: 'Dorchester South',
      crsCode: 'DCH'
    },
    {
      stationName: 'Dorchester West',
      crsCode: 'DCW'
    },
    {
      stationName: 'Drem',
      crsCode: 'DRM'
    },
    {
      stationName: 'Durham',
      crsCode: 'DHM'
    },
    {
      stationName: 'Driffield',
      crsCode: 'DRF'
    },
    {
      stationName: 'Drigg',
      crsCode: 'DRI'
    },
    {
      stationName: 'Dorking West',
      crsCode: 'DKT'
    },
    {
      stationName: 'Drumchapel',
      crsCode: 'DMC'
    },
    {
      stationName: 'Drumfrochar',
      crsCode: 'DFR'
    },
    {
      stationName: 'Drumgelloch',
      crsCode: 'DRU'
    },
    {
      stationName: 'Durrington-on-Sea',
      crsCode: 'DUR'
    },
    {
      stationName: 'Dronfield',
      crsCode: 'DRO'
    },
    {
      stationName: 'Darton',
      crsCode: 'DRT'
    },
    {
      stationName: 'Droitwich Spa',
      crsCode: 'DTW'
    },
    {
      stationName: 'Drumry',
      crsCode: 'DMY'
    },
    {
      stationName: 'Drayton Park',
      crsCode: 'DYP'
    },
    {
      stationName: 'Dunton Green',
      crsCode: 'DNG'
    },
    {
      stationName: 'Duddeston',
      crsCode: 'DUD'
    },
    {
      stationName: 'Dudley Port',
      crsCode: 'DDP'
    },
    {
      stationName: 'Duffield',
      crsCode: 'DFI'
    },
    {
      stationName: 'Duirinish',
      crsCode: 'DRN'
    },
    {
      stationName: 'Duke Street',
      crsCode: 'DST'
    },
    {
      stationName: 'Dullingham',
      crsCode: 'DUL'
    },
    {
      stationName: 'Dumbreck',
      crsCode: 'DUM'
    },
    {
      stationName: 'Dumfries',
      crsCode: 'DMF'
    },
    {
      stationName: 'Dumpton Park',
      crsCode: 'DMP'
    },
    {
      stationName: 'Dunblane',
      crsCode: 'DBL'
    },
    {
      stationName: 'Dunbar',
      crsCode: 'DUN'
    },
    {
      stationName: 'Duncraig',
      crsCode: 'DCG'
    },
    {
      stationName: 'Dundee',
      crsCode: 'DEE'
    },
    {
      stationName: 'Dunkeld & Birnam',
      crsCode: 'DKD'
    },
    {
      stationName: 'Cam & Dursley',
      crsCode: 'CDU'
    },
    {
      stationName: 'Dove Holes',
      crsCode: 'DVH'
    },
    {
      stationName: 'Dewsbury',
      crsCode: 'DEW'
    },
    {
      stationName: 'Dyce',
      crsCode: 'DYC'
    },
    {
      stationName: 'Dyffryn Ardudwy',
      crsCode: 'DYF'
    },
    {
      stationName: 'Ealing Broadway',
      crsCode: 'EAL'
    },
    {
      stationName: 'Earlswood (Surrey)',
      crsCode: 'ELD'
    },
    {
      stationName: 'Eastbrook',
      crsCode: 'EBK'
    },
    {
      stationName: 'East Boldon',
      crsCode: 'EBL'
    },
    {
      stationName: 'Eastbourne',
      crsCode: 'EBN'
    },
    {
      stationName: 'Ebbsfleet International',
      crsCode: 'EBD'
    },
    {
      stationName: 'Ebbw Vale Parkway',
      crsCode: 'EBV'
    },
    {
      stationName: 'Ebbw Vale Town',
      crsCode: 'EBB'
    },
    {
      stationName: 'Eccles',
      crsCode: 'ECC'
    },
    {
      stationName: 'Eccles Road',
      crsCode: 'ECS'
    },
    {
      stationName: 'Eccleston Park',
      crsCode: 'ECL'
    },
    {
      stationName: 'East Croydon',
      crsCode: 'ECR'
    },
    {
      stationName: 'Edale',
      crsCode: 'EDL'
    },
    {
      stationName: 'Edge Hill',
      crsCode: 'EDG'
    },
    {
      stationName: 'East Didsbury',
      crsCode: 'EDY'
    },
    {
      stationName: 'Edinburgh',
      crsCode: 'EDB'
    },
    {
      stationName: 'Edinburgh Park',
      crsCode: 'EDP'
    },
    {
      stationName: 'Edmonton Green',
      crsCode: 'EDR'
    },
    {
      stationName: 'Edenbridge',
      crsCode: 'EBR'
    },
    {
      stationName: 'Edenbridge Town',
      crsCode: 'EBT'
    },
    {
      stationName: 'Eden Park',
      crsCode: 'EDN'
    },
    {
      stationName: 'East Dulwich',
      crsCode: 'EDW'
    },
    {
      stationName: 'East Farleigh',
      crsCode: 'EFL'
    },
    {
      stationName: 'Effingham Junction',
      crsCode: 'EFF'
    },
    {
      stationName: 'Eggesford',
      crsCode: 'EGG'
    },
    {
      stationName: 'Egham',
      crsCode: 'EGH'
    },
    {
      stationName: 'Eaglescliffe',
      crsCode: 'EAG'
    },
    {
      stationName: 'East Garforth',
      crsCode: 'EGF'
    },
    {
      stationName: 'East Grinstead',
      crsCode: 'EGR'
    },
    {
      stationName: 'Egton',
      crsCode: 'EGT'
    },
    {
      stationName: 'East Kilbride',
      crsCode: 'EKL'
    },
    {
      stationName: 'Eastleigh',
      crsCode: 'ESL'
    },
    {
      stationName: 'Elgin',
      crsCode: 'ELG'
    },
    {
      stationName: 'Elmers End',
      crsCode: 'ELE'
    },
    {
      stationName: 'Elmswell',
      crsCode: 'ESW'
    },
    {
      stationName: 'Elmstead Woods',
      crsCode: 'ESD'
    },
    {
      stationName: 'Elephant & Castle',
      crsCode: 'EPH'
    },
    {
      stationName: 'Elsecar',
      crsCode: 'ELR'
    },
    {
      stationName: 'Elsenham',
      crsCode: 'ESM'
    },
    {
      stationName: 'Ellesmere Port',
      crsCode: 'ELP'
    },
    {
      stationName: 'Eltham',
      crsCode: 'ELW'
    },
    {
      stationName: 'Elton & Orston',
      crsCode: 'ELO'
    },
    {
      stationName: 'Elstree & Borehamwood',
      crsCode: 'ELS'
    },
    {
      stationName: 'Earlswood (West Midlands)',
      crsCode: 'EWD'
    },
    {
      stationName: 'Ely',
      crsCode: 'ELY'
    },
    {
      stationName: 'East Malling',
      crsCode: 'EML'
    },
    {
      stationName: 'East Midlands Parkway',
      crsCode: 'EMD'
    },
    {
      stationName: 'Emerson Park',
      crsCode: 'EMP'
    },
    {
      stationName: 'Emsworth',
      crsCode: 'EMS'
    },
    {
      stationName: 'Enfield Chase',
      crsCode: 'ENC'
    },
    {
      stationName: 'Enfield Lock',
      crsCode: 'ENL'
    },
    {
      stationName: 'Enfield Town',
      crsCode: 'ENF'
    },
    {
      stationName: 'Entwistle',
      crsCode: 'ENT'
    },
    {
      stationName: 'Epsom Downs',
      crsCode: 'EPD'
    },
    {
      stationName: 'Epsom',
      crsCode: 'EPS'
    },
    {
      stationName: 'Erdington',
      crsCode: 'ERD'
    },
    {
      stationName: 'Energlyn & Churchill Park',
      crsCode: 'ECP'
    },
    {
      stationName: 'Eridge',
      crsCode: 'ERI'
    },
    {
      stationName: 'Erith',
      crsCode: 'ERH'
    },
    {
      stationName: 'Earlsfield',
      crsCode: 'EAD'
    },
    {
      stationName: 'Earlestown',
      crsCode: 'ERL'
    },
    {
      stationName: 'Earley',
      crsCode: 'EAR'
    },
    {
      stationName: 'Esher',
      crsCode: 'ESH'
    },
    {
      stationName: 'Easterhouse',
      crsCode: 'EST'
    },
    {
      stationName: 'Eskbank',
      crsCode: 'EKB'
    },
    {
      stationName: 'Essex Road',
      crsCode: 'EXR'
    },
    {
      stationName: 'Mitcham Eastfields',
      crsCode: 'MTC'
    },
    {
      stationName: 'Eastham Rake',
      crsCode: 'ERA'
    },
    {
      stationName: 'Eastrington',
      crsCode: 'EGN'
    },
    {
      stationName: 'Etchingham',
      crsCode: 'ETC'
    },
    {
      stationName: 'East Tilbury',
      crsCode: 'ETL'
    },
    {
      stationName: 'London Euston',
      crsCode: 'EUS'
    },
    {
      stationName: 'Euxton Balshaw Lane',
      crsCode: 'EBA'
    },
    {
      stationName: 'Evesham',
      crsCode: 'EVE'
    },
    {
      stationName: 'Ewell East',
      crsCode: 'EWE'
    },
    {
      stationName: 'Ewell West',
      crsCode: 'EWW'
    },
    {
      stationName: 'East Worthing',
      crsCode: 'EWR'
    },
    {
      stationName: 'Exeter Central',
      crsCode: 'EXC'
    },
    {
      stationName: 'Exeter St Davids',
      crsCode: 'EXD'
    },
    {
      stationName: 'Exeter St Thomas',
      crsCode: 'EXT'
    },
    {
      stationName: 'Exhibition Centre (Glasgow)',
      crsCode: 'EXG'
    },
    {
      stationName: 'Exmouth',
      crsCode: 'EXM'
    },
    {
      stationName: 'Exton',
      crsCode: 'EXN'
    },
    {
      stationName: 'Eynsford',
      crsCode: 'EYN'
    },
    {
      stationName: 'Fairlie',
      crsCode: 'FRL'
    },
    {
      stationName: 'Falconwood',
      crsCode: 'FCN'
    },
    {
      stationName: 'Falkirk Grahamston',
      crsCode: 'FKG'
    },
    {
      stationName: 'Falkirk High',
      crsCode: 'FKK'
    },
    {
      stationName: 'Falmouth Docks',
      crsCode: 'FAL'
    },
    {
      stationName: 'Falmouth Town',
      crsCode: 'FMT'
    },
    {
      stationName: 'North Fambridge',
      crsCode: 'NFA'
    },
    {
      stationName: 'Falmer',
      crsCode: 'FMR'
    },
    {
      stationName: 'Fareham',
      crsCode: 'FRM'
    },
    {
      stationName: 'Farnham',
      crsCode: 'FNH'
    },
    {
      stationName: 'Fauldhouse',
      crsCode: 'FLD'
    },
    {
      stationName: 'Faversham',
      crsCode: 'FAV'
    },
    {
      stationName: 'Faygate',
      crsCode: 'FGT'
    },
    {
      stationName: 'Fazakerley',
      crsCode: 'FAZ'
    },
    {
      stationName: 'Fearn',
      crsCode: 'FRN'
    },
    {
      stationName: 'Feltham',
      crsCode: 'FEL'
    },
    {
      stationName: 'London Fenchurch Street',
      crsCode: 'FST'
    },
    {
      stationName: 'Feniton',
      crsCode: 'FNT'
    },
    {
      stationName: 'Fernhill',
      crsCode: 'FER'
    },
    {
      stationName: 'Ferriby',
      crsCode: 'FRY'
    },
    {
      stationName: 'Ffairfach',
      crsCode: 'FFA'
    },
    {
      stationName: 'Fishguard Harbour',
      crsCode: 'FGH'
    },
    {
      stationName: 'Fishguard & Goodwick',
      crsCode: 'FGW'
    },
    {
      stationName: 'Filey',
      crsCode: 'FIL'
    },
    {
      stationName: 'Filton Abbey Wood',
      crsCode: 'FIT'
    },
    {
      stationName: 'Finstock',
      crsCode: 'FIN'
    },
    {
      stationName: 'Fiskerton',
      crsCode: 'FSK'
    },
    {
      stationName: 'Fitzwilliam',
      crsCode: 'FZW'
    },
    {
      stationName: 'Five Ways',
      crsCode: 'FWY'
    },
    {
      stationName: 'Fleet',
      crsCode: 'FLE'
    },
    {
      stationName: 'Flimby',
      crsCode: 'FLM'
    },
    {
      stationName: 'Flint',
      crsCode: 'FLN'
    },
    {
      stationName: 'Flitwick',
      crsCode: 'FLT'
    },
    {
      stationName: 'Flixton',
      crsCode: 'FLI'
    },
    {
      stationName: 'Folkestone Central',
      crsCode: 'FKC'
    },
    {
      stationName: 'Folkestone West',
      crsCode: 'FKW'
    },
    {
      stationName: 'Falls of Cruachan',
      crsCode: 'FOC'
    },
    {
      stationName: 'Flowery Field',
      crsCode: 'FLF'
    },
    {
      stationName: 'Felixstowe',
      crsCode: 'FLX'
    },
    {
      stationName: 'Finchley Road & Frognal',
      crsCode: 'FNY'
    },
    {
      stationName: 'Finsbury Park',
      crsCode: 'FPK'
    },
    {
      stationName: 'Ford',
      crsCode: 'FOD'
    },
    {
      stationName: 'Forest Hill',
      crsCode: 'FOH'
    },
    {
      stationName: 'Formby',
      crsCode: 'FBY'
    },
    {
      stationName: 'Forres',
      crsCode: 'FOR'
    },
    {
      stationName: 'Forsinard',
      crsCode: 'FRS'
    },
    {
      stationName: 'Four Oaks',
      crsCode: 'FOK'
    },
    {
      stationName: 'Foxfield',
      crsCode: 'FOX'
    },
    {
      stationName: 'Foxton',
      crsCode: 'FXN'
    },
    {
      stationName: 'Frant',
      crsCode: 'FRT'
    },
    {
      stationName: 'Fratton',
      crsCode: 'FTN'
    },
    {
      stationName: 'Fairbourne',
      crsCode: 'FRB'
    },
    {
      stationName: 'Farnborough (Main)',
      crsCode: 'FNB'
    },
    {
      stationName: 'Farnborough North',
      crsCode: 'FNN'
    },
    {
      stationName: 'Frodsham',
      crsCode: 'FRD'
    },
    {
      stationName: 'Freshford',
      crsCode: 'FFD'
    },
    {
      stationName: 'Fairfield',
      crsCode: 'FRF'
    },
    {
      stationName: 'Frimley',
      crsCode: 'FML'
    },
    {
      stationName: 'Frinton-on-Sea',
      crsCode: 'FRI'
    },
    {
      stationName: 'Farncombe',
      crsCode: 'FNC'
    },
    {
      stationName: 'Farringdon (London)',
      crsCode: 'ZFD'
    },
    {
      stationName: 'Farningham Road',
      crsCode: 'FNR'
    },
    {
      stationName: 'Farnworth',
      crsCode: 'FNW'
    },
    {
      stationName: 'Frome',
      crsCode: 'FRO'
    },
    {
      stationName: 'Frosterley',
      crsCode: 'FRR'
    },
    {
      stationName: 'Freshfield',
      crsCode: 'FRE'
    },
    {
      stationName: 'Forest Gate',
      crsCode: 'FOG'
    },
    {
      stationName: 'Fort Matilda',
      crsCode: 'FTM'
    },
    {
      stationName: 'Fort William',
      crsCode: 'FTW'
    },
    {
      stationName: 'Fairwater',
      crsCode: 'FRW'
    },
    {
      stationName: 'Frizinghall',
      crsCode: 'FZH'
    },
    {
      stationName: 'Fishbourne',
      crsCode: 'FSB'
    },
    {
      stationName: 'Fishersgate',
      crsCode: 'FSG'
    },
    {
      stationName: 'Fenny Stratford',
      crsCode: 'FEN'
    },
    {
      stationName: 'Featherstone',
      crsCode: 'FEA'
    },
    {
      stationName: 'Fulwell',
      crsCode: 'FLW'
    },
    {
      stationName: 'Furness Vale',
      crsCode: 'FNV'
    },
    {
      stationName: 'Furze Platt',
      crsCode: 'FZP'
    },
    {
      stationName: 'Ferryside',
      crsCode: 'FYS'
    },
    {
      stationName: 'Galashiels',
      crsCode: 'GAL'
    },
    {
      stationName: 'Smethwick Galton Bridge',
      crsCode: 'SGB'
    },
    {
      stationName: 'Garforth',
      crsCode: 'GRF'
    },
    {
      stationName: 'Garrowhill',
      crsCode: 'GAR'
    },
    {
      stationName: 'Garsdale',
      crsCode: 'GSD'
    },
    {
      stationName: 'Garth (Powys)',
      crsCode: 'GTH'
    },
    {
      stationName: 'Garve',
      crsCode: 'GVE'
    },
    {
      stationName: 'Garswood',
      crsCode: 'GSW'
    },
    {
      stationName: 'Gathurst',
      crsCode: 'GST'
    },
    {
      stationName: 'Gatley',
      crsCode: 'GTY'
    },
    {
      stationName: 'Gainsborough Lea Road',
      crsCode: 'GBL'
    },
    {
      stationName: 'Greenbank',
      crsCode: 'GBK'
    },
    {
      stationName: 'Gainsborough Central',
      crsCode: 'GNB'
    },
    {
      stationName: 'Godalming',
      crsCode: 'GOD'
    },
    {
      stationName: 'Gerrards Cross',
      crsCode: 'GER'
    },
    {
      stationName: 'Greenfield',
      crsCode: 'GNF'
    },
    {
      stationName: 'Greenford',
      crsCode: 'GFD'
    },
    {
      stationName: 'Giggleswick',
      crsCode: 'GIG'
    },
    {
      stationName: 'Guide Bridge',
      crsCode: 'GUI'
    },
    {
      stationName: 'Gidea Park',
      crsCode: 'GDP'
    },
    {
      stationName: 'Giffnock',
      crsCode: 'GFN'
    },
    {
      stationName: 'Gipsy Hill',
      crsCode: 'GIP'
    },
    {
      stationName: 'Girvan',
      crsCode: 'GIR'
    },
    {
      stationName: 'Glaisdale',
      crsCode: 'GLS'
    },
    {
      stationName: 'Glasshoughton',
      crsCode: 'GLH'
    },
    {
      stationName: 'Glazebrook',
      crsCode: 'GLZ'
    },
    {
      stationName: 'Gilberdyke',
      crsCode: 'GBD'
    },
    {
      stationName: 'Goldthorpe',
      crsCode: 'GOE'
    },
    {
      stationName: 'Gilfach Fargoed',
      crsCode: 'GFF'
    },
    {
      stationName: 'Glasgow Central',
      crsCode: 'GLC'
    },
    {
      stationName: 'Glasgow Central Low Level',
      crsCode: 'GCL'
    },
    {
      stationName: 'High Street (Glasgow)',
      crsCode: 'HST'
    },
    {
      stationName: 'Glengarnock',
      crsCode: 'GLG'
    },
    {
      stationName: 'Glasgow Queen Street',
      crsCode: 'GLQ'
    },
    {
      stationName: 'Glasgow Queen Street Low Level',
      crsCode: 'GQL'
    },
    {
      stationName: 'Gillingham (Dorset)',
      crsCode: 'GIL'
    },
    {
      stationName: 'Glan Conwy',
      crsCode: 'GCW'
    },
    {
      stationName: 'Gleneagles',
      crsCode: 'GLE'
    },
    {
      stationName: 'Glenfinnan',
      crsCode: 'GLF'
    },
    {
      stationName: 'Gillingham (Kent)',
      crsCode: 'GLM'
    },
    {
      stationName: 'Glenrothes with Thornton',
      crsCode: 'GLT'
    },
    {
      stationName: 'Gloucester',
      crsCode: 'GCR'
    },
    {
      stationName: 'Glossop',
      crsCode: 'GLO'
    },
    {
      stationName: 'Glynde',
      crsCode: 'GLY'
    },
    {
      stationName: 'Greenhithe for Bluewater',
      crsCode: 'GNH'
    },
    {
      stationName: 'Green Lane',
      crsCode: 'GNL'
    },
    {
      stationName: 'Gunnersbury',
      crsCode: 'GUN'
    },
    {
      stationName: 'Grangetown (Cardiff)',
      crsCode: 'GTN'
    },
    {
      stationName: 'Greenwich',
      crsCode: 'GNW'
    },
    {
      stationName: 'Gobowen',
      crsCode: 'GOB'
    },
    {
      stationName: 'Godley',
      crsCode: 'GDL'
    },
    {
      stationName: 'Goodmayes',
      crsCode: 'GMY'
    },
    {
      stationName: 'Godstone',
      crsCode: 'GDN'
    },
    {
      stationName: 'Golf Street',
      crsCode: 'GOF'
    },
    {
      stationName: 'Golspie',
      crsCode: 'GOL'
    },
    {
      stationName: 'Gomshall',
      crsCode: 'GOM'
    },
    {
      stationName: 'Goole',
      crsCode: 'GOO'
    },
    {
      stationName: 'Goostrey',
      crsCode: 'GTR'
    },
    {
      stationName: 'Goring & Streatley',
      crsCode: 'GOR'
    },
    {
      stationName: 'Gordon Hill',
      crsCode: 'GDH'
    },
    {
      stationName: 'Gorebridge',
      crsCode: 'GBG'
    },
    {
      stationName: 'Goring-by-Sea',
      crsCode: 'GBS'
    },
    {
      stationName: 'Gorton',
      crsCode: 'GTO'
    },
    {
      stationName: 'Gospel Oak',
      crsCode: 'GPO'
    },
    {
      stationName: 'Gourock',
      crsCode: 'GRK'
    },
    {
      stationName: 'Grange-over-Sands',
      crsCode: 'GOS'
    },
    {
      stationName: 'Gowerton',
      crsCode: 'GWN'
    },
    {
      stationName: 'Goxhill',
      crsCode: 'GOX'
    },
    {
      stationName: 'Grateley',
      crsCode: 'GRT'
    },
    {
      stationName: 'Gravelly Hill',
      crsCode: 'GVH'
    },
    {
      stationName: 'Grays',
      crsCode: 'GRY'
    },
    {
      stationName: 'Green Road',
      crsCode: 'GNR'
    },
    {
      stationName: 'Greenock Central',
      crsCode: 'GKC'
    },
    {
      stationName: 'Greenock West',
      crsCode: 'GKW'
    },
    {
      stationName: 'Gretna Green',
      crsCode: 'GEA'
    },
    {
      stationName: 'Georgemas Junction',
      crsCode: 'GGJ'
    },
    {
      stationName: 'Gargrave',
      crsCode: 'GGV'
    },
    {
      stationName: 'Garelochhead',
      crsCode: 'GCH'
    },
    {
      stationName: 'Grimsby Docks',
      crsCode: 'GMD'
    },
    {
      stationName: 'Grimsby Town',
      crsCode: 'GMB'
    },
    {
      stationName: 'Grindleford',
      crsCode: 'GRN'
    },
    {
      stationName: 'Greenfaulds',
      crsCode: 'GRL'
    },
    {
      stationName: 'Grosmont',
      crsCode: 'GMT'
    },
    {
      stationName: 'Grange Park',
      crsCode: 'GPK'
    },
    {
      stationName: 'Garston (Herts)',
      crsCode: 'GSN'
    },
    {
      stationName: 'Gartcosh',
      crsCode: 'GRH'
    },
    {
      stationName: 'Garth (Bridgend)',
      crsCode: 'GMG'
    },
    {
      stationName: 'Grove Park',
      crsCode: 'GRP'
    },
    {
      stationName: 'Gravesend',
      crsCode: 'GRV'
    },
    {
      stationName: 'Garscadden',
      crsCode: 'GRS'
    },
    {
      stationName: 'Great Ayton',
      crsCode: 'GTA'
    },
    {
      stationName: 'Great Bentley',
      crsCode: 'GRB'
    },
    {
      stationName: 'Great Chesterford',
      crsCode: 'GRC'
    },
    {
      stationName: 'Great Coates',
      crsCode: 'GCT'
    },
    {
      stationName: 'Grantham',
      crsCode: 'GRA'
    },
    {
      stationName: 'Great Malvern',
      crsCode: 'GMV'
    },
    {
      stationName: 'Great Missenden',
      crsCode: 'GMN'
    },
    {
      stationName: 'Metrocentre',
      crsCode: 'MCE'
    },
    {
      stationName: 'Gatwick Airport',
      crsCode: 'GTW'
    },
    {
      stationName: 'Guildford',
      crsCode: 'GLD'
    },
    {
      stationName: 'Guiseley',
      crsCode: 'GSY'
    },
    {
      stationName: 'Gunnislake',
      crsCode: 'GSL'
    },
    {
      stationName: 'Gunton',
      crsCode: 'GNT'
    },
    {
      stationName: 'Gwersyllt',
      crsCode: 'GWE'
    },
    {
      stationName: 'Gypsy Lane',
      crsCode: 'GYP'
    },
    {
      stationName: 'Habrough',
      crsCode: 'HAB'
    },
    {
      stationName: 'Hackney Central',
      crsCode: 'HKC'
    },
    {
      stationName: 'Hackney Wick',
      crsCode: 'HKW'
    },
    {
      stationName: 'Hadfield',
      crsCode: 'HDF'
    },
    {
      stationName: 'Haddiscoe',
      crsCode: 'HAD'
    },
    {
      stationName: 'Hadley Wood',
      crsCode: 'HDW'
    },
    {
      stationName: 'Haddenham & Thame Parkway',
      crsCode: 'HDM'
    },
    {
      stationName: 'Hag Fold',
      crsCode: 'HGF'
    },
    {
      stationName: 'Haggerston',
      crsCode: 'HGG'
    },
    {
      stationName: 'Hagley',
      crsCode: 'HAG'
    },
    {
      stationName: 'Harrogate',
      crsCode: 'HGT'
    },
    {
      stationName: 'Hackney Downs',
      crsCode: 'HAC'
    },
    {
      stationName: 'Hale',
      crsCode: 'HAL'
    },
    {
      stationName: 'Halling',
      crsCode: 'HAI'
    },
    {
      stationName: 'Hall Road',
      crsCode: 'HLR'
    },
    {
      stationName: 'Halesworth',
      crsCode: 'HAS'
    },
    {
      stationName: 'Halewood',
      crsCode: 'HED'
    },
    {
      stationName: 'Hammerton',
      crsCode: 'HMM'
    },
    {
      stationName: 'Hamilton Central',
      crsCode: 'HNC'
    },
    {
      stationName: 'Hamilton West',
      crsCode: 'HNW'
    },
    {
      stationName: 'Hampton (London)',
      crsCode: 'HMP'
    },
    {
      stationName: 'Hamstead (Birmingham)',
      crsCode: 'HSD'
    },
    {
      stationName: 'Birkenhead Hamilton Square',
      crsCode: 'BKQ'
    },
    {
      stationName: 'Hampton Wick',
      crsCode: 'HMW'
    },
    {
      stationName: 'Hanborough',
      crsCode: 'HND'
    },
    {
      stationName: 'Hanwell',
      crsCode: 'HAN'
    },
    {
      stationName: 'Hapton',
      crsCode: 'HPN'
    },
    {
      stationName: 'Harlesden',
      crsCode: 'HDN'
    },
    {
      stationName: 'Hairmyres',
      crsCode: 'HMY'
    },
    {
      stationName: 'Harrow-on-the-Hill',
      crsCode: 'HOH'
    },
    {
      stationName: 'Hartford',
      crsCode: 'HTF'
    },
    {
      stationName: 'Harwich Town',
      crsCode: 'HWC'
    },
    {
      stationName: 'Haslemere',
      crsCode: 'HSL'
    },
    {
      stationName: 'Hassocks',
      crsCode: 'HSK'
    },
    {
      stationName: 'Hastings',
      crsCode: 'HGS'
    },
    {
      stationName: 'Hatfield (Herts)',
      crsCode: 'HAT'
    },
    {
      stationName: 'Hathersage',
      crsCode: 'HSG'
    },
    {
      stationName: 'Hattersley',
      crsCode: 'HTY'
    },
    {
      stationName: 'Hatton (Warks)',
      crsCode: 'HTN'
    },
    {
      stationName: 'Havant',
      crsCode: 'HAV'
    },
    {
      stationName: 'Havenhouse',
      crsCode: 'HVN'
    },
    {
      stationName: 'Haverfordwest',
      crsCode: 'HVF'
    },
    {
      stationName: 'Hawarden',
      crsCode: 'HWD'
    },
    {
      stationName: 'Hawarden Bridge',
      crsCode: 'HWB'
    },
    {
      stationName: 'Hayes & Harlington',
      crsCode: 'HAY'
    },
    {
      stationName: 'Hayle',
      crsCode: 'HYL'
    },
    {
      stationName: 'Haymarket',
      crsCode: 'HYM'
    },
    {
      stationName: 'Hayes (Kent)',
      crsCode: 'HYS'
    },
    {
      stationName: 'Hazel Grove',
      crsCode: 'HAZ'
    },
    {
      stationName: 'Hebden Bridge',
      crsCode: 'HBD'
    },
    {
      stationName: 'Hollingbourne',
      crsCode: 'HBN'
    },
    {
      stationName: 'High Brooms',
      crsCode: 'HIB'
    },
    {
      stationName: 'Hubberts Bridge',
      crsCode: 'HBB'
    },
    {
      stationName: 'Hartlebury',
      crsCode: 'HBY'
    },
    {
      stationName: 'Holmes Chapel',
      crsCode: 'HCH'
    },
    {
      stationName: 'Heckington',
      crsCode: 'HEC'
    },
    {
      stationName: 'Hampton Court',
      crsCode: 'HMC'
    },
    {
      stationName: 'Hednesford',
      crsCode: 'HNF'
    },
    {
      stationName: 'Hendon',
      crsCode: 'HEN'
    },
    {
      stationName: 'Huddersfield',
      crsCode: 'HUD'
    },
    {
      stationName: 'Headcorn',
      crsCode: 'HCN'
    },
    {
      stationName: 'Healing',
      crsCode: 'HLI'
    },
    {
      stationName: 'Heath High Level',
      crsCode: 'HHL'
    },
    {
      stationName: 'Heath Low Level',
      crsCode: 'HLL'
    },
    {
      stationName: 'Hedge End',
      crsCode: 'HDE'
    },
    {
      stationName: 'Headingley',
      crsCode: 'HDY'
    },
    {
      stationName: 'Headstone Lane',
      crsCode: 'HDL'
    },
    {
      stationName: 'Hellifield',
      crsCode: 'HLD'
    },
    {
      stationName: 'Helmsdale',
      crsCode: 'HMS'
    },
    {
      stationName: 'Helsby',
      crsCode: 'HSB'
    },
    {
      stationName: 'Hemel Hempstead',
      crsCode: 'HML'
    },
    {
      stationName: 'Hengoed',
      crsCode: 'HNG'
    },
    {
      stationName: 'Henley-in-Arden',
      crsCode: 'HNL'
    },
    {
      stationName: 'Hensall',
      crsCode: 'HEL'
    },
    {
      stationName: 'Hereford',
      crsCode: 'HFD'
    },
    {
      stationName: 'Herne Hill',
      crsCode: 'HNH'
    },
    {
      stationName: 'Hersham',
      crsCode: 'HER'
    },
    {
      stationName: 'Hertford East',
      crsCode: 'HFE'
    },
    {
      stationName: 'Hessle',
      crsCode: 'HES'
    },
    {
      stationName: 'Heswall',
      crsCode: 'HSW'
    },
    {
      stationName: 'Hever',
      crsCode: 'HEV'
    },
    {
      stationName: 'Heworth',
      crsCode: 'HEW'
    },
    {
      stationName: 'Hexham',
      crsCode: 'HEX'
    },
    {
      stationName: 'Heyford',
      crsCode: 'HYD'
    },
    {
      stationName: 'Heysham Port',
      crsCode: 'HHB'
    },
    {
      stationName: 'Hertford North',
      crsCode: 'HFN'
    },
    {
      stationName: 'Hatfield Peverel',
      crsCode: 'HAP'
    },
    {
      stationName: 'Highbridge & Burnham-on-Sea',
      crsCode: 'HIG'
    },
    {
      stationName: 'Highbury & Islington',
      crsCode: 'HHY'
    },
    {
      stationName: 'Highams Park',
      crsCode: 'HIP'
    },
    {
      stationName: 'Heighington',
      crsCode: 'HEI'
    },
    {
      stationName: 'Highbury & Islington',
      crsCode: 'HII'
    },
    {
      stationName: 'Higham',
      crsCode: 'HGM'
    },
    {
      stationName: 'Hillside',
      crsCode: 'HIL'
    },
    {
      stationName: 'Hilsea',
      crsCode: 'HLS'
    },
    {
      stationName: 'Hinckley',
      crsCode: 'HNK'
    },
    {
      stationName: 'Hindley',
      crsCode: 'HIN'
    },
    {
      stationName: 'Hinton Admiral',
      crsCode: 'HNA'
    },
    {
      stationName: 'Hitchin',
      crsCode: 'HIT'
    },
    {
      stationName: 'Hightown',
      crsCode: 'HTO'
    },
    {
      stationName: 'Hall i\' th\' Wood',
      crsCode: 'HID'
    },
    {
      stationName: 'Hackbridge',
      crsCode: 'HCB'
    },
    {
      stationName: 'Heald Green',
      crsCode: 'HDG'
    },
    {
      stationName: 'Hildenborough',
      crsCode: 'HLB'
    },
    {
      stationName: 'Hillfoot',
      crsCode: 'HLF'
    },
    {
      stationName: 'Halifax',
      crsCode: 'HFX'
    },
    {
      stationName: 'Hall Green',
      crsCode: 'HLG'
    },
    {
      stationName: 'Holmwood',
      crsCode: 'HLM'
    },
    {
      stationName: 'Hillington East',
      crsCode: 'HLE'
    },
    {
      stationName: 'Hillington West',
      crsCode: 'HLW'
    },
    {
      stationName: 'Helensburgh Central',
      crsCode: 'HLC'
    },
    {
      stationName: 'Helensburgh Upper',
      crsCode: 'HLU'
    },
    {
      stationName: 'Haltwhistle',
      crsCode: 'HWH'
    },
    {
      stationName: 'Holyhead',
      crsCode: 'HHD'
    },
    {
      stationName: 'Hamble',
      crsCode: 'HME'
    },
    {
      stationName: 'Hampden Park (Sussex)',
      crsCode: 'HMD'
    },
    {
      stationName: 'Humphrey Park',
      crsCode: 'HUP'
    },
    {
      stationName: 'Hampstead Heath',
      crsCode: 'HDH'
    },
    {
      stationName: 'Hampton-in-Arden',
      crsCode: 'HIA'
    },
    {
      stationName: 'Ham Street',
      crsCode: 'HMT'
    },
    {
      stationName: 'Hamworthy',
      crsCode: 'HAM'
    },
    {
      stationName: 'Hinchley Wood',
      crsCode: 'HYW'
    },
    {
      stationName: 'Handforth',
      crsCode: 'HTH'
    },
    {
      stationName: 'The Hawthorns',
      crsCode: 'THW'
    },
    {
      stationName: 'Harrington',
      crsCode: 'HRR'
    },
    {
      stationName: 'Henley-on-Thames',
      crsCode: 'HOT'
    },
    {
      stationName: 'Huntly',
      crsCode: 'HNT'
    },
    {
      stationName: 'Huntingdon',
      crsCode: 'HUN'
    },
    {
      stationName: 'Hockley',
      crsCode: 'HOC'
    },
    {
      stationName: 'Holton Heath',
      crsCode: 'HOL'
    },
    {
      stationName: 'Holytown',
      crsCode: 'HLY'
    },
    {
      stationName: 'Homerton',
      crsCode: 'HMN'
    },
    {
      stationName: 'Honiton',
      crsCode: 'HON'
    },
    {
      stationName: 'Honley',
      crsCode: 'HOY'
    },
    {
      stationName: 'Honor Oak Park',
      crsCode: 'HPA'
    },
    {
      stationName: 'Honeybourne',
      crsCode: 'HYB'
    },
    {
      stationName: 'Hook',
      crsCode: 'HOK'
    },
    {
      stationName: 'Hooton',
      crsCode: 'HOO'
    },
    {
      stationName: 'Hope (Flintshire)',
      crsCode: 'HPE'
    },
    {
      stationName: 'Hope (Derbyshire)',
      crsCode: 'HOP'
    },
    {
      stationName: 'Hopton Heath',
      crsCode: 'HPT'
    },
    {
      stationName: 'Horley',
      crsCode: 'HOR'
    },
    {
      stationName: 'Horsham',
      crsCode: 'HRH'
    },
    {
      stationName: 'Horwich Parkway',
      crsCode: 'HWI'
    },
    {
      stationName: 'Hoscar',
      crsCode: 'HSC'
    },
    {
      stationName: 'Hough Green',
      crsCode: 'HGN'
    },
    {
      stationName: 'Hounslow',
      crsCode: 'HOU'
    },
    {
      stationName: 'Hove',
      crsCode: 'HOV'
    },
    {
      stationName: 'Howden',
      crsCode: 'HOW'
    },
    {
      stationName: 'Howwood (Renfrewshire)',
      crsCode: 'HOZ'
    },
    {
      stationName: 'How Wood (Herts)',
      crsCode: 'HWW'
    },
    {
      stationName: 'Hoxton',
      crsCode: 'HOX'
    },
    {
      stationName: 'Hoylake',
      crsCode: 'HYK'
    },
    {
      stationName: 'Harringay',
      crsCode: 'HGY'
    },
    {
      stationName: 'Harringay Green Lanes',
      crsCode: 'HRY'
    },
    {
      stationName: 'Harlech',
      crsCode: 'HRL'
    },
    {
      stationName: 'Harold Wood',
      crsCode: 'HRO'
    },
    {
      stationName: 'Harlington (Beds)',
      crsCode: 'HLN'
    },
    {
      stationName: 'Harling Road',
      crsCode: 'HRD'
    },
    {
      stationName: 'Harlow Mill',
      crsCode: 'HWM'
    },
    {
      stationName: 'Harlow Town',
      crsCode: 'HWN'
    },
    {
      stationName: 'Hornbeam Park',
      crsCode: 'HBP'
    },
    {
      stationName: 'Herne Bay',
      crsCode: 'HNB'
    },
    {
      stationName: 'Hornsey',
      crsCode: 'HRN'
    },
    {
      stationName: 'Harrow & Wealdstone',
      crsCode: 'HRW'
    },
    {
      stationName: 'Harpenden',
      crsCode: 'HPD'
    },
    {
      stationName: 'Horsley',
      crsCode: 'HSY'
    },
    {
      stationName: 'Harrietsham',
      crsCode: 'HRM'
    },
    {
      stationName: 'Hurst Green',
      crsCode: 'HUR'
    },
    {
      stationName: 'Hartlepool',
      crsCode: 'HPL'
    },
    {
      stationName: 'Hartwood',
      crsCode: 'HTW'
    },
    {
      stationName: 'Horsforth',
      crsCode: 'HRS'
    },
    {
      stationName: 'Hatch End',
      crsCode: 'HTE'
    },
    {
      stationName: 'Heaton Chapel',
      crsCode: 'HTC'
    },
    {
      stationName: 'Hatfield & Stainforth',
      crsCode: 'HFS'
    },
    {
      stationName: 'Hither Green',
      crsCode: 'HGR'
    },
    {
      stationName: 'Hutton Cranswick',
      crsCode: 'HUT'
    },
    {
      stationName: 'Horton-in-Ribblesdale',
      crsCode: 'HIR'
    },
    {
      stationName: 'Heathrow Airport Terminal 5',
      crsCode: 'HWX'
    },
    {
      stationName: 'Heathrow Terminals 1-3',
      crsCode: 'LHR'
    },
    {
      stationName: 'Heathrow Airport Central Bus Stn (Rail-Air)',
      crsCode: 'HTR'
    },
    {
      stationName: 'Heathrow Terminal 4 (Rail-Air)',
      crsCode: 'HWF'
    },
    {
      stationName: 'Heathrow Terminal 4',
      crsCode: 'HAF'
    },
    {
      stationName: 'Heathrow Terminal 5',
      crsCode: 'HWV'
    },
    {
      stationName: 'Hucknall',
      crsCode: 'HKN'
    },
    {
      stationName: 'Hull',
      crsCode: 'HUL'
    },
    {
      stationName: 'Huncoat',
      crsCode: 'HCT'
    },
    {
      stationName: 'Hungerford',
      crsCode: 'HGD'
    },
    {
      stationName: 'Hunmanby',
      crsCode: 'HUB'
    },
    {
      stationName: 'Hunts Cross',
      crsCode: 'HNX'
    },
    {
      stationName: 'Huyton',
      crsCode: 'HUY'
    },
    {
      stationName: 'Hawkhead',
      crsCode: 'HKH'
    },
    {
      stationName: 'High Wycombe',
      crsCode: 'HWY'
    },
    {
      stationName: 'Haydon Bridge',
      crsCode: 'HDB'
    },
    {
      stationName: 'Hyde Central',
      crsCode: 'HYC'
    },
    {
      stationName: 'Hyde North',
      crsCode: 'HYT'
    },
    {
      stationName: 'Haydons Road',
      crsCode: 'HYR'
    },
    {
      stationName: 'Hykeham',
      crsCode: 'HKM'
    },
    {
      stationName: 'Hyndland',
      crsCode: 'HYN'
    },
    {
      stationName: 'Haywards Heath',
      crsCode: 'HHE'
    },
    {
      stationName: 'IBM (Greenock)',
      crsCode: 'IBM'
    },
    {
      stationName: 'Ifield',
      crsCode: 'IFI'
    },
    {
      stationName: 'Ilford',
      crsCode: 'IFD'
    },
    {
      stationName: 'Ilkeston',
      crsCode: 'ILN'
    },
    {
      stationName: 'Ilkley',
      crsCode: 'ILK'
    },
    {
      stationName: 'Ince (Manchester)',
      crsCode: 'INC'
    },
    {
      stationName: 'Ince & Elton',
      crsCode: 'INE'
    },
    {
      stationName: 'Ingatestone',
      crsCode: 'INT'
    },
    {
      stationName: 'Insch',
      crsCode: 'INS'
    },
    {
      stationName: 'Inverkip',
      crsCode: 'INP'
    },
    {
      stationName: 'Invergowrie',
      crsCode: 'ING'
    },
    {
      stationName: 'Invershin',
      crsCode: 'INH'
    },
    {
      stationName: 'Inverurie',
      crsCode: 'INR'
    },
    {
      stationName: 'Ipswich',
      crsCode: 'IPS'
    },
    {
      stationName: 'Irlam',
      crsCode: 'IRL'
    },
    {
      stationName: 'Irvine',
      crsCode: 'IRV'
    },
    {
      stationName: 'Isleworth',
      crsCode: 'ISL'
    },
    {
      stationName: 'Islip',
      crsCode: 'ISP'
    },
    {
      stationName: 'Iver',
      crsCode: 'IVR'
    },
    {
      stationName: 'Invergordon',
      crsCode: 'IGD'
    },
    {
      stationName: 'Inverkeithing',
      crsCode: 'INK'
    },
    {
      stationName: 'Inverness',
      crsCode: 'INV'
    },
    {
      stationName: 'Ivybridge',
      crsCode: 'IVY'
    },
    {
      stationName: 'James Cook University Hospital',
      crsCode: 'JCH'
    },
    {
      stationName: 'Liverpool James Street',
      crsCode: 'LVJ'
    },
    {
      stationName: 'Johnston (Pembrokeshire)',
      crsCode: 'JOH'
    },
    {
      stationName: 'Johnstone',
      crsCode: 'JHN'
    },
    {
      stationName: 'Jordanhill',
      crsCode: 'JOR'
    },
    {
      stationName: 'Kirkcaldy',
      crsCode: 'KDY'
    },
    {
      stationName: 'Kidderminster',
      crsCode: 'KID'
    },
    {
      stationName: 'Kearsley',
      crsCode: 'KSL'
    },
    {
      stationName: 'Keighley',
      crsCode: 'KEI'
    },
    {
      stationName: 'Keith',
      crsCode: 'KEH'
    },
    {
      stationName: 'Kelvedon',
      crsCode: 'KEL'
    },
    {
      stationName: 'Kemble',
      crsCode: 'KEM'
    },
    {
      stationName: 'Kemsing',
      crsCode: 'KMS'
    },
    {
      stationName: 'Kendal',
      crsCode: 'KEN'
    },
    {
      stationName: 'Kennishead',
      crsCode: 'KNS'
    },
    {
      stationName: 'Kennett',
      crsCode: 'KNE'
    },
    {
      stationName: 'Kensington (Olympia)',
      crsCode: 'KPA'
    },
    {
      stationName: 'Kensal Rise',
      crsCode: 'KNR'
    },
    {
      stationName: 'Kensal Green',
      crsCode: 'KNL'
    },
    {
      stationName: 'Kent House',
      crsCode: 'KTH'
    },
    {
      stationName: 'Kettering',
      crsCode: 'KET'
    },
    {
      stationName: 'Kew Bridge',
      crsCode: 'KWB'
    },
    {
      stationName: 'Kew Gardens',
      crsCode: 'KWG'
    },
    {
      stationName: 'Keyham',
      crsCode: 'KEY'
    },
    {
      stationName: 'Keynsham',
      crsCode: 'KYN'
    },
    {
      stationName: 'Kinghorn',
      crsCode: 'KGH'
    },
    {
      stationName: 'Kings Park',
      crsCode: 'KGP'
    },
    {
      stationName: 'Kingston',
      crsCode: 'KNG'
    },
    {
      stationName: 'Kingussie',
      crsCode: 'KIN'
    },
    {
      stationName: 'Kingswood',
      crsCode: 'KND'
    },
    {
      stationName: 'Kidbrooke',
      crsCode: 'KDB'
    },
    {
      stationName: 'Kidsgrove',
      crsCode: 'KDG'
    },
    {
      stationName: 'Kidwelly',
      crsCode: 'KWL'
    },
    {
      stationName: 'Kildonan',
      crsCode: 'KIL'
    },
    {
      stationName: 'Kilgetty',
      crsCode: 'KGT'
    },
    {
      stationName: 'Kilmarnock',
      crsCode: 'KMK'
    },
    {
      stationName: 'Kilwinning',
      crsCode: 'KWN'
    },
    {
      stationName: 'Kinbrace',
      crsCode: 'KBC'
    },
    {
      stationName: 'Kingham',
      crsCode: 'KGM'
    },
    {
      stationName: 'Kings Sutton',
      crsCode: 'KGS'
    },
    {
      stationName: 'Kirby Cross',
      crsCode: 'KBX'
    },
    {
      stationName: 'Kirkham & Wesham',
      crsCode: 'KKM'
    },
    {
      stationName: 'Kirkby',
      crsCode: 'KIR'
    },
    {
      stationName: 'Kirk Sandall',
      crsCode: 'KKS'
    },
    {
      stationName: 'Kilburn High Road',
      crsCode: 'KBN'
    },
    {
      stationName: 'Kildale',
      crsCode: 'KLD'
    },
    {
      stationName: 'Kings Langley',
      crsCode: 'KGL'
    },
    {
      stationName: 'Kilmaurs',
      crsCode: 'KLM'
    },
    {
      stationName: 'Kilpatrick',
      crsCode: 'KPT'
    },
    {
      stationName: 'Kings Lynn',
      crsCode: 'KLN'
    },
    {
      stationName: 'Kempston Hardwick',
      crsCode: 'KMH'
    },
    {
      stationName: 'Kempton Park',
      crsCode: 'KMP'
    },
    {
      stationName: 'Kemsley',
      crsCode: 'KML'
    },
    {
      stationName: 'Knockholt',
      crsCode: 'KCK'
    },
    {
      stationName: 'Knebworth',
      crsCode: 'KBW'
    },
    {
      stationName: 'Kingsknowe',
      crsCode: 'KGE'
    },
    {
      stationName: 'London Kings Cross',
      crsCode: 'KGX'
    },
    {
      stationName: 'Knighton',
      crsCode: 'KNI'
    },
    {
      stationName: 'Kenley',
      crsCode: 'KLY'
    },
    {
      stationName: 'Kings Norton',
      crsCode: 'KNN'
    },
    {
      stationName: 'Knaresborough',
      crsCode: 'KNA'
    },
    {
      stationName: 'Kintbury',
      crsCode: 'KIT'
    },
    {
      stationName: 'Knottingley',
      crsCode: 'KNO'
    },
    {
      stationName: 'Kentish Town',
      crsCode: 'KTN'
    },
    {
      stationName: 'Kentish Town West',
      crsCode: 'KTW'
    },
    {
      stationName: 'Knucklas',
      crsCode: 'KNU'
    },
    {
      stationName: 'Knutsford',
      crsCode: 'KNF'
    },
    {
      stationName: 'Kings Nympton',
      crsCode: 'KGN'
    },
    {
      stationName: 'Kirkby-in-Furness',
      crsCode: 'KBF'
    },
    {
      stationName: 'Kirkconnel',
      crsCode: 'KRK'
    },
    {
      stationName: 'Kirkdale',
      crsCode: 'KKD'
    },
    {
      stationName: 'Kirkhill',
      crsCode: 'KKH'
    },
    {
      stationName: 'Kirknewton',
      crsCode: 'KKN'
    },
    {
      stationName: 'Kirkstall Forge',
      crsCode: 'KLF'
    },
    {
      stationName: 'Kirkwood',
      crsCode: 'KWD'
    },
    {
      stationName: 'Kirkby in Ashfield',
      crsCode: 'KKB'
    },
    {
      stationName: 'Kirton Lindsey',
      crsCode: 'KTL'
    },
    {
      stationName: 'Kearsney',
      crsCode: 'KSN'
    },
    {
      stationName: 'Kirkby Stephen',
      crsCode: 'KSW'
    },
    {
      stationName: 'Kents Bank',
      crsCode: 'KBK'
    },
    {
      stationName: 'Kenton',
      crsCode: 'KNT'
    },
    {
      stationName: 'Kiveton Bridge',
      crsCode: 'KIV'
    },
    {
      stationName: 'Kiveton Park',
      crsCode: 'KVP'
    },
    {
      stationName: 'Kyle of Lochalsh',
      crsCode: 'KYL'
    },
    {
      stationName: 'Ladybank',
      crsCode: 'LDY'
    },
    {
      stationName: 'Laindon',
      crsCode: 'LAI'
    },
    {
      stationName: 'Lairg',
      crsCode: 'LRG'
    },
    {
      stationName: 'Lake (Isle of Wight)',
      crsCode: 'LKE'
    },
    {
      stationName: 'Lakenheath',
      crsCode: 'LAK'
    },
    {
      stationName: 'Gilshochill',
      crsCode: 'GSC'
    },
    {
      stationName: 'Lamphey',
      crsCode: 'LAM'
    },
    {
      stationName: 'Lanark',
      crsCode: 'LNK'
    },
    {
      stationName: 'Lancaster',
      crsCode: 'LAN'
    },
    {
      stationName: 'Llandudno Junction',
      crsCode: 'LLJ'
    },
    {
      stationName: 'Llanfairfechan',
      crsCode: 'LLF'
    },
    {
      stationName: 'Langley (Berks)',
      crsCode: 'LNY'
    },
    {
      stationName: 'Lapford',
      crsCode: 'LAP'
    },
    {
      stationName: 'Lapworth',
      crsCode: 'LPW'
    },
    {
      stationName: 'Larbert',
      crsCode: 'LBT'
    },
    {
      stationName: 'Largs',
      crsCode: 'LAR'
    },
    {
      stationName: 'Larkhall',
      crsCode: 'LRH'
    },
    {
      stationName: 'Lawrence Hill',
      crsCode: 'LWH'
    },
    {
      stationName: 'Layton (Lancs)',
      crsCode: 'LAY'
    },
    {
      stationName: 'Lazonby & Kirkoswald',
      crsCode: 'LZB'
    },
    {
      stationName: 'Llanbedr',
      crsCode: 'LBR'
    },
    {
      stationName: 'Loughborough Junction',
      crsCode: 'LGJ'
    },
    {
      stationName: 'Loch Eil Outward Bound',
      crsCode: 'LHE'
    },
    {
      stationName: 'Lochailort',
      crsCode: 'LCL'
    },
    {
      stationName: 'Lichfield City',
      crsCode: 'LIC'
    },
    {
      stationName: 'Locheilside',
      crsCode: 'LCS'
    },
    {
      stationName: 'Lochgelly',
      crsCode: 'LCG'
    },
    {
      stationName: 'Lochluichart',
      crsCode: 'LCC'
    },
    {
      stationName: 'Lichfield Trent Valley High Level',
      crsCode: 'LIF'
    },
    {
      stationName: 'Lichfield Trent Valley',
      crsCode: 'LTV'
    },
    {
      stationName: 'Lochwinnoch',
      crsCode: 'LHW'
    },
    {
      stationName: 'Lockerbie',
      crsCode: 'LOC'
    },
    {
      stationName: 'Ledbury',
      crsCode: 'LED'
    },
    {
      stationName: 'Lidlington',
      crsCode: 'LID'
    },
    {
      stationName: 'Ladywell',
      crsCode: 'LAD'
    },
    {
      stationName: 'Lea Bridge',
      crsCode: 'LEB'
    },
    {
      stationName: 'Leagrave',
      crsCode: 'LEA'
    },
    {
      stationName: 'Lea Hall',
      crsCode: 'LEH'
    },
    {
      stationName: 'Lealholm',
      crsCode: 'LHM'
    },
    {
      stationName: 'Leasowe',
      crsCode: 'LSW'
    },
    {
      stationName: 'Leeds',
      crsCode: 'LDS'
    },
    {
      stationName: 'Lee',
      crsCode: 'LEE'
    },
    {
      stationName: 'Lea Green',
      crsCode: 'LEG'
    },
    {
      stationName: 'Leigh (Kent)',
      crsCode: 'LIH'
    },
    {
      stationName: 'Lelant',
      crsCode: 'LEL'
    },
    {
      stationName: 'Lelant Saltings',
      crsCode: 'LTS'
    },
    {
      stationName: 'Lenham',
      crsCode: 'LEN'
    },
    {
      stationName: 'Lenzie',
      crsCode: 'LNZ'
    },
    {
      stationName: 'Leominster',
      crsCode: 'LEO'
    },
    {
      stationName: 'Leicester',
      crsCode: 'LEI'
    },
    {
      stationName: 'Leatherhead',
      crsCode: 'LHD'
    },
    {
      stationName: 'Leuchars',
      crsCode: 'LEU'
    },
    {
      stationName: 'Lewes',
      crsCode: 'LWS'
    },
    {
      stationName: 'Lewisham',
      crsCode: 'LEW'
    },
    {
      stationName: 'Leyland',
      crsCode: 'LEY'
    },
    {
      stationName: 'Leyton Midland Road',
      crsCode: 'LEM'
    },
    {
      stationName: 'Llanfairpwll',
      crsCode: 'LPG'
    },
    {
      stationName: 'Langbank',
      crsCode: 'LGB'
    },
    {
      stationName: 'Longfield',
      crsCode: 'LGF'
    },
    {
      stationName: 'Langho',
      crsCode: 'LHO'
    },
    {
      stationName: 'Langley Mill',
      crsCode: 'LGM'
    },
    {
      stationName: 'Langley Green',
      crsCode: 'LGG'
    },
    {
      stationName: 'Langwith - Whaley Thorns',
      crsCode: 'LAG'
    },
    {
      stationName: 'Lingwood',
      crsCode: 'LGD'
    },
    {
      stationName: 'Leigh-on-Sea',
      crsCode: 'LES'
    },
    {
      stationName: 'Littlehaven',
      crsCode: 'LVN'
    },
    {
      stationName: 'Limehouse',
      crsCode: 'LHS'
    },
    {
      stationName: 'Lincoln Central',
      crsCode: 'LCN'
    },
    {
      stationName: 'Lingfield',
      crsCode: 'LFD'
    },
    {
      stationName: 'Liphook',
      crsCode: 'LIP'
    },
    {
      stationName: 'Liskeard',
      crsCode: 'LSK'
    },
    {
      stationName: 'Liss',
      crsCode: 'LIS'
    },
    {
      stationName: 'Littleborough',
      crsCode: 'LTL'
    },
    {
      stationName: 'London Liverpool Street',
      crsCode: 'LST'
    },
    {
      stationName: 'Lockwood',
      crsCode: 'LCK'
    },
    {
      stationName: 'Llandaf',
      crsCode: 'LLN'
    },
    {
      stationName: 'Llanbradach',
      crsCode: 'LNB'
    },
    {
      stationName: 'Llanbister Road',
      crsCode: 'LLT'
    },
    {
      stationName: 'Llandeilo',
      crsCode: 'LLL'
    },
    {
      stationName: 'Llandrindod',
      crsCode: 'LLO'
    },
    {
      stationName: 'Llandovery',
      crsCode: 'LLV'
    },
    {
      stationName: 'Llandybie',
      crsCode: 'LLI'
    },
    {
      stationName: 'Llangadog',
      crsCode: 'LLG'
    },
    {
      stationName: 'Llangammarch',
      crsCode: 'LLM'
    },
    {
      stationName: 'Llangennech',
      crsCode: 'LLH'
    },
    {
      stationName: 'Llangynllo',
      crsCode: 'LGO'
    },
    {
      stationName: 'Llanharan',
      crsCode: 'LLR'
    },
    {
      stationName: 'Llanhilleth',
      crsCode: 'LTH'
    },
    {
      stationName: 'Llanishen',
      crsCode: 'LLS'
    },
    {
      stationName: 'Llanelli',
      crsCode: 'LLE'
    },
    {
      stationName: 'Llansamlet',
      crsCode: 'LAS'
    },
    {
      stationName: 'Llantwit Major',
      crsCode: 'LWM'
    },
    {
      stationName: 'Llanwrda',
      crsCode: 'LNR'
    },
    {
      stationName: 'Llanwrtyd',
      crsCode: 'LNW'
    },
    {
      stationName: 'Llwynypia',
      crsCode: 'LLY'
    },
    {
      stationName: 'Leamington Spa',
      crsCode: 'LMS'
    },
    {
      stationName: 'Lymington Pier',
      crsCode: 'LYP'
    },
    {
      stationName: 'Lymington Town',
      crsCode: 'LYT'
    },
    {
      stationName: 'Llanaber',
      crsCode: 'LLA'
    },
    {
      stationName: 'Lancing',
      crsCode: 'LAC'
    },
    {
      stationName: 'Llandecwyn',
      crsCode: 'LLC'
    },
    {
      stationName: 'London Bridge',
      crsCode: 'LBG'
    },
    {
      stationName: 'Llandanwg',
      crsCode: 'LDN'
    },
    {
      stationName: 'Landywood',
      crsCode: 'LAW'
    },
    {
      stationName: 'Long Buckby',
      crsCode: 'LBK'
    },
    {
      stationName: 'Longcross',
      crsCode: 'LNG'
    },
    {
      stationName: 'Long Eaton',
      crsCode: 'LGE'
    },
    {
      stationName: 'Longniddry',
      crsCode: 'LND'
    },
    {
      stationName: 'Longport',
      crsCode: 'LPT'
    },
    {
      stationName: 'Linlithgow',
      crsCode: 'LIN'
    },
    {
      stationName: 'Llanrwst',
      crsCode: 'LWR'
    },
    {
      stationName: 'Langside',
      crsCode: 'LGS'
    },
    {
      stationName: 'Longton',
      crsCode: 'LGN'
    },
    {
      stationName: 'Loch Awe',
      crsCode: 'LHA'
    },
    {
      stationName: 'Loughborough (Leics)',
      crsCode: 'LBO'
    },
    {
      stationName: 'Longbridge',
      crsCode: 'LOB'
    },
    {
      stationName: 'London Fields',
      crsCode: 'LOF'
    },
    {
      stationName: 'Longbeck',
      crsCode: 'LGK'
    },
    {
      stationName: 'Looe',
      crsCode: 'LOO'
    },
    {
      stationName: 'Lostock',
      crsCode: 'LOT'
    },
    {
      stationName: 'Lowdham',
      crsCode: 'LOW'
    },
    {
      stationName: 'Low Moor',
      crsCode: 'LMR'
    },
    {
      stationName: 'Lowestoft',
      crsCode: 'LWT'
    },
    {
      stationName: 'Long Preston',
      crsCode: 'LPR'
    },
    {
      stationName: 'London Road (Guildford)',
      crsCode: 'LRD'
    },
    {
      stationName: 'Laurencekirk',
      crsCode: 'LAU'
    },
    {
      stationName: 'Lostock Gralam',
      crsCode: 'LTG'
    },
    {
      stationName: 'Lostock Hall',
      crsCode: 'LOH'
    },
    {
      stationName: 'Lostwithiel',
      crsCode: 'LOS'
    },
    {
      stationName: 'Lower Sydenham',
      crsCode: 'LSY'
    },
    {
      stationName: 'Letchworth',
      crsCode: 'LET'
    },
    {
      stationName: 'Lisvane & Thornhill',
      crsCode: 'LVT'
    },
    {
      stationName: 'Littlehampton',
      crsCode: 'LIT'
    },
    {
      stationName: 'Little Kimble',
      crsCode: 'LTK'
    },
    {
      stationName: 'Littleport',
      crsCode: 'LTP'
    },
    {
      stationName: 'Little Sutton',
      crsCode: 'LTT'
    },
    {
      stationName: 'Leighton Buzzard',
      crsCode: 'LBZ'
    },
    {
      stationName: 'Ludlow',
      crsCode: 'LUD'
    },
    {
      stationName: 'Llandudno',
      crsCode: 'LLD'
    },
    {
      stationName: 'Luton Airport Parkway',
      crsCode: 'LTN'
    },
    {
      stationName: 'Luton',
      crsCode: 'LUT'
    },
    {
      stationName: 'Luxulyan',
      crsCode: 'LUX'
    },
    {
      stationName: 'Levenshulme',
      crsCode: 'LVM'
    },
    {
      stationName: 'Livingston North',
      crsCode: 'LSN'
    },
    {
      stationName: 'Livingston South',
      crsCode: 'LVG'
    },
    {
      stationName: 'Liverpool Central',
      crsCode: 'LVC'
    },
    {
      stationName: 'Liverpool Lime Street',
      crsCode: 'LIV'
    },
    {
      stationName: 'Liverpool Lime Street Low Level',
      crsCode: 'LVL'
    },
    {
      stationName: 'Langwathby',
      crsCode: 'LGW'
    },
    {
      stationName: 'Lydney',
      crsCode: 'LYD'
    },
    {
      stationName: 'Lye (West Midlands)',
      crsCode: 'LYE'
    },
    {
      stationName: 'Lympstone Commando',
      crsCode: 'LYC'
    },
    {
      stationName: 'Lympstone Village',
      crsCode: 'LYM'
    },
    {
      stationName: 'Ashurst New Forest',
      crsCode: 'ANF'
    },
    {
      stationName: 'Llwyngwril',
      crsCode: 'LLW'
    },
    {
      stationName: 'Lytham',
      crsCode: 'LTM'
    },
    {
      stationName: 'Leytonstone High Road',
      crsCode: 'LER'
    },
    {
      stationName: 'Macclesfield',
      crsCode: 'MAC'
    },
    {
      stationName: 'Maesteg (Ewenny Road)',
      crsCode: 'MEW'
    },
    {
      stationName: 'Maesteg',
      crsCode: 'MST'
    },
    {
      stationName: 'Maghull',
      crsCode: 'MAG'
    },
    {
      stationName: 'Malden Manor',
      crsCode: 'MAL'
    },
    {
      stationName: 'Malton',
      crsCode: 'MLT'
    },
    {
      stationName: 'Manea',
      crsCode: 'MNE'
    },
    {
      stationName: 'Manningtree',
      crsCode: 'MNG'
    },
    {
      stationName: 'Manors',
      crsCode: 'MAS'
    },
    {
      stationName: 'Manor Park',
      crsCode: 'MNP'
    },
    {
      stationName: 'Marden',
      crsCode: 'MRN'
    },
    {
      stationName: 'Margate',
      crsCode: 'MAR'
    },
    {
      stationName: 'Marlow',
      crsCode: 'MLW'
    },
    {
      stationName: 'Marple',
      crsCode: 'MPL'
    },
    {
      stationName: 'Marton',
      crsCode: 'MTO'
    },
    {
      stationName: 'London Marylebone',
      crsCode: 'MYB'
    },
    {
      stationName: 'Mountain Ash',
      crsCode: 'MTA'
    },
    {
      stationName: 'Matlock Bath',
      crsCode: 'MTB'
    },
    {
      stationName: 'Matlock',
      crsCode: 'MAT'
    },
    {
      stationName: 'Maxwell Park',
      crsCode: 'MAX'
    },
    {
      stationName: 'Maybole',
      crsCode: 'MAY'
    },
    {
      stationName: 'Maze Hill',
      crsCode: 'MZH'
    },
    {
      stationName: 'Millbrook (Hants)',
      crsCode: 'MBK'
    },
    {
      stationName: 'Micheldever',
      crsCode: 'MIC'
    },
    {
      stationName: 'Machynlleth',
      crsCode: 'MCN'
    },
    {
      stationName: 'Micklefield',
      crsCode: 'MIK'
    },
    {
      stationName: 'Middlesbrough',
      crsCode: 'MBR'
    },
    {
      stationName: 'Maidenhead',
      crsCode: 'MAI'
    },
    {
      stationName: 'Maiden Newton',
      crsCode: 'MDN'
    },
    {
      stationName: 'Middlewood',
      crsCode: 'MDL'
    },
    {
      stationName: 'Meadowhall',
      crsCode: 'MHS'
    },
    {
      stationName: 'Meldreth',
      crsCode: 'MEL'
    },
    {
      stationName: 'Melksham',
      crsCode: 'MKM'
    },
    {
      stationName: 'Meols',
      crsCode: 'MEO'
    },
    {
      stationName: 'Melton (Suffolk)',
      crsCode: 'MES'
    },
    {
      stationName: 'Menheniot',
      crsCode: 'MEN'
    },
    {
      stationName: 'Menston',
      crsCode: 'MNN'
    },
    {
      stationName: 'Meols Cop',
      crsCode: 'MEC'
    },
    {
      stationName: 'Meopham',
      crsCode: 'MEP'
    },
    {
      stationName: 'Merstham',
      crsCode: 'MHM'
    },
    {
      stationName: 'Merthyr Vale',
      crsCode: 'MEV'
    },
    {
      stationName: 'Merthyr Tydfil',
      crsCode: 'MER'
    },
    {
      stationName: 'Mexborough',
      crsCode: 'MEX'
    },
    {
      stationName: 'Morfa Mawddach',
      crsCode: 'MFA'
    },
    {
      stationName: 'Mansfield',
      crsCode: 'MFT'
    },
    {
      stationName: 'Mansfield Woodhouse',
      crsCode: 'MSW'
    },
    {
      stationName: 'Martins Heron',
      crsCode: 'MAO'
    },
    {
      stationName: 'Midgham',
      crsCode: 'MDG'
    },
    {
      stationName: 'Milliken Park',
      crsCode: 'MIN'
    },
    {
      stationName: 'Minffordd Ffestiniog Railway Station',
      crsCode: 'MFD'
    },
    {
      stationName: 'Minffordd',
      crsCode: 'MFF'
    },
    {
      stationName: 'Moreton-in-Marsh',
      crsCode: 'MIM'
    },
    {
      stationName: 'Minster',
      crsCode: 'MSR'
    },
    {
      stationName: 'Mirfield',
      crsCode: 'MIR'
    },
    {
      stationName: 'Mistley',
      crsCode: 'MIS'
    },
    {
      stationName: 'Mitcham Junction',
      crsCode: 'MIJ'
    },
    {
      stationName: 'Markinch',
      crsCode: 'MNC'
    },
    {
      stationName: 'Milton Keynes Central',
      crsCode: 'MKC'
    },
    {
      stationName: 'Market Rasen',
      crsCode: 'MKR'
    },
    {
      stationName: 'Mallaig',
      crsCode: 'MLG'
    },
    {
      stationName: 'Millbrook (Beds)',
      crsCode: 'MLB'
    },
    {
      stationName: 'Mouldsworth',
      crsCode: 'MLD'
    },
    {
      stationName: 'Mauldeth Road',
      crsCode: 'MAU'
    },
    {
      stationName: 'Milford Haven',
      crsCode: 'MFH'
    },
    {
      stationName: 'Milford (Surrey)',
      crsCode: 'MLF'
    },
    {
      stationName: 'Milngavie',
      crsCode: 'MLN'
    },
    {
      stationName: 'Mill Hill Broadway',
      crsCode: 'MIL'
    },
    {
      stationName: 'Mill Hill (Lancs)',
      crsCode: 'MLH'
    },
    {
      stationName: 'Millom',
      crsCode: 'MLM'
    },
    {
      stationName: 'Moulsecoomb',
      crsCode: 'MCB'
    },
    {
      stationName: 'Mills Hill (Manchester)',
      crsCode: 'MIH'
    },
    {
      stationName: 'Melton Mowbray',
      crsCode: 'MMO'
    },
    {
      stationName: 'Malvern Link',
      crsCode: 'MVL'
    },
    {
      stationName: 'Martin Mill',
      crsCode: 'MTM'
    },
    {
      stationName: 'Deansgate',
      crsCode: 'DGT'
    },
    {
      stationName: 'Manchester Airport',
      crsCode: 'MIA'
    },
    {
      stationName: 'Manchester Oxford Road',
      crsCode: 'MCO'
    },
    {
      stationName: 'Manchester Piccadilly',
      crsCode: 'MAN'
    },
    {
      stationName: 'Manchester United FC',
      crsCode: 'MUF'
    },
    {
      stationName: 'Manchester Victoria',
      crsCode: 'MCV'
    },
    {
      stationName: 'Monks Risborough',
      crsCode: 'MRS'
    },
    {
      stationName: 'Manorbier',
      crsCode: 'MRB'
    },
    {
      stationName: 'Manor Road',
      crsCode: 'MNR'
    },
    {
      stationName: 'Mount Vernon',
      crsCode: 'MTV'
    },
    {
      stationName: 'Mobberley',
      crsCode: 'MOB'
    },
    {
      stationName: 'Morchard Road',
      crsCode: 'MRD'
    },
    {
      stationName: 'Monifieth',
      crsCode: 'MON'
    },
    {
      stationName: 'Montpelier',
      crsCode: 'MTP'
    },
    {
      stationName: 'Montrose',
      crsCode: 'MTS'
    },
    {
      stationName: 'Morar',
      crsCode: 'MRR'
    },
    {
      stationName: 'Morecambe',
      crsCode: 'MCM'
    },
    {
      stationName: 'Morden South',
      crsCode: 'MDS'
    },
    {
      stationName: 'Moreton (Dorset)',
      crsCode: 'MTN'
    },
    {
      stationName: 'Moorfields',
      crsCode: 'MRF'
    },
    {
      stationName: 'Moorthorpe',
      crsCode: 'MRP'
    },
    {
      stationName: 'Mossley (Manchester)',
      crsCode: 'MSL'
    },
    {
      stationName: 'Mottisfont & Dunbridge',
      crsCode: 'DBG'
    },
    {
      stationName: 'Motherwell',
      crsCode: 'MTH'
    },
    {
      stationName: 'Mottingham',
      crsCode: 'MTG'
    },
    {
      stationName: 'Moreton (Merseyside)',
      crsCode: 'MRT'
    },
    {
      stationName: 'Motspur Park',
      crsCode: 'MOT'
    },
    {
      stationName: 'Maryport',
      crsCode: 'MRY'
    },
    {
      stationName: 'March',
      crsCode: 'MCH'
    },
    {
      stationName: 'Moorgate',
      crsCode: 'MOG'
    },
    {
      stationName: 'Marks Tey',
      crsCode: 'MKT'
    },
    {
      stationName: 'Market Harborough',
      crsCode: 'MHR'
    },
    {
      stationName: 'Morley',
      crsCode: 'MLY'
    },
    {
      stationName: 'Morpeth',
      crsCode: 'MPT'
    },
    {
      stationName: 'Merryton',
      crsCode: 'MEY'
    },
    {
      stationName: 'Moorside',
      crsCode: 'MSD'
    },
    {
      stationName: 'Marske',
      crsCode: 'MSK'
    },
    {
      stationName: 'Marsden',
      crsCode: 'MSN'
    },
    {
      stationName: 'Marston Green',
      crsCode: 'MGN'
    },
    {
      stationName: 'Mortlake',
      crsCode: 'MTL'
    },
    {
      stationName: 'Maryhill',
      crsCode: 'MYH'
    },
    {
      stationName: 'Maryland',
      crsCode: 'MYL'
    },
    {
      stationName: 'Musselburgh',
      crsCode: 'MUB'
    },
    {
      stationName: 'Moses Gate',
      crsCode: 'MSS'
    },
    {
      stationName: 'Mossley Hill',
      crsCode: 'MSH'
    },
    {
      stationName: 'Moss Side',
      crsCode: 'MOS'
    },
    {
      stationName: 'Mosspark',
      crsCode: 'MPK'
    },
    {
      stationName: 'Moston',
      crsCode: 'MSO'
    },
    {
      stationName: 'Maidstone Barracks',
      crsCode: 'MDB'
    },
    {
      stationName: 'Maidstone East',
      crsCode: 'MDE'
    },
    {
      stationName: 'Maidstone West',
      crsCode: 'MDW'
    },
    {
      stationName: 'Mount Florida',
      crsCode: 'MFL'
    },
    {
      stationName: 'Metheringham',
      crsCode: 'MGM'
    },
    {
      stationName: 'Mortimer',
      crsCode: 'MOR'
    },
    {
      stationName: 'Muirend',
      crsCode: 'MUI'
    },
    {
      stationName: 'Muir of Ord',
      crsCode: 'MOO'
    },
    {
      stationName: 'Mytholmroyd',
      crsCode: 'MYT'
    },
    {
      stationName: 'Newton Abbot',
      crsCode: 'NTA'
    },
    {
      stationName: 'Nafferton',
      crsCode: 'NFN'
    },
    {
      stationName: 'Nailsea & Backwell',
      crsCode: 'NLS'
    },
    {
      stationName: 'Nairn',
      crsCode: 'NRN'
    },
    {
      stationName: 'Nantwich',
      crsCode: 'NAN'
    },
    {
      stationName: 'Narborough',
      crsCode: 'NBR'
    },
    {
      stationName: 'Navigation Road',
      crsCode: 'NVR'
    },
    {
      stationName: 'New Barnet',
      crsCode: 'NBA'
    },
    {
      stationName: 'New Beckenham',
      crsCode: 'NBC'
    },
    {
      stationName: 'North Berwick',
      crsCode: 'NBW'
    },
    {
      stationName: 'Newbridge',
      crsCode: 'NBE'
    },
    {
      stationName: 'New Brighton',
      crsCode: 'NBN'
    },
    {
      stationName: 'Newcraighall',
      crsCode: 'NEW'
    },
    {
      stationName: 'North Dulwich',
      crsCode: 'NDL'
    },
    {
      stationName: 'Neath',
      crsCode: 'NTH'
    },
    {
      stationName: 'Needham Market',
      crsCode: 'NMT'
    },
    {
      stationName: 'Neilston',
      crsCode: 'NEI'
    },
    {
      stationName: 'Neston',
      crsCode: 'NES'
    },
    {
      stationName: 'Nethertown',
      crsCode: 'NRT'
    },
    {
      stationName: 'Netley',
      crsCode: 'NTL'
    },
    {
      stationName: 'Newark North Gate',
      crsCode: 'NNG'
    },
    {
      stationName: 'Newbury Racecourse',
      crsCode: 'NRC'
    },
    {
      stationName: 'Newbury',
      crsCode: 'NBY'
    },
    {
      stationName: 'New Clee',
      crsCode: 'NCE'
    },
    {
      stationName: 'Newhaven Harbour',
      crsCode: 'NVH'
    },
    {
      stationName: 'Newhaven Town',
      crsCode: 'NVN'
    },
    {
      stationName: 'New Lane',
      crsCode: 'NLN'
    },
    {
      stationName: 'New Malden',
      crsCode: 'NEM'
    },
    {
      stationName: 'Newington',
      crsCode: 'NGT'
    },
    {
      stationName: 'Newport (Essex)',
      crsCode: 'NWE'
    },
    {
      stationName: 'Newquay',
      crsCode: 'NQY'
    },
    {
      stationName: 'New Southgate',
      crsCode: 'NSG'
    },
    {
      stationName: 'New Cross Gate ELL',
      crsCode: 'NXG'
    },
    {
      stationName: 'New Holland',
      crsCode: 'NHL'
    },
    {
      stationName: 'Ninian Park',
      crsCode: 'NNP'
    },
    {
      stationName: 'Nitshill',
      crsCode: 'NIT'
    },
    {
      stationName: 'North Llanrwst',
      crsCode: 'NLR'
    },
    {
      stationName: 'Northallerton',
      crsCode: 'NTR'
    },
    {
      stationName: 'Nelson',
      crsCode: 'NEL'
    },
    {
      stationName: 'Northumberland Park',
      crsCode: 'NUM'
    },
    {
      stationName: 'New Milton',
      crsCode: 'NWM'
    },
    {
      stationName: 'Northampton',
      crsCode: 'NMP'
    },
    {
      stationName: 'Nuneaton',
      crsCode: 'NUN'
    },
    {
      stationName: 'Norbury',
      crsCode: 'NRB'
    },
    {
      stationName: 'Normanton',
      crsCode: 'NOR'
    },
    {
      stationName: 'Norwood Junction',
      crsCode: 'NWD'
    },
    {
      stationName: 'New Pudsey',
      crsCode: 'NPD'
    },
    {
      stationName: 'North Queensferry',
      crsCode: 'NQU'
    },
    {
      stationName: 'Narberth',
      crsCode: 'NAR'
    },
    {
      stationName: 'Norbiton',
      crsCode: 'NBT'
    },
    {
      stationName: 'Norwich',
      crsCode: 'NRW'
    },
    {
      stationName: 'Normans Bay',
      crsCode: 'NSB'
    },
    {
      stationName: 'Northfield',
      crsCode: 'NFD'
    },
    {
      stationName: 'Northfleet',
      crsCode: 'NFL'
    },
    {
      stationName: 'North Sheen',
      crsCode: 'NSH'
    },
    {
      stationName: 'Newton St Cyres',
      crsCode: 'NTC'
    },
    {
      stationName: 'North Camp',
      crsCode: 'NCM'
    },
    {
      stationName: 'Northolt Park',
      crsCode: 'NLT'
    },
    {
      stationName: 'Netherfield',
      crsCode: 'NET'
    },
    {
      stationName: 'Northwich',
      crsCode: 'NWI'
    },
    {
      stationName: 'Norton Bridge',
      crsCode: 'NTB'
    },
    {
      stationName: 'Nottingham',
      crsCode: 'NOT'
    },
    {
      stationName: 'North Road',
      crsCode: 'NRD'
    },
    {
      stationName: 'Nunhead',
      crsCode: 'NHD'
    },
    {
      stationName: 'Nunthorpe',
      crsCode: 'NNT'
    },
    {
      stationName: 'Nutbourne',
      crsCode: 'NUT'
    },
    {
      stationName: 'Nutfield',
      crsCode: 'NUF'
    },
    {
      stationName: 'North Walsham',
      crsCode: 'NWA'
    },
    {
      stationName: 'New Cumnock',
      crsCode: 'NCK'
    },
    {
      stationName: 'Newcourt',
      crsCode: 'NCO'
    },
    {
      stationName: 'New Cross ELL',
      crsCode: 'NWX'
    },
    {
      stationName: 'Newcastle',
      crsCode: 'NCL'
    },
    {
      stationName: 'New Eltham',
      crsCode: 'NEH'
    },
    {
      stationName: 'North Wembley',
      crsCode: 'NWB'
    },
    {
      stationName: 'New Hythe',
      crsCode: 'NHE'
    },
    {
      stationName: 'New Mills Central',
      crsCode: 'NMC'
    },
    {
      stationName: 'New Mills Newtown',
      crsCode: 'NMN'
    },
    {
      stationName: 'Newmarket',
      crsCode: 'NMK'
    },
    {
      stationName: 'Newport (S Wales)',
      crsCode: 'NWP'
    },
    {
      stationName: 'Newark Castle',
      crsCode: 'NCT'
    },
    {
      stationName: 'Newstead',
      crsCode: 'NSD'
    },
    {
      stationName: 'Newton Aycliffe',
      crsCode: 'NAY'
    },
    {
      stationName: 'Newtongrange',
      crsCode: 'NEG'
    },
    {
      stationName: 'Newton for Hyde',
      crsCode: 'NWN'
    },
    {
      stationName: 'Newton (S Lanarks)',
      crsCode: 'NTN'
    },
    {
      stationName: 'Newtonmore',
      crsCode: 'NWR'
    },
    {
      stationName: 'Newton-le-Willows',
      crsCode: 'NLW'
    },
    {
      stationName: 'Newton-on-Ayr',
      crsCode: 'NOA'
    },
    {
      stationName: 'Newtown (Powys)',
      crsCode: 'NWT'
    },
    {
      stationName: 'Oakham',
      crsCode: 'OKM'
    },
    {
      stationName: 'Oakengates',
      crsCode: 'OKN'
    },
    {
      stationName: 'Oban',
      crsCode: 'OBN'
    },
    {
      stationName: 'Ockendon',
      crsCode: 'OCK'
    },
    {
      stationName: 'Ockley',
      crsCode: 'OLY'
    },
    {
      stationName: 'Okehampton',
      crsCode: 'OKE'
    },
    {
      stationName: 'Oakleigh Park',
      crsCode: 'OKL'
    },
    {
      stationName: 'Oldfield Park',
      crsCode: 'OLF'
    },
    {
      stationName: 'Old Roan',
      crsCode: 'ORN'
    },
    {
      stationName: 'Old Street',
      crsCode: 'OLD'
    },
    {
      stationName: 'Old Hill',
      crsCode: 'OHL'
    },
    {
      stationName: 'Olton',
      crsCode: 'OLT'
    },
    {
      stationName: 'Overpool',
      crsCode: 'OVE'
    },
    {
      stationName: 'Ore',
      crsCode: 'ORE'
    },
    {
      stationName: 'Orrell Park',
      crsCode: 'OPK'
    },
    {
      stationName: 'Ormskirk',
      crsCode: 'OMS'
    },
    {
      stationName: 'Orpington',
      crsCode: 'ORP'
    },
    {
      stationName: 'Orrell',
      crsCode: 'ORR'
    },
    {
      stationName: 'Otford',
      crsCode: 'OTF'
    },
    {
      stationName: 'Oulton Broad North',
      crsCode: 'OUN'
    },
    {
      stationName: 'Oulton Broad South',
      crsCode: 'OUS'
    },
    {
      stationName: 'Outwood',
      crsCode: 'OUT'
    },
    {
      stationName: 'Overton',
      crsCode: 'OVR'
    },
    {
      stationName: 'Oxenholme Lake District',
      crsCode: 'OXN'
    },
    {
      stationName: 'Oxford',
      crsCode: 'OXF'
    },
    {
      stationName: 'Oxford Parkway',
      crsCode: 'OPY'
    },
    {
      stationName: 'Oxshott',
      crsCode: 'OXS'
    },
    {
      stationName: 'Oxted',
      crsCode: 'OXT'
    },
    {
      stationName: 'Padgate',
      crsCode: 'PDG'
    },
    {
      stationName: 'London Paddington',
      crsCode: 'PAD'
    },
    {
      stationName: 'Paignton',
      crsCode: 'PGN'
    },
    {
      stationName: 'Palmers Green',
      crsCode: 'PAL'
    },
    {
      stationName: 'Pangbourne',
      crsCode: 'PAN'
    },
    {
      stationName: 'Pannal',
      crsCode: 'PNL'
    },
    {
      stationName: 'Parbold',
      crsCode: 'PBL'
    },
    {
      stationName: 'Par',
      crsCode: 'PAR'
    },
    {
      stationName: 'Parson Street',
      crsCode: 'PSN'
    },
    {
      stationName: 'Parton',
      crsCode: 'PRN'
    },
    {
      stationName: 'Patchway',
      crsCode: 'PWY'
    },
    {
      stationName: 'Patterton',
      crsCode: 'PTT'
    },
    {
      stationName: 'Peterborough',
      crsCode: 'PBO'
    },
    {
      stationName: 'Pemberton',
      crsCode: 'PEM'
    },
    {
      stationName: 'Portchester',
      crsCode: 'PTC'
    },
    {
      stationName: 'Queens Road Peckham',
      crsCode: 'QRP'
    },
    {
      stationName: 'Peckham Rye',
      crsCode: 'PMR'
    },
    {
      stationName: 'Peartree',
      crsCode: 'PEA'
    },
    {
      stationName: 'Pegswood',
      crsCode: 'PEG'
    },
    {
      stationName: 'Pembroke Dock',
      crsCode: 'PMD'
    },
    {
      stationName: 'Pembroke',
      crsCode: 'PMB'
    },
    {
      stationName: 'Penarth',
      crsCode: 'PEN'
    },
    {
      stationName: 'Pencoed',
      crsCode: 'PCD'
    },
    {
      stationName: 'Penge West',
      crsCode: 'PNW'
    },
    {
      stationName: 'Pengam',
      crsCode: 'PGM'
    },
    {
      stationName: 'Penhelig',
      crsCode: 'PHG'
    },
    {
      stationName: 'Penistone',
      crsCode: 'PNS'
    },
    {
      stationName: 'Penmere',
      crsCode: 'PNM'
    },
    {
      stationName: 'Penychain',
      crsCode: 'BPC'
    },
    {
      stationName: 'Penzance',
      crsCode: 'PNZ'
    },
    {
      stationName: 'Perranwell',
      crsCode: 'PRW'
    },
    {
      stationName: 'Pershore',
      crsCode: 'PSH'
    },
    {
      stationName: 'Perth',
      crsCode: 'PTH'
    },
    {
      stationName: 'Petts Wood',
      crsCode: 'PET'
    },
    {
      stationName: 'Pewsey',
      crsCode: 'PEW'
    },
    {
      stationName: 'Portsmouth Harbour',
      crsCode: 'PMH'
    },
    {
      stationName: 'Priesthill & Darnley',
      crsCode: 'PTL'
    },
    {
      stationName: 'Pilning',
      crsCode: 'PIL'
    },
    {
      stationName: 'Pinhoe',
      crsCode: 'PIN'
    },
    {
      stationName: 'Pitsea',
      crsCode: 'PSE'
    },
    {
      stationName: 'Park Street',
      crsCode: 'PKT'
    },
    {
      stationName: 'Paddock Wood',
      crsCode: 'PDW'
    },
    {
      stationName: 'Pollokshields East',
      crsCode: 'PLE'
    },
    {
      stationName: 'Pollokshields West',
      crsCode: 'PLW'
    },
    {
      stationName: 'Pollokshaws East',
      crsCode: 'PWE'
    },
    {
      stationName: 'Pollokshaws West',
      crsCode: 'PWW'
    },
    {
      stationName: 'Plumpton',
      crsCode: 'PMP'
    },
    {
      stationName: 'Plumstead',
      crsCode: 'PLU'
    },
    {
      stationName: 'Plockton',
      crsCode: 'PLK'
    },
    {
      stationName: 'Pleasington',
      crsCode: 'PLS'
    },
    {
      stationName: 'Portlethen',
      crsCode: 'PLN'
    },
    {
      stationName: 'Poulton-le-Fylde',
      crsCode: 'PFY'
    },
    {
      stationName: 'Pluckley',
      crsCode: 'PLC'
    },
    {
      stationName: 'Plumley',
      crsCode: 'PLM'
    },
    {
      stationName: 'Plymouth',
      crsCode: 'PLY'
    },
    {
      stationName: 'Pembrey & Burry Port',
      crsCode: 'PBY'
    },
    {
      stationName: 'Penally',
      crsCode: 'PNA'
    },
    {
      stationName: 'Ponders End',
      crsCode: 'PON'
    },
    {
      stationName: 'Penge East',
      crsCode: 'PNE'
    },
    {
      stationName: 'Penkridge',
      crsCode: 'PKG'
    },
    {
      stationName: 'Penmaenmawr',
      crsCode: 'PMW'
    },
    {
      stationName: 'Penrhiwceiber',
      crsCode: 'PER'
    },
    {
      stationName: 'Penshurst',
      crsCode: 'PHR'
    },
    {
      stationName: 'Pontarddulais',
      crsCode: 'PTD'
    },
    {
      stationName: 'Penrith North Lakes',
      crsCode: 'PNR'
    },
    {
      stationName: 'Pontlottyn',
      crsCode: 'PLT'
    },
    {
      stationName: 'Pentre-Bach',
      crsCode: 'PTB'
    },
    {
      stationName: 'Pantyffynnon',
      crsCode: 'PTF'
    },
    {
      stationName: 'Penyffordd',
      crsCode: 'PNF'
    },
    {
      stationName: 'Pont-y-Pant',
      crsCode: 'PYP'
    },
    {
      stationName: 'Pokesdown',
      crsCode: 'POK'
    },
    {
      stationName: 'Polegate',
      crsCode: 'PLG'
    },
    {
      stationName: 'Polmont',
      crsCode: 'PMT'
    },
    {
      stationName: 'Polsloe Bridge',
      crsCode: 'POL'
    },
    {
      stationName: 'Pontypool & New Inn',
      crsCode: 'PPL'
    },
    {
      stationName: 'Pontyclun',
      crsCode: 'PYC'
    },
    {
      stationName: 'Poole',
      crsCode: 'POO'
    },
    {
      stationName: 'Poppleton',
      crsCode: 'POP'
    },
    {
      stationName: 'Porth',
      crsCode: 'POR'
    },
    {
      stationName: 'Possilpark & Parkhouse',
      crsCode: 'PPK'
    },
    {
      stationName: 'Potters Bar',
      crsCode: 'PBR'
    },
    {
      stationName: 'Poynton',
      crsCode: 'PYT'
    },
    {
      stationName: 'Prestonpans',
      crsCode: 'PST'
    },
    {
      stationName: 'Prees',
      crsCode: 'PRS'
    },
    {
      stationName: 'Prescot',
      crsCode: 'PSC'
    },
    {
      stationName: 'Penrhyndeudraeth',
      crsCode: 'PRH'
    },
    {
      stationName: 'Princes Risborough',
      crsCode: 'PRR'
    },
    {
      stationName: 'Prittlewell',
      crsCode: 'PRL'
    },
    {
      stationName: 'Harwich International',
      crsCode: 'HPQ'
    },
    {
      stationName: 'Preston Park',
      crsCode: 'PRP'
    },
    {
      stationName: 'Preston',
      crsCode: 'PRE'
    },
    {
      stationName: 'Porthmadog Harbour Ffestiniog Railway Station',
      crsCode: 'PMG'
    },
    {
      stationName: 'Porthmadog',
      crsCode: 'PTM'
    },
    {
      stationName: 'Portsmouth Arms',
      crsCode: 'PMA'
    },
    {
      stationName: 'Prudhoe',
      crsCode: 'PRU'
    },
    {
      stationName: 'Perry Barr',
      crsCode: 'PRY'
    },
    {
      stationName: 'Penryn',
      crsCode: 'PYN'
    },
    {
      stationName: 'Prestbury',
      crsCode: 'PRB'
    },
    {
      stationName: 'Portsmouth & Southsea',
      crsCode: 'PMS'
    },
    {
      stationName: 'Portslade',
      crsCode: 'PLD'
    },
    {
      stationName: 'Port Sunlight',
      crsCode: 'PSL'
    },
    {
      stationName: 'Paisley Canal',
      crsCode: 'PCN'
    },
    {
      stationName: 'Paisley Gilmour Street',
      crsCode: 'PYG'
    },
    {
      stationName: 'Paisley St James',
      crsCode: 'PYJ'
    },
    {
      stationName: 'Pensarn (Gwynedd)',
      crsCode: 'PES'
    },
    {
      stationName: 'Prestatyn',
      crsCode: 'PRT'
    },
    {
      stationName: 'Parkstone (Dorset)',
      crsCode: 'PKS'
    },
    {
      stationName: 'Port Talbot Parkway',
      crsCode: 'PTA'
    },
    {
      stationName: 'Partick',
      crsCode: 'PTK'
    },
    {
      stationName: 'Pontefract Baghill',
      crsCode: 'PFR'
    },
    {
      stationName: 'Pontefract Monkhill',
      crsCode: 'PFM'
    },
    {
      stationName: 'Pontefract Tanshelf',
      crsCode: 'POT'
    },
    {
      stationName: 'Port Glasgow',
      crsCode: 'PTG'
    },
    {
      stationName: 'Pitlochry',
      crsCode: 'PIT'
    },
    {
      stationName: 'Patricroft',
      crsCode: 'PAT'
    },
    {
      stationName: 'Petersfield',
      crsCode: 'PTR'
    },
    {
      stationName: 'Pontypridd',
      crsCode: 'PPD'
    },
    {
      stationName: 'Pulborough',
      crsCode: 'PUL'
    },
    {
      stationName: 'Purfleet',
      crsCode: 'PFL'
    },
    {
      stationName: 'Purley',
      crsCode: 'PUR'
    },
    {
      stationName: 'Purley Oaks',
      crsCode: 'PUO'
    },
    {
      stationName: 'Putney',
      crsCode: 'PUT'
    },
    {
      stationName: 'Pevensey & Westham',
      crsCode: 'PEV'
    },
    {
      stationName: 'Pevensey Bay',
      crsCode: 'PEB'
    },
    {
      stationName: 'Prestwick',
      crsCode: 'PTW'
    },
    {
      stationName: 'Prestwick Intl Airport',
      crsCode: 'PRA'
    },
    {
      stationName: 'Pwllheli',
      crsCode: 'PWL'
    },
    {
      stationName: 'Polesworth',
      crsCode: 'PSW'
    },
    {
      stationName: 'Pen-y-Bont',
      crsCode: 'PNY'
    },
    {
      stationName: 'Pyle',
      crsCode: 'PYL'
    },
    {
      stationName: 'Quintrell Downs',
      crsCode: 'QUI'
    },
    {
      stationName: 'Queens Park (London)',
      crsCode: 'QPW'
    },
    {
      stationName: 'Queenstown Road (Battersea)',
      crsCode: 'QRB'
    },
    {
      stationName: 'Quakers Yard',
      crsCode: 'QYD'
    },
    {
      stationName: 'Queenborough',
      crsCode: 'QBR'
    },
    {
      stationName: 'Queens Park (Glasgow)',
      crsCode: 'QPK'
    },
    {
      stationName: 'Radlett',
      crsCode: 'RDT'
    },
    {
      stationName: 'Radcliffe (Notts)',
      crsCode: 'RDF'
    },
    {
      stationName: 'Radyr',
      crsCode: 'RDR'
    },
    {
      stationName: 'Rainham (Kent)',
      crsCode: 'RAI'
    },
    {
      stationName: 'Ramsgate',
      crsCode: 'RAM'
    },
    {
      stationName: 'Rannoch',
      crsCode: 'RAN'
    },
    {
      stationName: 'Rauceby',
      crsCode: 'RAU'
    },
    {
      stationName: 'Rawcliffe',
      crsCode: 'RWC'
    },
    {
      stationName: 'Rayleigh',
      crsCode: 'RLG'
    },
    {
      stationName: 'Raynes Park',
      crsCode: 'RAY'
    },
    {
      stationName: 'Ravensbourne',
      crsCode: 'RVB'
    },
    {
      stationName: 'Robertsbridge',
      crsCode: 'RBR'
    },
    {
      stationName: 'Rochdale',
      crsCode: 'RCD'
    },
    {
      stationName: 'Roche',
      crsCode: 'ROC'
    },
    {
      stationName: 'Rochester',
      crsCode: 'RTR'
    },
    {
      stationName: 'Rickmansworth',
      crsCode: 'RIC'
    },
    {
      stationName: 'Rectory Road',
      crsCode: 'REC'
    },
    {
      stationName: 'Reedham (Norfolk)',
      crsCode: 'REE'
    },
    {
      stationName: 'Redditch',
      crsCode: 'RDC'
    },
    {
      stationName: 'Radley',
      crsCode: 'RAD'
    },
    {
      stationName: 'Riddlesdown',
      crsCode: 'RDD'
    },
    {
      stationName: 'Reading',
      crsCode: 'RDG'
    },
    {
      stationName: 'Reading',
      crsCode: 'RBU'
    },
    {
      stationName: 'Redbridge (Hants)',
      crsCode: 'RDB'
    },
    {
      stationName: 'Redcar Central',
      crsCode: 'RCC'
    },
    {
      stationName: 'Redcar East',
      crsCode: 'RCE'
    },
    {
      stationName: 'British Steel Redcar',
      crsCode: 'RBS'
    },
    {
      stationName: 'Reading West',
      crsCode: 'RDW'
    },
    {
      stationName: 'Redhill',
      crsCode: 'RDH'
    },
    {
      stationName: 'Reddish North',
      crsCode: 'RDN'
    },
    {
      stationName: 'Reddish South',
      crsCode: 'RDS'
    },
    {
      stationName: 'Redland',
      crsCode: 'RDA'
    },
    {
      stationName: 'Redruth',
      crsCode: 'RED'
    },
    {
      stationName: 'Reedham (Surrey)',
      crsCode: 'RHM'
    },
    {
      stationName: 'Reigate',
      crsCode: 'REI'
    },
    {
      stationName: 'Renton',
      crsCode: 'RTN'
    },
    {
      stationName: 'Roughton Road',
      crsCode: 'RNR'
    },
    {
      stationName: 'Ravenglass',
      crsCode: 'RAV'
    },
    {
      stationName: 'Rainhill',
      crsCode: 'RNH'
    },
    {
      stationName: 'Rhiwbina',
      crsCode: 'RHI'
    },
    {
      stationName: 'Rhoose',
      crsCode: 'RIA'
    },
    {
      stationName: 'Rhosneigr',
      crsCode: 'RHO'
    },
    {
      stationName: 'Rhyl',
      crsCode: 'RHL'
    },
    {
      stationName: 'Rhymney',
      crsCode: 'RHY'
    },
    {
      stationName: 'Ribblehead',
      crsCode: 'RHD'
    },
    {
      stationName: 'Rice Lane',
      crsCode: 'RIL'
    },
    {
      stationName: 'Richmond (London)',
      crsCode: 'RMD'
    },
    {
      stationName: 'Ridgmont',
      crsCode: 'RID'
    },
    {
      stationName: 'Riding Mill',
      crsCode: 'RDM'
    },
    {
      stationName: 'Risca & Pontymister',
      crsCode: 'RCA'
    },
    {
      stationName: 'Rishton',
      crsCode: 'RIS'
    },
    {
      stationName: 'Ramsgreave & Wilpshire',
      crsCode: 'RGW'
    },
    {
      stationName: 'Rainford',
      crsCode: 'RNF'
    },
    {
      stationName: 'Rainham (London)',
      crsCode: 'RNM'
    },
    {
      stationName: 'Roby',
      crsCode: 'ROB'
    },
    {
      stationName: 'Rochford',
      crsCode: 'RFD'
    },
    {
      stationName: 'Rock Ferry',
      crsCode: 'RFY'
    },
    {
      stationName: 'Rogart',
      crsCode: 'ROG'
    },
    {
      stationName: 'Rogerstone',
      crsCode: 'ROR'
    },
    {
      stationName: 'Rose Hill Marple',
      crsCode: 'RSH'
    },
    {
      stationName: 'Rolleston',
      crsCode: 'ROL'
    },
    {
      stationName: 'Roman Bridge',
      crsCode: 'RMB'
    },
    {
      stationName: 'Romford',
      crsCode: 'RMF'
    },
    {
      stationName: 'Romiley',
      crsCode: 'RML'
    },
    {
      stationName: 'Romsey',
      crsCode: 'ROM'
    },
    {
      stationName: 'Roose',
      crsCode: 'ROO'
    },
    {
      stationName: 'Rose Grove',
      crsCode: 'RSG'
    },
    {
      stationName: 'Rosyth',
      crsCode: 'ROS'
    },
    {
      stationName: 'Rotherham Central',
      crsCode: 'RMC'
    },
    {
      stationName: 'Rowley Regis',
      crsCode: 'ROW'
    },
    {
      stationName: 'Roy Bridge',
      crsCode: 'RYB'
    },
    {
      stationName: 'Roydon',
      crsCode: 'RYN'
    },
    {
      stationName: 'Royston',
      crsCode: 'RYS'
    },
    {
      stationName: 'Ruskington',
      crsCode: 'RKT'
    },
    {
      stationName: 'Retford',
      crsCode: 'RET'
    },
    {
      stationName: 'Retford Low Level',
      crsCode: 'REL'
    },
    {
      stationName: 'Rotherhithe',
      crsCode: 'ROE'
    },
    {
      stationName: 'Rutherglen',
      crsCode: 'RUT'
    },
    {
      stationName: 'Ravensthorpe',
      crsCode: 'RVN'
    },
    {
      stationName: 'Ruabon',
      crsCode: 'RUA'
    },
    {
      stationName: 'Rufford',
      crsCode: 'RUF'
    },
    {
      stationName: 'Rugby',
      crsCode: 'RUG'
    },
    {
      stationName: 'Rugeley Trent Valley',
      crsCode: 'RGL'
    },
    {
      stationName: 'Rugeley Town',
      crsCode: 'RGT'
    },
    {
      stationName: 'Runcorn',
      crsCode: 'RUN'
    },
    {
      stationName: 'Runcorn East',
      crsCode: 'RUE'
    },
    {
      stationName: 'Ruswarp',
      crsCode: 'RUS'
    },
    {
      stationName: 'Rowlands Castle',
      crsCode: 'RLN'
    },
    {
      stationName: 'Ryde Esplanade',
      crsCode: 'RYD'
    },
    {
      stationName: 'Ryde Pier Head',
      crsCode: 'RYP'
    },
    {
      stationName: 'Ryder Brow',
      crsCode: 'RRB'
    },
    {
      stationName: 'Ryde St Johns Road',
      crsCode: 'RYR'
    },
    {
      stationName: 'Rye',
      crsCode: 'RYE'
    },
    {
      stationName: 'Rye House',
      crsCode: 'RYH'
    },
    {
      stationName: 'Sandal & Agbrigg',
      crsCode: 'SNA'
    },
    {
      stationName: 'South Acton',
      crsCode: 'SAT'
    },
    {
      stationName: 'St Andrews Road',
      crsCode: 'SAR'
    },
    {
      stationName: 'Saltaire',
      crsCode: 'SAE'
    },
    {
      stationName: 'Salfords (Surrey)',
      crsCode: 'SAF'
    },
    {
      stationName: 'Salhouse',
      crsCode: 'SAH'
    },
    {
      stationName: 'Salwick',
      crsCode: 'SLW'
    },
    {
      stationName: 'Sampford Courtenay',
      crsCode: 'SMC'
    },
    {
      stationName: 'Sandhills',
      crsCode: 'SDL'
    },
    {
      stationName: 'Sankey for Penketh',
      crsCode: 'SNK'
    },
    {
      stationName: 'Sanquhar',
      crsCode: 'SQH'
    },
    {
      stationName: 'Sarn',
      crsCode: 'SRR'
    },
    {
      stationName: 'Saltash',
      crsCode: 'STS'
    },
    {
      stationName: 'Saxilby',
      crsCode: 'SXY'
    },
    {
      stationName: 'Sandbach',
      crsCode: 'SDB'
    },
    {
      stationName: 'Sawbridgeworth',
      crsCode: 'SAW'
    },
    {
      stationName: 'Southbourne',
      crsCode: 'SOB'
    },
    {
      stationName: 'South Bermondsey',
      crsCode: 'SBM'
    },
    {
      stationName: 'Saltburn',
      crsCode: 'SLB'
    },
    {
      stationName: 'Stallingborough',
      crsCode: 'SLL'
    },
    {
      stationName: 'Southbury',
      crsCode: 'SBU'
    },
    {
      stationName: 'Stalybridge',
      crsCode: 'SYB'
    },
    {
      stationName: 'Scarborough',
      crsCode: 'SCA'
    },
    {
      stationName: 'Scunthorpe',
      crsCode: 'SCU'
    },
    {
      stationName: 'South Croydon',
      crsCode: 'SCY'
    },
    {
      stationName: 'Scotscalder',
      crsCode: 'SCT'
    },
    {
      stationName: 'Scotstounhill',
      crsCode: 'SCH'
    },
    {
      stationName: 'Silverdale',
      crsCode: 'SVR'
    },
    {
      stationName: 'Sudbury Hill Harrow',
      crsCode: 'SDH'
    },
    {
      stationName: 'Sudbury & Harrow Road',
      crsCode: 'SUD'
    },
    {
      stationName: 'Sandling',
      crsCode: 'SDG'
    },
    {
      stationName: 'Swindon',
      crsCode: 'SWI'
    },
    {
      stationName: 'Sandplace',
      crsCode: 'SDP'
    },
    {
      stationName: 'Saundersfoot',
      crsCode: 'SDF'
    },
    {
      stationName: 'Sanderstead',
      crsCode: 'SNR'
    },
    {
      stationName: 'Seaburn',
      crsCode: 'SEB'
    },
    {
      stationName: 'Seaford',
      crsCode: 'SEF'
    },
    {
      stationName: 'Seaham',
      crsCode: 'SEA'
    },
    {
      stationName: 'Seamer',
      crsCode: 'SEM'
    },
    {
      stationName: 'Seascale',
      crsCode: 'SSC'
    },
    {
      stationName: 'Seer Green',
      crsCode: 'SRG'
    },
    {
      stationName: 'Sellafield',
      crsCode: 'SEL'
    },
    {
      stationName: 'Selby',
      crsCode: 'SBY'
    },
    {
      stationName: 'Selhurst',
      crsCode: 'SRS'
    },
    {
      stationName: 'Selling',
      crsCode: 'SEG'
    },
    {
      stationName: 'South Elmsall',
      crsCode: 'SES'
    },
    {
      stationName: 'Selly Oak',
      crsCode: 'SLY'
    },
    {
      stationName: 'Sea Mills',
      crsCode: 'SML'
    },
    {
      stationName: 'Southease',
      crsCode: 'SEE'
    },
    {
      stationName: 'Seaton Carew',
      crsCode: 'SEC'
    },
    {
      stationName: 'Settle',
      crsCode: 'SET'
    },
    {
      stationName: 'Seven Sisters',
      crsCode: 'SVS'
    },
    {
      stationName: 'Severn Tunnel Junction',
      crsCode: 'STJ'
    },
    {
      stationName: 'Seaforth & Litherland',
      crsCode: 'SFL'
    },
    {
      stationName: 'South Greenford',
      crsCode: 'SGN'
    },
    {
      stationName: 'Sugar Loaf',
      crsCode: 'SUG'
    },
    {
      stationName: 'Shadwell',
      crsCode: 'SDE'
    },
    {
      stationName: 'Shalford (Surrey)',
      crsCode: 'SFR'
    },
    {
      stationName: 'Shirehampton',
      crsCode: 'SHH'
    },
    {
      stationName: 'Shanklin',
      crsCode: 'SHN'
    },
    {
      stationName: 'Shawford',
      crsCode: 'SHW'
    },
    {
      stationName: 'Sherburn-in-Elmet',
      crsCode: 'SIE'
    },
    {
      stationName: 'Shoeburyness',
      crsCode: 'SRY'
    },
    {
      stationName: 'Shildon',
      crsCode: 'SHD'
    },
    {
      stationName: 'Sheffield',
      crsCode: 'SHF'
    },
    {
      stationName: 'Shelford (Cambs)',
      crsCode: 'SED'
    },
    {
      stationName: 'Shenfield',
      crsCode: 'SNF'
    },
    {
      stationName: 'Shepperton',
      crsCode: 'SHP'
    },
    {
      stationName: 'Sherborne',
      crsCode: 'SHE'
    },
    {
      stationName: 'Shifnal',
      crsCode: 'SFN'
    },
    {
      stationName: 'Shieldmuir',
      crsCode: 'SDM'
    },
    {
      stationName: 'Shirley',
      crsCode: 'SRL'
    },
    {
      stationName: 'St Helier (London)',
      crsCode: 'SIH'
    },
    {
      stationName: 'South Hampstead',
      crsCode: 'SOH'
    },
    {
      stationName: 'Shenstone',
      crsCode: 'SEN'
    },
    {
      stationName: 'Sholing',
      crsCode: 'SHO'
    },
    {
      stationName: 'Shotton High Level',
      crsCode: 'SHT'
    },
    {
      stationName: 'Shepherds Bush',
      crsCode: 'SPB'
    },
    {
      stationName: 'Stanhope',
      crsCode: 'SNP'
    },
    {
      stationName: 'Shiplake',
      crsCode: 'SHI'
    },
    {
      stationName: 'Shepreth',
      crsCode: 'STH'
    },
    {
      stationName: 'Shipley',
      crsCode: 'SHY'
    },
    {
      stationName: 'Shirebrook',
      crsCode: 'SHB'
    },
    {
      stationName: 'Shoreditch High Street',
      crsCode: 'SDC'
    },
    {
      stationName: 'Sheringham',
      crsCode: 'SHM'
    },
    {
      stationName: 'Shoreham-by-Sea (Sussex)',
      crsCode: 'SSE'
    },
    {
      stationName: 'Shireoaks',
      crsCode: 'SRO'
    },
    {
      stationName: 'Shoreham (Kent)',
      crsCode: 'SEH'
    },
    {
      stationName: 'Sheerness-on-Sea',
      crsCode: 'SSS'
    },
    {
      stationName: 'Shortlands',
      crsCode: 'SRT'
    },
    {
      stationName: 'Shrewsbury',
      crsCode: 'SHR'
    },
    {
      stationName: 'Shettleston',
      crsCode: 'SLS'
    },
    {
      stationName: 'Shotts',
      crsCode: 'SHS'
    },
    {
      stationName: 'Stonehaven',
      crsCode: 'STN'
    },
    {
      stationName: 'Shawfair',
      crsCode: 'SFI'
    },
    {
      stationName: 'Shawlands',
      crsCode: 'SHL'
    },
    {
      stationName: 'Sidcup',
      crsCode: 'SID'
    },
    {
      stationName: 'Silecroft',
      crsCode: 'SIC'
    },
    {
      stationName: 'Sileby',
      crsCode: 'SIL'
    },
    {
      stationName: 'Singer',
      crsCode: 'SIN'
    },
    {
      stationName: 'Silver Street',
      crsCode: 'SLV'
    },
    {
      stationName: 'Skegness',
      crsCode: 'SKG'
    },
    {
      stationName: 'South Kenton',
      crsCode: 'SOK'
    },
    {
      stationName: 'Skewen',
      crsCode: 'SKE'
    },
    {
      stationName: 'Skipton',
      crsCode: 'SKI'
    },
    {
      stationName: 'Silkstone Common',
      crsCode: 'SLK'
    },
    {
      stationName: 'Slade Green',
      crsCode: 'SGR'
    },
    {
      stationName: 'Slateford',
      crsCode: 'SLA'
    },
    {
      stationName: 'Saltcoats',
      crsCode: 'SLT'
    },
    {
      stationName: 'Sleaford',
      crsCode: 'SLR'
    },
    {
      stationName: 'Sleights',
      crsCode: 'SLH'
    },
    {
      stationName: 'Stanford-le-Hope',
      crsCode: 'SFO'
    },
    {
      stationName: 'Salford Crescent',
      crsCode: 'SLD'
    },
    {
      stationName: 'Salford Central',
      crsCode: 'SFD'
    },
    {
      stationName: 'Slough',
      crsCode: 'SLO'
    },
    {
      stationName: 'Salisbury',
      crsCode: 'SAL'
    },
    {
      stationName: 'Slaithwaite',
      crsCode: 'SWT'
    },
    {
      stationName: 'Saltmarshe',
      crsCode: 'SAM'
    },
    {
      stationName: 'Smallbrook Junction',
      crsCode: 'SAB'
    },
    {
      stationName: 'St Margarets (Herts)',
      crsCode: 'SMT'
    },
    {
      stationName: 'Smithy Bridge',
      crsCode: 'SMB'
    },
    {
      stationName: 'South Merton',
      crsCode: 'SMO'
    },
    {
      stationName: 'South Milford',
      crsCode: 'SOM'
    },
    {
      stationName: 'Southminster',
      crsCode: 'SMN'
    },
    {
      stationName: 'Small Heath',
      crsCode: 'SMA'
    },
    {
      stationName: 'Somerleyton',
      crsCode: 'SYT'
    },
    {
      stationName: 'Smethwick Rolfe Street',
      crsCode: 'SMR'
    },
    {
      stationName: 'Snaith',
      crsCode: 'SNI'
    },
    {
      stationName: 'Sandhurst',
      crsCode: 'SND'
    },
    {
      stationName: 'Sandown',
      crsCode: 'SAN'
    },
    {
      stationName: 'Sundridge Park',
      crsCode: 'SUP'
    },
    {
      stationName: 'Sunderland',
      crsCode: 'SUN'
    },
    {
      stationName: 'St Peters',
      crsCode: 'STZ'
    },
    {
      stationName: 'Sandwell & Dudley',
      crsCode: 'SAD'
    },
    {
      stationName: 'Sandy',
      crsCode: 'SDY'
    },
    {
      stationName: 'Stonegate',
      crsCode: 'SOG'
    },
    {
      stationName: 'Snodland',
      crsCode: 'SDA'
    },
    {
      stationName: 'Snowdown',
      crsCode: 'SWO'
    },
    {
      stationName: 'Stratford-upon-Avon',
      crsCode: 'SAV'
    },
    {
      stationName: 'Stratford-upon-Avon Parkway',
      crsCode: 'STY'
    },
    {
      stationName: 'Sole Street',
      crsCode: 'SOR'
    },
    {
      stationName: 'Solihull',
      crsCode: 'SOL'
    },
    {
      stationName: 'Southampton Town Quay',
      crsCode: 'STQ'
    },
    {
      stationName: 'Southampton Central',
      crsCode: 'SOU'
    },
    {
      stationName: 'Southampton Airport Parkway',
      crsCode: 'SOA'
    },
    {
      stationName: 'Southport',
      crsCode: 'SOP'
    },
    {
      stationName: 'Spalding',
      crsCode: 'SPA'
    },
    {
      stationName: 'Spondon',
      crsCode: 'SPO'
    },
    {
      stationName: 'Spean Bridge',
      crsCode: 'SBR'
    },
    {
      stationName: 'Springfield',
      crsCode: 'SPF'
    },
    {
      stationName: 'Shippea Hill',
      crsCode: 'SPP'
    },
    {
      stationName: 'Staplehurst',
      crsCode: 'SPU'
    },
    {
      stationName: 'Spital',
      crsCode: 'SPI'
    },
    {
      stationName: 'Shepley',
      crsCode: 'SPY'
    },
    {
      stationName: 'Spooner Row',
      crsCode: 'SPN'
    },
    {
      stationName: 'Spring Road',
      crsCode: 'SRI'
    },
    {
      stationName: 'Springburn',
      crsCode: 'SPR'
    },
    {
      stationName: 'Shipton',
      crsCode: 'SIP'
    },
    {
      stationName: 'Squires Gate',
      crsCode: 'SQU'
    },
    {
      stationName: 'South Ruislip',
      crsCode: 'SRU'
    },
    {
      stationName: 'Southsea Hoverport',
      crsCode: 'SHV'
    },
    {
      stationName: 'Stafford',
      crsCode: 'STA'
    },
    {
      stationName: 'Staines',
      crsCode: 'SNS'
    },
    {
      stationName: 'St Albans City',
      crsCode: 'SAC'
    },
    {
      stationName: 'St Albans Abbey',
      crsCode: 'SAA'
    },
    {
      stationName: 'Stamford',
      crsCode: 'SMD'
    },
    {
      stationName: 'Stansted Airport',
      crsCode: 'SSD'
    },
    {
      stationName: 'Stansted Mountfitchet',
      crsCode: 'SST'
    },
    {
      stationName: 'Starbeck',
      crsCode: 'SBE'
    },
    {
      stationName: 'St Annes-on-the-Sea',
      crsCode: 'SAS'
    },
    {
      stationName: 'St Austell',
      crsCode: 'SAU'
    },
    {
      stationName: 'Staveley',
      crsCode: 'SVL'
    },
    {
      stationName: 'St Budeaux Ferry Road',
      crsCode: 'SBF'
    },
    {
      stationName: 'St Budeaux Victoria Road',
      crsCode: 'SBV'
    },
    {
      stationName: 'St Bees',
      crsCode: 'SBS'
    },
    {
      stationName: 'Stocksfield',
      crsCode: 'SKS'
    },
    {
      stationName: 'St Columb Road',
      crsCode: 'SCR'
    },
    {
      stationName: 'Strathcarron',
      crsCode: 'STC'
    },
    {
      stationName: 'Stone Crossing',
      crsCode: 'SCG'
    },
    {
      stationName: 'St Denys',
      crsCode: 'SDN'
    },
    {
      stationName: 'Stechford',
      crsCode: 'SCF'
    },
    {
      stationName: 'Steeton & Silsden',
      crsCode: 'SON'
    },
    {
      stationName: 'Stepps',
      crsCode: 'SPS'
    },
    {
      stationName: 'St Erth',
      crsCode: 'SER'
    },
    {
      stationName: 'Stevenage',
      crsCode: 'SVG'
    },
    {
      stationName: 'Stewarton',
      crsCode: 'STT'
    },
    {
      stationName: 'Stratford (London)',
      crsCode: 'SRA'
    },
    {
      stationName: 'Stratford International',
      crsCode: 'SFA'
    },
    {
      stationName: 'St Germans',
      crsCode: 'SGM'
    },
    {
      stationName: 'Southall',
      crsCode: 'STL'
    },
    {
      stationName: 'South Bank',
      crsCode: 'SBK'
    },
    {
      stationName: 'Southend Central',
      crsCode: 'SOC'
    },
    {
      stationName: 'Southend Airport',
      crsCode: 'SIA'
    },
    {
      stationName: 'South Gyle',
      crsCode: 'SGL'
    },
    {
      stationName: 'St Helens Central',
      crsCode: 'SNH'
    },
    {
      stationName: 'St Helens Junction',
      crsCode: 'SHJ'
    },
    {
      stationName: 'Southend East',
      crsCode: 'SOE'
    },
    {
      stationName: 'Streethouse',
      crsCode: 'SHC'
    },
    {
      stationName: 'Southend Victoria',
      crsCode: 'SOV'
    },
    {
      stationName: 'Southwick',
      crsCode: 'SWK'
    },
    {
      stationName: 'Stirling',
      crsCode: 'STG'
    },
    {
      stationName: 'St Ives (Cornwall)',
      crsCode: 'SIV'
    },
    {
      stationName: 'St James Park (Devon)',
      crsCode: 'SJP'
    },
    {
      stationName: 'St James Street (London)',
      crsCode: 'SJS'
    },
    {
      stationName: 'St Johns (London)',
      crsCode: 'SAJ'
    },
    {
      stationName: 'St Keyne Wishing Well Halt ()',
      crsCode: 'SKN'
    },
    {
      stationName: 'Stoke Mandeville',
      crsCode: 'SKM'
    },
    {
      stationName: 'Stoke Newington',
      crsCode: 'SKW'
    },
    {
      stationName: 'Stockport',
      crsCode: 'SPT'
    },
    {
      stationName: 'Stocksmoor',
      crsCode: 'SSM'
    },
    {
      stationName: 'Stoneleigh',
      crsCode: 'SNL'
    },
    {
      stationName: 'St Leonards Warrior Square',
      crsCode: 'SLQ'
    },
    {
      stationName: 'St Michaels',
      crsCode: 'STM'
    },
    {
      stationName: 'Stamford Hill',
      crsCode: 'SMH'
    },
    {
      stationName: 'St Margarets (London)',
      crsCode: 'SMG'
    },
    {
      stationName: 'St Mary Cray',
      crsCode: 'SMY'
    },
    {
      stationName: 'Stonebridge Park',
      crsCode: 'SBP'
    },
    {
      stationName: 'St Neots',
      crsCode: 'SNO'
    },
    {
      stationName: 'Sittingbourne',
      crsCode: 'SIT'
    },
    {
      stationName: 'Stonehouse',
      crsCode: 'SHU'
    },
    {
      stationName: 'Stanlow & Thornton',
      crsCode: 'SNT'
    },
    {
      stationName: 'Stockton',
      crsCode: 'STK'
    },
    {
      stationName: 'Stoke-on-Trent',
      crsCode: 'SOT'
    },
    {
      stationName: 'Stone',
      crsCode: 'SNE'
    },
    {
      stationName: 'South Tottenham',
      crsCode: 'STO'
    },
    {
      stationName: 'Stow',
      crsCode: 'SOI'
    },
    {
      stationName: 'London St Pancras International',
      crsCode: 'STP'
    },
    {
      stationName: 'Stapleton Road',
      crsCode: 'SRD'
    },
    // {
    //   stationName: 'London St Pancras International LL',
    //   crsCode: 'SPL'
    // },
    {
      stationName: 'Stourbridge Junction',
      crsCode: 'SBJ'
    },
    {
      stationName: 'Stourbridge Town',
      crsCode: 'SBT'
    },
    {
      stationName: 'Starcross',
      crsCode: 'SCS'
    },
    {
      stationName: 'Streatham',
      crsCode: 'STE'
    },
    {
      stationName: 'Streatham Common',
      crsCode: 'SRC'
    },
    {
      stationName: 'Streatham Hill',
      crsCode: 'SRH'
    },
    {
      stationName: 'Strines',
      crsCode: 'SRN'
    },
    {
      stationName: 'Stromeferry',
      crsCode: 'STF'
    },
    {
      stationName: 'Stranraer',
      crsCode: 'STR'
    },
    {
      stationName: 'Strood',
      crsCode: 'SOO'
    },
    {
      stationName: 'Stroud (Glos)',
      crsCode: 'STD'
    },
    {
      stationName: 'Strawberry Hill',
      crsCode: 'STW'
    },
    {
      stationName: 'Sutton Parkway',
      crsCode: 'SPK'
    },
    {
      stationName: 'Sturry',
      crsCode: 'STU'
    },
    {
      stationName: 'Stevenston',
      crsCode: 'STV'
    },
    {
      stationName: 'Stowmarket',
      crsCode: 'SMK'
    },
    {
      stationName: 'Stewartby',
      crsCode: 'SWR'
    },
    {
      stationName: 'Styal',
      crsCode: 'SYA'
    },
    {
      stationName: 'Sudbury (Suffolk)',
      crsCode: 'SUY'
    },
    {
      stationName: 'Summerston',
      crsCode: 'SUM'
    },
    {
      stationName: 'Sunbury',
      crsCode: 'SUU'
    },
    {
      stationName: 'Saunderton',
      crsCode: 'SDR'
    },
    {
      stationName: 'Sunningdale',
      crsCode: 'SNG'
    },
    {
      stationName: 'Sunnymeads',
      crsCode: 'SNY'
    },
    {
      stationName: 'Surbiton',
      crsCode: 'SUR'
    },
    {
      stationName: 'Surrey Quays',
      crsCode: 'SQE'
    },
    {
      stationName: 'Sutton Coldfield',
      crsCode: 'SUT'
    },
    {
      stationName: 'Sutton (London)',
      crsCode: 'SUO'
    },
    {
      stationName: 'Sutton Common',
      crsCode: 'SUC'
    },
    {
      stationName: 'Seven Kings',
      crsCode: 'SVK'
    },
    {
      stationName: 'Sevenoaks',
      crsCode: 'SEV'
    },
    {
      stationName: 'Severn Beach',
      crsCode: 'SVB'
    },
    {
      stationName: 'Swale',
      crsCode: 'SWL'
    },
    {
      stationName: 'Swansea',
      crsCode: 'SWA'
    },
    {
      stationName: 'Sway',
      crsCode: 'SWY'
    },
    {
      stationName: 'Sandwich',
      crsCode: 'SDW'
    },
    {
      stationName: 'Shepherds Well',
      crsCode: 'SPH'
    },
    {
      stationName: 'Swinton (South Yorks)',
      crsCode: 'SWN'
    },
    {
      stationName: 'Swanley',
      crsCode: 'SAY'
    },
    {
      stationName: 'Swinderby',
      crsCode: 'SWD'
    },
    {
      stationName: 'Swanscombe',
      crsCode: 'SWM'
    },
    {
      stationName: 'Swinton (Manchester)',
      crsCode: 'SNN'
    },
    {
      stationName: 'Swanwick',
      crsCode: 'SNW'
    },
    {
      stationName: 'Sowerby Bridge',
      crsCode: 'SOW'
    },
    {
      stationName: 'Swineshead',
      crsCode: 'SWE'
    },
    {
      stationName: 'Swaythling',
      crsCode: 'SWG'
    },
    {
      stationName: 'Saxmundham',
      crsCode: 'SAX'
    },
    {
      stationName: 'Sydenham',
      crsCode: 'SYD'
    },
    {
      stationName: 'Sydenham Hill',
      crsCode: 'SYH'
    },
    {
      stationName: 'Syon Lane',
      crsCode: 'SYL'
    },
    {
      stationName: 'Syston',
      crsCode: 'SYS'
    },
    {
      stationName: 'Thornaby',
      crsCode: 'TBY'
    },
    {
      stationName: 'Tackley',
      crsCode: 'TAC'
    },
    {
      stationName: 'Tadworth',
      crsCode: 'TAD'
    },
    {
      stationName: 'Taffs Well',
      crsCode: 'TAF'
    },
    {
      stationName: 'Tain',
      crsCode: 'TAI'
    },
    {
      stationName: 'Talybont',
      crsCode: 'TLB'
    },
    {
      stationName: 'Tal-y-Cafn',
      crsCode: 'TLC'
    },
    {
      stationName: 'Tame Bridge Parkway',
      crsCode: 'TAB'
    },
    {
      stationName: 'Tan-y-Bwlch Ffestiniog Railway Station',
      crsCode: 'TYB'
    },
    {
      stationName: 'Taplow',
      crsCode: 'TAP'
    },
    {
      stationName: 'Tattenham Corner',
      crsCode: 'TAT'
    },
    {
      stationName: 'Taunton',
      crsCode: 'TAU'
    },
    {
      stationName: 'Taynuilt',
      crsCode: 'TAY'
    },
    {
      stationName: 'Thorpe Culvert',
      crsCode: 'TPC'
    },
    {
      stationName: 'Thames Ditton',
      crsCode: 'THD'
    },
    {
      stationName: 'Teddington',
      crsCode: 'TED'
    },
    {
      stationName: 'Teignmouth',
      crsCode: 'TGM'
    },
    {
      stationName: 'Telford Central',
      crsCode: 'TFC'
    },
    {
      stationName: 'Tenby',
      crsCode: 'TEN'
    },
    {
      stationName: 'Teynham',
      crsCode: 'TEY'
    },
    {
      stationName: 'Thornton Abbey',
      crsCode: 'TNA'
    },
    {
      stationName: 'Thorntonhall',
      crsCode: 'THT'
    },
    {
      stationName: 'Thatcham',
      crsCode: 'THA'
    },
    {
      stationName: 'Three Bridges',
      crsCode: 'TBD'
    },
    {
      stationName: 'Theobalds Grove',
      crsCode: 'TEO'
    },
    {
      stationName: 'Theale',
      crsCode: 'THE'
    },
    {
      stationName: 'The Lakes',
      crsCode: 'TLK'
    },
    {
      stationName: 'Thetford',
      crsCode: 'TTF'
    },
    {
      stationName: 'Thornford',
      crsCode: 'THO'
    },
    {
      stationName: 'Thatto Heath',
      crsCode: 'THH'
    },
    {
      stationName: 'Thirsk',
      crsCode: 'THI'
    },
    {
      stationName: 'Thornliebank',
      crsCode: 'THB'
    },
    {
      stationName: 'Three Oaks',
      crsCode: 'TOK'
    },
    {
      stationName: 'Thorpe Bay',
      crsCode: 'TPB'
    },
    {
      stationName: 'Thorne North',
      crsCode: 'TNN'
    },
    {
      stationName: 'Thorne South',
      crsCode: 'TNS'
    },
    {
      stationName: 'Thorpe-le-Soken',
      crsCode: 'TLS'
    },
    {
      stationName: 'Thurgarton',
      crsCode: 'THU'
    },
    {
      stationName: 'Thornton Heath',
      crsCode: 'TTH'
    },
    {
      stationName: 'Thurso',
      crsCode: 'THS'
    },
    {
      stationName: 'Thurston',
      crsCode: 'TRS'
    },
    {
      stationName: 'Tile Hill',
      crsCode: 'THL'
    },
    {
      stationName: 'Tilehurst',
      crsCode: 'TLH'
    },
    {
      stationName: 'Tipton',
      crsCode: 'TIP'
    },
    {
      stationName: 'Tir-phil',
      crsCode: 'TIR'
    },
    {
      stationName: 'Tisbury',
      crsCode: 'TIS'
    },
    {
      stationName: 'Tiverton Parkway',
      crsCode: 'TVP'
    },
    {
      stationName: 'Tilbury Town',
      crsCode: 'TIL'
    },
    {
      stationName: 'Talsarnau',
      crsCode: 'TAL'
    },
    {
      stationName: 'Templecombe',
      crsCode: 'TMC'
    },
    {
      stationName: 'Tamworth High Level',
      crsCode: 'TAH'
    },
    {
      stationName: 'Tamworth',
      crsCode: 'TAM'
    },
    {
      stationName: 'Tonypandy',
      crsCode: 'TNP'
    },
    {
      stationName: 'Todmorden',
      crsCode: 'TOD'
    },
    {
      stationName: 'Tolworth',
      crsCode: 'TOL'
    },
    {
      stationName: 'Tonbridge',
      crsCode: 'TON'
    },
    {
      stationName: 'Tondu',
      crsCode: 'TDU'
    },
    {
      stationName: 'Tonfanau',
      crsCode: 'TNF'
    },
    {
      stationName: 'Ton Pentre',
      crsCode: 'TPN'
    },
    {
      stationName: 'Tooting',
      crsCode: 'TOO'
    },
    {
      stationName: 'Topsham',
      crsCode: 'TOP'
    },
    {
      stationName: 'Torquay',
      crsCode: 'TQY'
    },
    {
      stationName: 'Torre',
      crsCode: 'TRR'
    },
    {
      stationName: 'Totnes',
      crsCode: 'TOT'
    },
    {
      stationName: 'Totton',
      crsCode: 'TTN'
    },
    {
      stationName: 'Town Green',
      crsCode: 'TWN'
    },
    {
      stationName: 'Troed-y-Rhiw',
      crsCode: 'TRD'
    },
    {
      stationName: 'Trefforest',
      crsCode: 'TRF'
    },
    {
      stationName: 'Trehafod',
      crsCode: 'TRH'
    },
    {
      stationName: 'Treherbert',
      crsCode: 'TRB'
    },
    {
      stationName: 'Treorchy',
      crsCode: 'TRY'
    },
    {
      stationName: 'Trafford Park',
      crsCode: 'TRA'
    },
    {
      stationName: 'Trefforest Estate',
      crsCode: 'TRE'
    },
    {
      stationName: 'Trimley',
      crsCode: 'TRM'
    },
    {
      stationName: 'Tring',
      crsCode: 'TRI'
    },
    {
      stationName: 'Thurnscoe',
      crsCode: 'THC'
    },
    {
      stationName: 'Troon',
      crsCode: 'TRN'
    },
    {
      stationName: 'Truro',
      crsCode: 'TRU'
    },
    {
      stationName: 'Trowbridge',
      crsCode: 'TRO'
    },
    {
      stationName: 'Tees-side Airport',
      crsCode: 'TEA'
    },
    {
      stationName: 'Tottenham Hale',
      crsCode: 'TOM'
    },
    {
      stationName: 'Tulloch',
      crsCode: 'TUL'
    },
    {
      stationName: 'Tulse Hill',
      crsCode: 'TUH'
    },
    {
      stationName: 'Tunbridge Wells',
      crsCode: 'TBW'
    },
    {
      stationName: 'Turkey Street',
      crsCode: 'TUR'
    },
    {
      stationName: 'Tutbury & Hatton',
      crsCode: 'TUT'
    },
    {
      stationName: 'Twickenham',
      crsCode: 'TWI'
    },
    {
      stationName: 'Tweedbank',
      crsCode: 'TWB'
    },
    {
      stationName: 'Twyford',
      crsCode: 'TWY'
    },
    {
      stationName: 'Ty Croes',
      crsCode: 'TYC'
    },
    {
      stationName: 'Ty Glas',
      crsCode: 'TGS'
    },
    {
      stationName: 'Tygwyn',
      crsCode: 'TYG'
    },
    {
      stationName: 'Tyndrum Lower',
      crsCode: 'TYL'
    },
    {
      stationName: 'Upper Tyndrum',
      crsCode: 'UTY'
    },
    {
      stationName: 'Tyseley',
      crsCode: 'TYS'
    },
    {
      stationName: 'Tywyn',
      crsCode: 'TYW'
    },
    {
      stationName: 'Uckfield',
      crsCode: 'UCK'
    },
    {
      stationName: 'Uddingston',
      crsCode: 'UDD'
    },
    {
      stationName: 'Upper Halliford',
      crsCode: 'UPH'
    },
    {
      stationName: 'Ulceby',
      crsCode: 'ULC'
    },
    {
      stationName: 'Ulleskelf',
      crsCode: 'ULL'
    },
    {
      stationName: 'Ulverston',
      crsCode: 'ULV'
    },
    {
      stationName: 'Umberleigh',
      crsCode: 'UMB'
    },
    {
      stationName: 'University',
      crsCode: 'UNI'
    },
    {
      stationName: 'Uphall',
      crsCode: 'UHA'
    },
    {
      stationName: 'Upholland',
      crsCode: 'UPL'
    },
    {
      stationName: 'Upminster',
      crsCode: 'UPM'
    },
    {
      stationName: 'Upper Holloway',
      crsCode: 'UHL'
    },
    {
      stationName: 'Upton',
      crsCode: 'UPT'
    },
    {
      stationName: 'Upwey',
      crsCode: 'UPW'
    },
    {
      stationName: 'Urmston',
      crsCode: 'URM'
    },
    {
      stationName: 'Uttoxeter',
      crsCode: 'UTT'
    },
    {
      stationName: 'Upper Warlingham',
      crsCode: 'UWL'
    },
    {
      stationName: 'Valley',
      crsCode: 'VAL'
    },
    {
      stationName: 'Vauxhall',
      crsCode: 'VXH'
    },
    {
      stationName: 'London Victoria',
      crsCode: 'VIC'
    },
    {
      stationName: 'Virginia Water',
      crsCode: 'VIR'
    },
    {
      stationName: 'Waddon',
      crsCode: 'WDO'
    },
    {
      stationName: 'Wadhurst',
      crsCode: 'WAD'
    },
    {
      stationName: 'Wainfleet',
      crsCode: 'WFL'
    },
    {
      stationName: 'Wallasey Grove Road',
      crsCode: 'WLG'
    },
    {
      stationName: 'Wallasey Village',
      crsCode: 'WLV'
    },
    {
      stationName: 'West Allerton',
      crsCode: 'WSA'
    },
    {
      stationName: 'Waltham Cross',
      crsCode: 'WLC'
    },
    {
      stationName: 'Walkden',
      crsCode: 'WKD'
    },
    {
      stationName: 'Wallyford',
      crsCode: 'WAF'
    },
    {
      stationName: 'Walmer',
      crsCode: 'WAM'
    },
    {
      stationName: 'Wallington',
      crsCode: 'WLT'
    },
    {
      stationName: 'Walsall',
      crsCode: 'WSL'
    },
    {
      stationName: 'Walton (Merseyside)',
      crsCode: 'WAO'
    },
    {
      stationName: 'Wanborough',
      crsCode: 'WAN'
    },
    {
      stationName: 'Wandsworth Common',
      crsCode: 'WSW'
    },
    {
      stationName: 'Wapping',
      crsCode: 'WPE'
    },
    {
      stationName: 'Ware',
      crsCode: 'WAR'
    },
    {
      stationName: 'Wargrave',
      crsCode: 'WGV'
    },
    {
      stationName: 'Wareham',
      crsCode: 'WRM'
    },
    {
      stationName: 'Warnham',
      crsCode: 'WNH'
    },
    {
      stationName: 'Warwick',
      crsCode: 'WRW'
    },
    {
      stationName: 'Warwick Parkway',
      crsCode: 'WRP'
    },
    {
      stationName: 'Waterbeach',
      crsCode: 'WBC'
    },
    {
      stationName: 'Watford High Street',
      crsCode: 'WFH'
    },
    {
      stationName: 'Watford Junction',
      crsCode: 'WFJ'
    },
    {
      stationName: 'Watford North',
      crsCode: 'WFN'
    },
    {
      stationName: 'Watlington',
      crsCode: 'WTG'
    },
    {
      stationName: 'Watton-at-Stone',
      crsCode: 'WAS'
    },
    {
      stationName: 'London Waterloo',
      crsCode: 'WAT'
    },
    {
      stationName: 'Whatstandwell',
      crsCode: 'WTS'
    },
    {
      stationName: 'Waun-gron Park',
      crsCode: 'WNG'
    },
    {
      stationName: 'West Brompton',
      crsCode: 'WBP'
    },
    {
      stationName: 'West Byfleet',
      crsCode: 'WBY'
    },
    {
      stationName: 'West Calder',
      crsCode: 'WCL'
    },
    {
      stationName: 'Whitechapel',
      crsCode: 'ZWL'
    },
    {
      stationName: 'Whitchurch (Shrops)',
      crsCode: 'WTC'
    },
    {
      stationName: 'Wickham Market',
      crsCode: 'WCM'
    },
    {
      stationName: 'Westcliff-on-Sea',
      crsCode: 'WCF'
    },
    {
      stationName: 'Westcombe Park',
      crsCode: 'WCB'
    },
    {
      stationName: 'West Croydon',
      crsCode: 'WCY'
    },
    {
      stationName: 'Walsden',
      crsCode: 'WDN'
    },
    {
      stationName: 'Woodgrange Park',
      crsCode: 'WGR'
    },
    {
      stationName: 'South Woodham Ferrers',
      crsCode: 'SOF'
    },
    {
      stationName: 'Woodhouse',
      crsCode: 'WDH'
    },
    {
      stationName: 'Woodlesford',
      crsCode: 'WDS'
    },
    {
      stationName: 'Woodmansterne',
      crsCode: 'WME'
    },
    {
      stationName: 'Wood End',
      crsCode: 'WDE'
    },
    {
      stationName: 'Widney Manor',
      crsCode: 'WMR'
    },
    {
      stationName: 'Wimbledon',
      crsCode: 'WIM'
    },
    {
      stationName: 'Widdrington',
      crsCode: 'WDD'
    },
    {
      stationName: 'West Drayton',
      crsCode: 'WDT'
    },
    {
      stationName: 'Wood Street',
      crsCode: 'WST'
    },
    {
      stationName: 'West Dulwich',
      crsCode: 'WDU'
    },
    {
      stationName: 'Wandsworth Town',
      crsCode: 'WNT'
    },
    {
      stationName: 'West Ealing',
      crsCode: 'WEA'
    },
    {
      stationName: 'Wedgwood',
      crsCode: 'WED'
    },
    {
      stationName: 'Weeley',
      crsCode: 'WEE'
    },
    {
      stationName: 'Weeton',
      crsCode: 'WET'
    },
    {
      stationName: 'Welham Green',
      crsCode: 'WMG'
    },
    {
      stationName: 'Welling',
      crsCode: 'WLI'
    },
    {
      stationName: 'Wellington (Shropshire)',
      crsCode: 'WLN'
    },
    {
      stationName: 'Welshpool',
      crsCode: 'WLP'
    },
    {
      stationName: 'Wembley Stadium',
      crsCode: 'WCX'
    },
    {
      stationName: 'Wem',
      crsCode: 'WEM'
    },
    {
      stationName: 'Wemyss Bay',
      crsCode: 'WMS'
    },
    {
      stationName: 'Wendover',
      crsCode: 'WND'
    },
    {
      stationName: 'Westenhanger',
      crsCode: 'WHA'
    },
    {
      stationName: 'Wennington',
      crsCode: 'WNN'
    },
    {
      stationName: 'Westgate-on-Sea',
      crsCode: 'WGA'
    },
    {
      stationName: 'Westerton',
      crsCode: 'WES'
    },
    {
      stationName: 'Wetheral',
      crsCode: 'WRL'
    },
    {
      stationName: 'Weybridge',
      crsCode: 'WYB'
    },
    {
      stationName: 'Weymouth',
      crsCode: 'WEY'
    },
    {
      stationName: 'South Wigston',
      crsCode: 'SWS'
    },
    {
      stationName: 'Wester Hailes',
      crsCode: 'WTA'
    },
    {
      stationName: 'Whalley',
      crsCode: 'WHE'
    },
    {
      stationName: 'Whaley Bridge',
      crsCode: 'WBR'
    },
    {
      stationName: 'West Ham',
      crsCode: 'WEH'
    },
    {
      stationName: 'Whitchurch (Cardiff)',
      crsCode: 'WHT'
    },
    {
      stationName: 'Woodhall',
      crsCode: 'WDL'
    },
    {
      stationName: 'White Hart Lane',
      crsCode: 'WHL'
    },
    {
      stationName: 'Whifflet',
      crsCode: 'WFF'
    },
    {
      stationName: 'Whimple',
      crsCode: 'WHM'
    },
    {
      stationName: 'Whinhill',
      crsCode: 'WNL'
    },
    {
      stationName: 'Whiston',
      crsCode: 'WHN'
    },
    {
      stationName: 'Whitehaven',
      crsCode: 'WTH'
    },
    {
      stationName: 'Whitland',
      crsCode: 'WTL'
    },
    {
      stationName: 'Whitlocks End',
      crsCode: 'WTE'
    },
    {
      stationName: 'West Hampstead',
      crsCode: 'WHD'
    },
    {
      stationName: 'West Hampstead Thameslink',
      crsCode: 'WHP'
    },
    {
      stationName: 'West Horndon',
      crsCode: 'WHR'
    },
    {
      stationName: 'Whitstable',
      crsCode: 'WHI'
    },
    {
      stationName: 'Whitley Bridge',
      crsCode: 'WBD'
    },
    {
      stationName: 'Whitchurch (Hants)',
      crsCode: 'WCH'
    },
    {
      stationName: 'Whittlesea',
      crsCode: 'WLE'
    },
    {
      stationName: 'Whitton',
      crsCode: 'WTN'
    },
    {
      stationName: 'Whitwell (Derbys)',
      crsCode: 'WWL'
    },
    {
      stationName: 'Whyteleafe',
      crsCode: 'WHY'
    },
    {
      stationName: 'Whyteleafe South',
      crsCode: 'WHS'
    },
    {
      stationName: 'Wick',
      crsCode: 'WCK'
    },
    {
      stationName: 'Widnes',
      crsCode: 'WID'
    },
    {
      stationName: 'Wigan North Western',
      crsCode: 'WGN'
    },
    {
      stationName: 'Wigan Wallgate',
      crsCode: 'WGW'
    },
    {
      stationName: 'Wigton',
      crsCode: 'WGT'
    },
    {
      stationName: 'Wickford',
      crsCode: 'WIC'
    },
    {
      stationName: 'Wilmcote',
      crsCode: 'WMC'
    },
    {
      stationName: 'Wilnecote (Staffs)',
      crsCode: 'WNE'
    },
    {
      stationName: 'Wimbledon Chase',
      crsCode: 'WBO'
    },
    {
      stationName: 'Winchelsea',
      crsCode: 'WSE'
    },
    {
      stationName: 'Windsor & Eton Central',
      crsCode: 'WNC'
    },
    {
      stationName: 'Winnersh',
      crsCode: 'WNS'
    },
    {
      stationName: 'Winnersh Triangle',
      crsCode: 'WTI'
    },
    {
      stationName: 'Wishaw',
      crsCode: 'WSH'
    },
    {
      stationName: 'Witham (Essex)',
      crsCode: 'WTM'
    },
    {
      stationName: 'Witley',
      crsCode: 'WTY'
    },
    {
      stationName: 'Witton (West Midlands)',
      crsCode: 'WTT'
    },
    {
      stationName: 'Wivenhoe',
      crsCode: 'WIV'
    },
    {
      stationName: 'Wakefield Kirkgate',
      crsCode: 'WKK'
    },
    {
      stationName: 'Wakefield Westgate',
      crsCode: 'WKF'
    },
    {
      stationName: 'West Kilbride',
      crsCode: 'WKB'
    },
    {
      stationName: 'West Kirby',
      crsCode: 'WKI'
    },
    {
      stationName: 'Workington',
      crsCode: 'WKG'
    },
    {
      stationName: 'Wildmill',
      crsCode: 'WMI'
    },
    {
      stationName: 'Woldingham',
      crsCode: 'WOH'
    },
    {
      stationName: 'Wilmslow',
      crsCode: 'WML'
    },
    {
      stationName: 'Wellingborough',
      crsCode: 'WEL'
    },
    {
      stationName: 'Willington',
      crsCode: 'WIL'
    },
    {
      stationName: 'London Waterloo East',
      crsCode: 'WAE'
    },
    {
      stationName: 'Waterloo (Merseyside)',
      crsCode: 'WLO'
    },
    {
      stationName: 'Willesden Junction',
      crsCode: 'WIJ'
    },
    {
      stationName: 'Walthamstow Queens Road',
      crsCode: 'WMW'
    },
    {
      stationName: 'Walthamstow Central',
      crsCode: 'WHC'
    },
    {
      stationName: 'Wolverton',
      crsCode: 'WOL'
    },
    {
      stationName: 'Welwyn Garden City',
      crsCode: 'WGC'
    },
    {
      stationName: 'Welwyn North',
      crsCode: 'WLW'
    },
    {
      stationName: 'West Malling',
      crsCode: 'WMA'
    },
    {
      stationName: 'Wembley Central',
      crsCode: 'WMB'
    },
    {
      stationName: 'Windermere',
      crsCode: 'WDM'
    },
    {
      stationName: 'Weston Milton',
      crsCode: 'WNM'
    },
    {
      stationName: 'Woodsmoor',
      crsCode: 'WSR'
    },
    {
      stationName: 'Williamwood',
      crsCode: 'WLM'
    },
    {
      stationName: 'Winchfield',
      crsCode: 'WNF'
    },
    {
      stationName: 'Winchester',
      crsCode: 'WIN'
    },
    {
      stationName: 'Wandsworth Road',
      crsCode: 'WWR'
    },
    {
      stationName: 'Winchmore Hill',
      crsCode: 'WIH'
    },
    {
      stationName: 'West Norwood',
      crsCode: 'WNW'
    },
    {
      stationName: 'White Notley',
      crsCode: 'WNY'
    },
    {
      stationName: 'Winsford',
      crsCode: 'WSF'
    },
    {
      stationName: 'Wanstead Park',
      crsCode: 'WNP'
    },
    {
      stationName: 'Woburn Sands',
      crsCode: 'WOB'
    },
    {
      stationName: 'Woodbridge',
      crsCode: 'WDB'
    },
    {
      stationName: 'Woking',
      crsCode: 'WOK'
    },
    {
      stationName: 'Wokingham',
      crsCode: 'WKM'
    },
    {
      stationName: 'Wolsingham',
      crsCode: 'WLH'
    },
    {
      stationName: 'Woolston',
      crsCode: 'WLS'
    },
    {
      stationName: 'Woolwich Dockyard',
      crsCode: 'WWD'
    },
    {
      stationName: 'Woolwich Arsenal',
      crsCode: 'WWA'
    },
    {
      stationName: 'Wombwell',
      crsCode: 'WOM'
    },
    {
      stationName: 'Walton-on-the-Naze',
      crsCode: 'WON'
    },
    {
      stationName: 'Walton-on-Thames',
      crsCode: 'WAL'
    },
    {
      stationName: 'Woodley',
      crsCode: 'WLY'
    },
    {
      stationName: 'Wool',
      crsCode: 'WOO'
    },
    {
      stationName: 'Worcester Foregate Street',
      crsCode: 'WOF'
    },
    {
      stationName: 'Worcester Shrub Hill',
      crsCode: 'WOS'
    },
    {
      stationName: 'Worksop',
      crsCode: 'WRK'
    },
    {
      stationName: 'Worle',
      crsCode: 'WOR'
    },
    {
      stationName: 'Worstead',
      crsCode: 'WRT'
    },
    {
      stationName: 'Worthing',
      crsCode: 'WRH'
    },
    {
      stationName: 'Wootton Wawen',
      crsCode: 'WWW'
    },
    {
      stationName: 'Wrabness',
      crsCode: 'WRB'
    },
    {
      stationName: 'Warblington',
      crsCode: 'WBL'
    },
    {
      stationName: 'Worcester Park',
      crsCode: 'WCP'
    },
    {
      stationName: 'Wrenbury',
      crsCode: 'WRE'
    },
    {
      stationName: 'Wressle',
      crsCode: 'WRS'
    },
    {
      stationName: 'Wrexham Central',
      crsCode: 'WXC'
    },
    {
      stationName: 'Wrexham General',
      crsCode: 'WRX'
    },
    {
      stationName: 'Warrington Central',
      crsCode: 'WAC'
    },
    {
      stationName: 'Warrington Bank Quay',
      crsCode: 'WBQ'
    },
    {
      stationName: 'Warminster',
      crsCode: 'WMN'
    },
    {
      stationName: 'Hoveton & Wroxham',
      crsCode: 'HXM'
    },
    {
      stationName: 'Worplesdon',
      crsCode: 'WPL'
    },
    {
      stationName: 'West Ruislip',
      crsCode: 'WRU'
    },
    {
      stationName: 'West Runton',
      crsCode: 'WRN'
    },
    {
      stationName: 'Wraysbury',
      crsCode: 'WRY'
    },
    {
      stationName: 'West St Leonards',
      crsCode: 'WLD'
    },
    {
      stationName: 'Weston-super-Mare',
      crsCode: 'WSM'
    },
    {
      stationName: 'Windsor & Eton Riverside',
      crsCode: 'WNR'
    },
    {
      stationName: 'Westbury (Wilts)',
      crsCode: 'WSB'
    },
    {
      stationName: 'Westhoughton',
      crsCode: 'WHG'
    },
    {
      stationName: 'Westerfield',
      crsCode: 'WFI'
    },
    {
      stationName: 'West Sutton',
      crsCode: 'WSU'
    },
    {
      stationName: 'Whitby',
      crsCode: 'WTB'
    },
    {
      stationName: 'Whitecraigs',
      crsCode: 'WCR'
    },
    {
      stationName: 'Whittlesford Parkway',
      crsCode: 'WLF'
    },
    {
      stationName: 'Wateringbury',
      crsCode: 'WTR'
    },
    {
      stationName: 'Water Orton',
      crsCode: 'WTO'
    },
    {
      stationName: 'Wivelsfield',
      crsCode: 'WVF'
    },
    {
      stationName: 'Wolverhampton',
      crsCode: 'WVH'
    },
    {
      stationName: 'Wavertree Technology Park',
      crsCode: 'WAV'
    },
    {
      stationName: 'West Wickham',
      crsCode: 'WWI'
    },
    {
      stationName: 'West Worthing',
      crsCode: 'WWO'
    },
    {
      stationName: 'Wye',
      crsCode: 'WYE'
    },
    {
      stationName: 'Wylde Green',
      crsCode: 'WYL'
    },
    {
      stationName: 'Wylam',
      crsCode: 'WYM'
    },
    {
      stationName: 'Wymondham',
      crsCode: 'WMD'
    },
    {
      stationName: 'Wythall',
      crsCode: 'WYT'
    },
    {
      stationName: 'Yarm',
      crsCode: 'YRM'
    },
    {
      stationName: 'Yalding',
      crsCode: 'YAL'
    },
    {
      stationName: 'Great Yarmouth',
      crsCode: 'GYM'
    },
    {
      stationName: 'Yate',
      crsCode: 'YAE'
    },
    {
      stationName: 'Yatton',
      crsCode: 'YAT'
    },
    {
      stationName: 'Yeoford',
      crsCode: 'YEO'
    },
    {
      stationName: 'Ynyswen',
      crsCode: 'YNW'
    },
    {
      stationName: 'Yoker',
      crsCode: 'YOK'
    },
    {
      stationName: 'York',
      crsCode: 'YRK'
    },
    {
      stationName: 'Yorton',
      crsCode: 'YRT'
    },
    {
      stationName: 'Yeovil Junction',
      crsCode: 'YVJ'
    },
    {
      stationName: 'Yeovil Pen Mill',
      crsCode: 'YVP'
    },
    {
      stationName: 'Yardley Wood',
      crsCode: 'YRD'
    },
    {
      stationName: 'Ystrad Mynach',
      crsCode: 'YSM'
    },
    {
      stationName: 'Yetminster',
      crsCode: 'YET'
    },
    {
      stationName: 'Ystrad Rhondda',
      crsCode: 'YSR'
    }
  ];

  private readonly stationNames = [
    'Aberdare',
    'Aberdour',
    'Aberdovey',
    'Aber',
    'Abergele & Pensarn',
    'Abercynon',
    'Aberdeen',
    'Abererch',
    'Abergavenny',
    'Aberystwyth',
    'Abbey Wood (London)',
    'Acton Bridge',
    'Achanalt',
    'Achnashellach',
    'Auchinleck',
    'Achnasheen',
    'Acklington',
    'Acle',
    'Acocks Green',
    'Accrington',
    'Acton Central',
    'Acton Main Line',
    'Adderley Park',
    'Addiewell',
    'Adisham',
    'Adlington (Cheshire)',
    'Addlestone',
    'Adlington (Lancs)',
    'Adwick',
    'Aughton Park',
    'Aigburth',
    'Ainsdale',
    'Aintree',
    'Airbles',
    'Airdrie',
    'Newcastle Airport Metro',
    'Albany Park',
    'Albrighton',
    'Alderley Edge',
    'Aldermaston',
    'Aldershot',
    'Aldrington',
    'Liverpool South Parkway',
    'Alexandra Palace',
    'Alfreton',
    'Allens West',
    'Alloa',
    'Alness',
    'Alnmouth',
    'Alresford (Essex)',
    'Alsager',
    'Aylesham',
    'Althorne',
    'Altnabreac',
    'Alton',
    'Althorpe',
    'Altrincham',
    'Alvechurch',
    'Alexandria',
    'Alexandra Parade',
    'Ambergate',
    'Amersham',
    'Amberley',
    'Ammanford',
    'Ancaster',
    'Andover',
    'Anderston',
    'Anerley',
    'Angel Road',
    'Angmering',
    'Annan',
    'Ansdell & Fairhaven',
    'Anniesland',
    'Appleby',
    'Appledore (Kent)',
    'Apperley Bridge',
    'Appley Bridge',
    'Appleford',
    'Apsley',
    'Arbroath',
    'Arrochar & Tarbet',
    'Ardgay',
    'Ardlui',
    'Ardrossan Harbour',
    'Ardrossan South Beach',
    'Ardrossan Town',
    'Ardwick',
    'Argyle Street',
    'Arisaig',
    'Arlesey',
    'Armadale (W Lothian)',
    'Armathwaite',
    'Arnside',
    'Arram',
    'Arundel',
    'Ascot',
    'Ascott-under-Wychwood',
    'Ashford (Surrey)',
    'Ashfield',
    'Ashburys',
    'Ashchurch for Tewkesbury',
    'Ashtead',
    'Ashford International',
    'Ash',
    'Ashley',
    'Ashton-under-Lyne',
    'Ashurst (Kent)',
    'Ash Vale',
    'Ashwell & Morden',
    'Askam',
    'Aslockton',
    'Aspley Guise',
    'Aspatria',
    'Aston',
    'Attadale',
    'Atherton',
    'Atherstone',
    'Attenborough',
    'Attleborough',
    'Audley End',
    'Aviemore',
    'Avoncliff',
    'Avonmouth',
    'Axminster',
    'Aylesford',
    'Aylesbury',
    'Aylesbury Vale Parkway',
    'Ayr',
    'Bache',
    'Burnage',
    'Bagshot',
    'Baildon',
    'Balcombe',
    'Baldock',
    'Balham',
    'Baillieston',
    'Balloch',
    'Balmossie',
    'Bamford',
    'Banavie',
    'Bangor (Gwynedd)',
    'Banstead',
    'Barassie',
    'Bare Lane',
    'Bargoed',
    'Barking',
    'Barlaston',
    'Barming',
    'Barnes',
    'Barrow-in-Furness',
    'Barrow upon Soar',
    'Barry',
    'Barry Docks',
    'Barry Island',
    'Barrow Haven',
    'Basildon',
    'Bat & Ball',
    'Bath Spa',
    'Batley',
    'Battersea Park',
    'Battle',
    'Bayford',
    'Birchgrove',
    'Beckenham Hill',
    'Beckenham Junction',
    'Blackwater',
    'Buckley',
    'Birchington-on-Sea',
    'Beaconsfield',
    'Bicester North',
    'Bicester Village',
    'Bricket Wood',
    'Bedhampton',
    'Bedminster',
    'Bidston',
    'Bearley',
    'Beasdale',
    'Beauly',
    'Bebington',
    'Beccles',
    'Bedford',
    'Bedworth',
    'Bedwyn',
    'Bekesbourne',
    'Belmont',
    'Bellingham',
    'Belper',
    'Belvedere',
    'Bempton',
    'Benfleet',
    'Bere Alston',
    'Bere Ferrers',
    'Berkhamsted',
    'Bermuda Park',
    'Berry Brow',
    'Berwick (Sussex)',
    'Bescar Lane',
    'Bedford St Johns',
    'Beeston',
    'Betws-y-Coed',
    'Beverley',
    'Bexhill',
    'Bexley',
    'Baglan',
    'Bridge of Allan',
    'Barnt Green',
    'Birmingham International',
    'Jewellery Quarter',
    'Birmingham Moor Street',
    'Birmingham New Street',
    'Birmingham Snow Hill',
    'Bush Hill Park',
    'Bickley',
    'Biggleswade',
    'Bilbrook',
    'Billericay',
    'Billingshurst',
    'Bingham',
    'Birchwood',
    'Birkbeck',
    'Bishopton',
    'Burntisland',
    'Bitterne',
    'Birkdale',
    'Brockholes',
    'Bucknell',
    'Brockenhurst',
    'Berkswell',
    'Blaenau Ffestiniog',
    'Blairhill',
    'Blakedown',
    'Blantyre',
    'Blair Atholl',
    'Blaydon',
    'Blackhorse Road',
    'Blackpool Pleasure Beach',
    'Blackpool North',
    'Blackpool South',
    'Bleasby',
    'London Blackfriars',
    'Bellgrove',
    'Beaulieu Road',
    'Blackburn',
    'Blackheath',
    'Blackridge',
    'Blake Street',
    'Belle Vue',
    'Blundellsands & Crosby',
    'Billingham',
    'Bloxwich North',
    'Bloxwich',
    'Blackrod',
    'Bellshill',
    'Bletchley',
    'Bolton-Upon-Dearne',
    'Beltring',
    'Blythe Bridge',
    'Bamber Bridge',
    'Bramhall',
    'Bramley (Hants)',
    'Banbury',
    'Brandon',
    'Bingley',
    'Burnham (Berks)',
    'Barnhill',
    'Bank Hall',
    'Ben Rhydding',
    'Barnes Bridge',
    'Burneside (Cumbria)',
    'Barnsley',
    'Barnetby',
    'Bentley (Hants)',
    'Brentford',
    'Bentham',
    'Brunswick',
    'Bodmin Parkway',
    'Bodorgan',
    'Bognor Regis',
    'Bogston',
    'Bolton',
    'Bournemouth',
    'Bookham',
    'Bridge of Orchy',
    'Bootle (Cumbria)',
    'Bootle New Strand',
    'Bootle Oriel Road',
    'Bourne End',
    'Borth',
    'Borough Green & Wrotham',
    'Bosham',
    'Boston',
    'Bottesford',
    'Botley',
    'Bournville',
    'Bow Brickhill',
    'Bowes Park',
    'Bowling',
    'Box Hill & Westhumble',
    'Bracknell',
    'Bradford Forster Square',
    'Bradford Interchange',
    'Braintree Freeport',
    'Braintree',
    'Brampton (Suffolk)',
    'Branksome',
    'Broadbottom',
    'Brondesbury',
    'Brondesbury Park',
    'Bradford-on-Avon',
    'Bridgwater',
    'Brading',
    'Bridlington',
    'Bardon Mill',
    'Bordesley',
    'Bredbury',
    'Breich',
    'Broughty Ferry',
    'Broomfleet',
    'Bargeddie',
    'Bridgend',
    'Brigg',
    'London Road (Brighton)',
    'Brighton',
    'Barrhead',
    'Barnham',
    'Brighouse',
    'Bridgeton',
    'Brierfield',
    'Brimsdown',
    'Briton Ferry',
    'Brithdir',
    'Brixton',
    'Brookmans Park',
    'Conway Park',
    'Birkenhead Central',
    'Birkenhead North',
    'Birkenhead Park',
    'Brookwood',
    'Berrylands',
    'Burley Park',
    'Bromborough',
    'Bromborough Rake',
    'Bromley Cross',
    'Bramley (West Yorks)',
    'Barmouth',
    'Brampton (Cumbria)',
    'Bromsgrove',
    'Branchton',
    'Brinnington',
    'Barnehurst',
    'Burnham-on-Crouch',
    'Barnstaple',
    'Berney Arms',
    'Broad Green',
    'Brockley',
    'Bromley North',
    'Bromley South',
    'Broome',
    'Brora',
    'Brough',
    'Broxbourne',
    'Barrhill',
    'Barry Links',
    'Burscough Bridge',
    'Burscough Junction',
    'Burnside (Strathclyde)',
    'Broadstairs',
    'Bristol Temple Meads',
    'Bristol Parkway',
    'Barton-on-Humber',
    'Burton Joyce',
    'Brentwood',
    'Bruce Grove',
    'Brundall',
    'Brundall Gardens',
    'Brunstane',
    'Bruton',
    'Berwick-upon-Tweed',
    'Brockley Whins',
    'Bryn',
    'Braystones',
    'Bishop Auckland',
    'Bescot Stadium',
    'Bearsden',
    'Bishopbriggs',
    'Bishops Stortford',
    'Basingstoke',
    'Bishop\'s Lydeard',
    'Bishopstone',
    'Bearsted',
    'Bury St Edmunds',
    'Betchworth',
    'Bathgate',
    'Bethnal Green',
    'Butlers Lane',
    'Battlesbridge',
    'Bentley (S Yorks)',
    'Battersby',
    'Buckenham',
    'Bugle',
    'Builth Road',
    'Bulwell',
    'Bures',
    'Burgess Hill',
    'Burley-in-Wharfedale',
    'Burnley Barracks',
    'Burnley Central',
    'Burnley Manchester Road',
    'Bursledon',
    'Burton-on-Trent',
    'Busby',
    'Bushey',
    'Buxton',
    'Bexleyheath',
    'Buxted',
    'Byfleet & New Haw',
    'Bynea',
    'Cadoxton',
    'Caergwrle',
    'Calstock',
    'Cambridge',
    'Camelon',
    'Cambridge Heath (London)',
    'Canley',
    'London Cannon Street',
    'Carbis Bay',
    'Cardiff Bay',
    'Cardiff Queen Street',
    'Carfin',
    'Cark',
    'Carlisle',
    'Carmyle',
    'Carrbridge',
    'Caersws',
    'Castleford',
    'Caterham',
    'Catford Bridge',
    'Catford',
    'Cathays',
    'Cattal',
    'Causeland',
    'Castle Bar Park',
    'Colwyn Bay',
    'Crowborough',
    'Cobham & Stoke d\'Abernon',
    'Camborne',
    'Cranbrook',
    'Castle Cary',
    'Cathcart',
    'Caldicot',
    'Cardenden',
    'Cardonald',
    'Cardross',
    'Cefn-y-Bedd',
    'Croftfoot',
    'Crossflatts',
    'Crofton Park',
    'Chafford Hundred',
    'Chapelton (Devon)',
    'Chartham',
    'Chassen Road',
    'Chatham',
    'Charlbury',
    'Chichester',
    'Cheadle Hulme',
    'Cheddington',
    'Chadwell Heath',
    'Cheam',
    'Chapel-en-le-Frith',
    'Chelford',
    'Chepstow',
    'Cheshunt',
    'Chetnole',
    'Chesterfield',
    'Church Fenton',
    'Chathill',
    'Chingford',
    'Chippenham',
    'Chirk',
    'Chiswick',
    'Chalfont & Latimer',
    'Chalkwell',
    'Chelmsford',
    'Chelsfield',
    'Cheltenham Spa',
    'Chilworth',
    'Chinley',
    'Cholsey',
    'Buckshaw Parkway',
    'Chorley',
    'Church & Oswaldtwistle',
    'Chapeltown',
    'Chappel & Wakes Colne',
    'Christchurch',
    'Charing Cross (Glasgow)',
    'Christs Hospital',
    'Chorleywood',
    'London Charing Cross',
    'Chipstead',
    'Chislehurst',
    'Chester Road',
    'Chessington North',
    'Chessington South',
    'Chester',
    'Chestfield & Swalecliffe',
    'Chatelherault',
    'Cherry Tree',
    'Chertsey',
    'Cilmeri',
    'Corkerhill',
    'Clacton-on-Sea',
    'Clandon',
    'Clapton',
    'Clarbeston Road',
    'Claverdon',
    'Hythe (Essex)',
    'Colchester Town',
    'Colchester',
    'Caledonian Road & Barnsbury',
    'Caldercruix',
    'Cleland',
    'Clifton Down',
    'Collingham',
    'Clitheroe',
    'Chilham',
    'Clock House',
    'Clapham High Street',
    'Clapham Junction',
    'Clapham (N Yorks)',
    'Clarkston',
    'Chester-le-Street',
    'Cleethorpes',
    'Clifton (Manchester)',
    'Colwall',
    'Clydebank',
    'Claygate',
    'Clunderwen',
    'Cwmbach',
    'Camberley',
    'Cumbernauld',
    'Cambuslang',
    'Camden Road',
    'Cromer',
    'Carmarthen',
    'Cannock',
    'Canada Water',
    'Canonbury',
    'Carnoustie',
    'Canterbury East',
    'Canterbury West',
    'Cantley',
    'Carntyne',
    'Coatbridge Central',
    'Coatbridge Sunnyside',
    'Coatdyke',
    'Cooden Beach',
    'Codsall',
    'Cogan',
    'Cooksbridge',
    'Coleshill Parkway',
    'Colne',
    'Coulsdon South',
    'Coulsdon Town',
    'Combe (Oxon)',
    'Commondale',
    'Conisbrough',
    'Congleton',
    'Connel Ferry',
    'Conon Bridge',
    'Cononley',
    'Conwy',
    'Cookham',
    'Coombe Junction Halt ()',
    'Copplestone',
    'Corby',
    'Corpach',
    'Corrour',
    'Coryton',
    'Coseley',
    'Cosford',
    'Cosham',
    'Cottingley',
    'Coventry Arena',
    'Coventry',
    'Cowden',
    'Capenhurst',
    'Cradley Heath',
    'Craven Arms',
    'Crawley',
    'Corbridge',
    'Corkickle',
    'Cardiff Central',
    'Crediton',
    'Cressing',
    'Crewe',
    'Crayford',
    'Craigendoran',
    'Crews Hill',
    'Criccieth',
    'Cricklewood',
    'Crewkerne',
    'Carluke',
    'Charlton',
    'Cramlington',
    'Carnforth',
    'Charing (Kent)',
    'Crianlarich',
    'Crookston',
    'Cromford',
    'Crosshill',
    'Croston',
    'Crouch Hill',
    'Crowle',
    'Croy',
    'Caerphilly',
    'Carpenders Park',
    'Carshalton Beeches',
    'Carshalton',
    'Crosskeys',
    'Crossmyloof',
    'Cressington',
    'Carstairs',
    'Carlton',
    'Cartsdyke',
    'Crowhurst',
    'Creswell (Derbys)',
    'Crowthorne',
    'Crystal Palace',
    'Imperial Wharf',
    'Chandlers Ford',
    'Cross Gates',
    'Castleton (Manchester)',
    'Church Stretton',
    'City Thameslink',
    'Collington',
    'Castleton Moor',
    'Cottingham',
    'Cuddington',
    'Cuffley',
    'Culham',
    'Culrain',
    'Cupar',
    'Curriehill',
    'Cowdenbeath',
    'Cwmbran',
    'Cuxton',
    'Cynghordy',
    'Daisy Hill',
    'Dalgety Bay',
    'Dalmuir',
    'Dalry',
    'Dalston Junction',
    'Dalston Kingsland',
    'Dalston (Cumbria)',
    'Dalton',
    'Dalwhinnie',
    'Danby',
    'Danescourt',
    'Danzey',
    'Darnall',
    'Darsham',
    'Dartford',
    'Darwen',
    'Datchet',
    'Davenport',
    'Dawlish',
    'Dawlish Warren',
    'Kelvindale',
    'Deal',
    'Dean',
    'Deganwy',
    'Deighton',
    'Delamere',
    'Denham',
    'Denham Golf Club',
    'Denmark Hill',
    'Dent',
    'Dorking Deepdene',
    'Deptford',
    'Derby Road (Ipswich)',
    'Devonport',
    'Dingle Road',
    'Dagenham Dock',
    'Didcot Parkway',
    'Digby & Sowton',
    'Dilton Marsh',
    'Dinas Powys',
    'Dinas (Rhondda)',
    'Dingwall',
    'Dinsdale',
    'Disley',
    'Diss',
    'Dalmally',
    'Dalmarnock',
    'Dalmeny',
    'Dalreoch',
    'Darlington',
    'Dolwyddelan',
    'Dumbarton Central',
    'Dumbarton East',
    'Denby Dale',
    'Dunfermline Town',
    'Dunfermline Queen Margaret',
    'Dunlop',
    'Dunrobin Castle',
    'Dunston',
    'Dinting',
    'Denton',
    'Dockyard (Plymouth)',
    'Dodworth',
    'Dolau',
    'Doleham',
    'Dolgarrog',
    'Doncaster',
    'Dore & Totley',
    'Dorridge',
    'Dorking',
    'Dormans',
    'Dover Priory',
    'Dovercourt',
    'Dovey Junction',
    'Downham Market',
    'Drayton Green',
    'Derby',
    'Dorchester South',
    'Dorchester West',
    'Drem',
    'Durham',
    'Driffield',
    'Drigg',
    'Dorking West',
    'Drumchapel',
    'Drumfrochar',
    'Drumgelloch',
    'Durrington-on-Sea',
    'Dronfield',
    'Darton',
    'Droitwich Spa',
    'Drumry',
    'Drayton Park',
    'Dunton Green',
    'Duddeston',
    'Dudley Port',
    'Duffield',
    'Duirinish',
    'Duke Street',
    'Dullingham',
    'Dumbreck',
    'Dumfries',
    'Dumpton Park',
    'Dunblane',
    'Dunbar',
    'Duncraig',
    'Dundee',
    'Dunkeld & Birnam',
    'Cam & Dursley',
    'Dove Holes',
    'Dewsbury',
    'Dyce',
    'Dyffryn Ardudwy',
    'Ealing Broadway',
    'Earlswood (Surrey)',
    'Eastbrook',
    'East Boldon',
    'Eastbourne',
    'Ebbsfleet International',
    'Ebbw Vale Parkway',
    'Ebbw Vale Town',
    'Eccles',
    'Eccles Road',
    'Eccleston Park',
    'East Croydon',
    'Edale',
    'Edge Hill',
    'East Didsbury',
    'Edinburgh',
    'Edinburgh Park',
    'Edmonton Green',
    'Edenbridge',
    'Edenbridge Town',
    'Eden Park',
    'East Dulwich',
    'East Farleigh',
    'Effingham Junction',
    'Eggesford',
    'Egham',
    'Eaglescliffe',
    'East Garforth',
    'East Grinstead',
    'Egton',
    'East Kilbride',
    'Eastleigh',
    'Elgin',
    'Elmers End',
    'Elmswell',
    'Elmstead Woods',
    'Elephant & Castle',
    'Elsecar',
    'Elsenham',
    'Ellesmere Port',
    'Eltham',
    'Elton & Orston',
    'Elstree & Borehamwood',
    'Earlswood (West Midlands)',
    'Ely',
    'East Malling',
    'East Midlands Parkway',
    'Emerson Park',
    'Emsworth',
    'Enfield Chase',
    'Enfield Lock',
    'Enfield Town',
    'Entwistle',
    'Epsom Downs',
    'Epsom',
    'Erdington',
    'Energlyn & Churchill Park',
    'Eridge',
    'Erith',
    'Earlsfield',
    'Earlestown',
    'Earley',
    'Esher',
    'Easterhouse',
    'Eskbank',
    'Essex Road',
    'Mitcham Eastfields',
    'Eastham Rake',
    'Eastrington',
    'Etchingham',
    'East Tilbury',
    'London Euston',
    'Euxton Balshaw Lane',
    'Evesham',
    'Ewell East',
    'Ewell West',
    'East Worthing',
    'Exeter Central',
    'Exeter St Davids',
    'Exeter St Thomas',
    'Exhibition Centre (Glasgow)',
    'Exmouth',
    'Exton',
    'Eynsford',
    'Fairlie',
    'Falconwood',
    'Falkirk Grahamston',
    'Falkirk High',
    'Falmouth Docks',
    'Falmouth Town',
    'North Fambridge',
    'Falmer',
    'Fareham',
    'Farnham',
    'Fauldhouse',
    'Faversham',
    'Faygate',
    'Fazakerley',
    'Fearn',
    'Feltham',
    'London Fenchurch Street',
    'Feniton',
    'Fernhill',
    'Ferriby',
    'Ffairfach',
    'Fishguard Harbour',
    'Fishguard & Goodwick',
    'Filey',
    'Filton Abbey Wood',
    'Finstock',
    'Fiskerton',
    'Fitzwilliam',
    'Five Ways',
    'Fleet',
    'Flimby',
    'Flint',
    'Flitwick',
    'Flixton',
    'Folkestone Central',
    'Folkestone West',
    'Falls of Cruachan',
    'Flowery Field',
    'Felixstowe',
    'Finchley Road & Frognal',
    'Finsbury Park',
    'Ford',
    'Forest Hill',
    'Formby',
    'Forres',
    'Forsinard',
    'Four Oaks',
    'Foxfield',
    'Foxton',
    'Frant',
    'Fratton',
    'Fairbourne',
    'Farnborough (Main)',
    'Farnborough North',
    'Frodsham',
    'Freshford',
    'Fairfield',
    'Frimley',
    'Frinton-on-Sea',
    'Farncombe',
    'Farringdon (London)',
    'Farningham Road',
    'Farnworth',
    'Frome',
    'Frosterley',
    'Freshfield',
    'Forest Gate',
    'Fort Matilda',
    'Fort William',
    'Fairwater',
    'Frizinghall',
    'Fishbourne',
    'Fishersgate',
    'Fenny Stratford',
    'Featherstone',
    'Fulwell',
    'Furness Vale',
    'Furze Platt',
    'Ferryside',
    'Galashiels',
    'Smethwick Galton Bridge',
    'Garforth',
    'Garrowhill',
    'Garsdale',
    'Garth (Powys)',
    'Garve',
    'Garswood',
    'Gathurst',
    'Gatley',
    'Gainsborough Lea Road',
    'Greenbank',
    'Gainsborough Central',
    'Godalming',
    'Gerrards Cross',
    'Greenfield',
    'Greenford',
    'Giggleswick',
    'Guide Bridge',
    'Gidea Park',
    'Giffnock',
    'Gipsy Hill',
    'Girvan',
    'Glaisdale',
    'Glasshoughton',
    'Glazebrook',
    'Gilberdyke',
    'Goldthorpe',
    'Gilfach Fargoed',
    'Glasgow Central',
    'Glasgow Central Low Level',
    'High Street (Glasgow)',
    'Glengarnock',
    'Glasgow Queen Street',
    'Glasgow Queen Street Low Level',
    'Gillingham (Dorset)',
    'Glan Conwy',
    'Gleneagles',
    'Glenfinnan',
    'Gillingham (Kent)',
    'Glenrothes with Thornton',
    'Gloucester',
    'Glossop',
    'Glynde',
    'Greenhithe for Bluewater',
    'Green Lane',
    'Gunnersbury',
    'Grangetown (Cardiff)',
    'Greenwich',
    'Gobowen',
    'Godley',
    'Goodmayes',
    'Godstone',
    'Golf Street',
    'Golspie',
    'Gomshall',
    'Goole',
    'Goostrey',
    'Goring & Streatley',
    'Gordon Hill',
    'Gorebridge',
    'Goring-by-Sea',
    'Gorton',
    'Gospel Oak',
    'Gourock',
    'Grange-over-Sands',
    'Gowerton',
    'Goxhill',
    'Grateley',
    'Gravelly Hill',
    'Grays',
    'Green Road',
    'Greenock Central',
    'Greenock West',
    'Gretna Green',
    'Georgemas Junction',
    'Gargrave',
    'Garelochhead',
    'Grimsby Docks',
    'Grimsby Town',
    'Grindleford',
    'Greenfaulds',
    'Grosmont',
    'Grange Park',
    'Garston (Herts)',
    'Gartcosh',
    'Garth (Bridgend)',
    'Grove Park',
    'Gravesend',
    'Garscadden',
    'Great Ayton',
    'Great Bentley',
    'Great Chesterford',
    'Great Coates',
    'Grantham',
    'Great Malvern',
    'Great Missenden',
    'Metrocentre',
    'Gatwick Airport',
    'Guildford',
    'Guiseley',
    'Gunnislake',
    'Gunton',
    'Gwersyllt',
    'Gypsy Lane',
    'Habrough',
    'Hackney Central',
    'Hackney Wick',
    'Hadfield',
    'Haddiscoe',
    'Hadley Wood',
    'Haddenham & Thame Parkway',
    'Hag Fold',
    'Haggerston',
    'Hagley',
    'Harrogate',
    'Hackney Downs',
    'Hale',
    'Halling',
    'Hall Road',
    'Halesworth',
    'Halewood',
    'Hammerton',
    'Hamilton Central',
    'Hamilton West',
    'Hampton (London)',
    'Hamstead (Birmingham)',
    'Birkenhead Hamilton Square',
    'Hampton Wick',
    'Hanborough',
    'Hanwell',
    'Hapton',
    'Harlesden',
    'Hairmyres',
    'Harrow-on-the-Hill',
    'Hartford',
    'Harwich Town',
    'Haslemere',
    'Hassocks',
    'Hastings',
    'Hatfield (Herts)',
    'Hathersage',
    'Hattersley',
    'Hatton (Warks)',
    'Havant',
    'Havenhouse',
    'Haverfordwest',
    'Hawarden',
    'Hawarden Bridge',
    'Hayes & Harlington',
    'Hayle',
    'Haymarket',
    'Hayes (Kent)',
    'Hazel Grove',
    'Hebden Bridge',
    'Hollingbourne',
    'High Brooms',
    'Hubberts Bridge',
    'Hartlebury',
    'Holmes Chapel',
    'Heckington',
    'Hampton Court',
    'Hednesford',
    'Hendon',
    'Huddersfield',
    'Headcorn',
    'Healing',
    'Heath High Level',
    'Heath Low Level',
    'Hedge End',
    'Headingley',
    'Headstone Lane',
    'Hellifield',
    'Helmsdale',
    'Helsby',
    'Hemel Hempstead',
    'Hengoed',
    'Henley-in-Arden',
    'Hensall',
    'Hereford',
    'Herne Hill',
    'Hersham',
    'Hertford East',
    'Hessle',
    'Heswall',
    'Hever',
    'Heworth',
    'Hexham',
    'Heyford',
    'Heysham Port',
    'Hertford North',
    'Hatfield Peverel',
    'Highbridge & Burnham-on-Sea',
    'Highams Park',
    'Heighington',
    'Highbury & Islington',
    'Higham',
    'Hillside',
    'Hilsea',
    'Hinckley',
    'Hindley',
    'Hinton Admiral',
    'Hitchin',
    'Hightown',
    'Hall i\' th\' Wood',
    'Hackbridge',
    'Heald Green',
    'Hildenborough',
    'Hillfoot',
    'Halifax',
    'Hall Green',
    'Holmwood',
    'Hillington East',
    'Hillington West',
    'Helensburgh Central',
    'Helensburgh Upper',
    'Haltwhistle',
    'Holyhead',
    'Hamble',
    'Hampden Park (Sussex)',
    'Humphrey Park',
    'Hampstead Heath',
    'Hampton-in-Arden',
    'Ham Street',
    'Hamworthy',
    'Hinchley Wood',
    'Handforth',
    'The Hawthorns',
    'Harrington',
    'Henley-on-Thames',
    'Huntly',
    'Huntingdon',
    'Hockley',
    'Holton Heath',
    'Holytown',
    'Homerton',
    'Honiton',
    'Honley',
    'Honor Oak Park',
    'Honeybourne',
    'Hook',
    'Hooton',
    'Hope (Flintshire)',
    'Hope (Derbyshire)',
    'Hopton Heath',
    'Horley',
    'Horsham',
    'Horwich Parkway',
    'Hoscar',
    'Hough Green',
    'Hounslow',
    'Hove',
    'Howden',
    'Howwood (Renfrewshire)',
    'How Wood (Herts)',
    'Hoxton',
    'Hoylake',
    'Harringay',
    'Harringay Green Lanes',
    'Harlech',
    'Harold Wood',
    'Harlington (Beds)',
    'Harling Road',
    'Harlow Mill',
    'Harlow Town',
    'Hornbeam Park',
    'Herne Bay',
    'Hornsey',
    'Harrow & Wealdstone',
    'Harpenden',
    'Horsley',
    'Harrietsham',
    'Hurst Green',
    'Hartlepool',
    'Hartwood',
    'Horsforth',
    'Hatch End',
    'Heaton Chapel',
    'Hatfield & Stainforth',
    'Hither Green',
    'Hutton Cranswick',
    'Horton-in-Ribblesdale',
    'Heathrow Airport Terminal 5',
    'Heathrow Terminals 1-3',
    'Heathrow Airport Central Bus Stn (Rail-Air)',
    'Heathrow Terminal 4 (Rail-Air)',
    'Heathrow Terminal 4',
    'Heathrow Terminal 5',
    'Hucknall',
    'Hull',
    'Huncoat',
    'Hungerford',
    'Hunmanby',
    'Hunts Cross',
    'Huyton',
    'Hawkhead',
    'High Wycombe',
    'Haydon Bridge',
    'Hyde Central',
    'Hyde North',
    'Haydons Road',
    'Hykeham',
    'Hyndland',
    'Haywards Heath',
    'IBM (Greenock)',
    'Ifield',
    'Ilford',
    'Ilkeston',
    'Ilkley',
    'Ince (Manchester)',
    'Ince & Elton',
    'Ingatestone',
    'Insch',
    'Inverkip',
    'Invergowrie',
    'Invershin',
    'Inverurie',
    'Ipswich',
    'Irlam',
    'Irvine',
    'Isleworth',
    'Islip',
    'Iver',
    'Invergordon',
    'Inverkeithing',
    'Inverness',
    'Ivybridge',
    'James Cook University Hospital',
    'Liverpool James Street',
    'Johnston (Pembrokeshire)',
    'Johnstone',
    'Jordanhill',
    'Kirkcaldy',
    'Kidderminster',
    'Kearsley',
    'Keighley',
    'Keith',
    'Kelvedon',
    'Kemble',
    'Kemsing',
    'Kendal',
    'Kennishead',
    'Kennett',
    'Kensington (Olympia)',
    'Kensal Rise',
    'Kensal Green',
    'Kent House',
    'Kettering',
    'Kew Bridge',
    'Kew Gardens',
    'Keyham',
    'Keynsham',
    'Kinghorn',
    'Kings Park',
    'Kingston',
    'Kingussie',
    'Kingswood',
    'Kidbrooke',
    'Kidsgrove',
    'Kidwelly',
    'Kildonan',
    'Kilgetty',
    'Kilmarnock',
    'Kilwinning',
    'Kinbrace',
    'Kingham',
    'Kings Sutton',
    'Kirby Cross',
    'Kirkham & Wesham',
    'Kirkby',
    'Kirk Sandall',
    'Kilburn High Road',
    'Kildale',
    'Kings Langley',
    'Kilmaurs',
    'Kilpatrick',
    'Kings Lynn',
    'Kempston Hardwick',
    'Kempton Park',
    'Kemsley',
    'Knockholt',
    'Knebworth',
    'Kingsknowe',
    'London Kings Cross',
    'Knighton',
    'Kenley',
    'Kings Norton',
    'Knaresborough',
    'Kintbury',
    'Knottingley',
    'Kentish Town',
    'Kentish Town West',
    'Knucklas',
    'Knutsford',
    'Kings Nympton',
    'Kirkby-in-Furness',
    'Kirkconnel',
    'Kirkdale',
    'Kirkhill',
    'Kirknewton',
    'Kirkstall Forge',
    'Kirkwood',
    'Kirkby in Ashfield',
    'Kirton Lindsey',
    'Kearsney',
    'Kirkby Stephen',
    'Kents Bank',
    'Kenton',
    'Kiveton Bridge',
    'Kiveton Park',
    'Kyle of Lochalsh',
    'Ladybank',
    'Laindon',
    'Lairg',
    'Lake (Isle of Wight)',
    'Lakenheath',
    'Gilshochill',
    'Lamphey',
    'Lanark',
    'Lancaster',
    'Llandudno Junction',
    'Llanfairfechan',
    'Langley (Berks)',
    'Lapford',
    'Lapworth',
    'Larbert',
    'Largs',
    'Larkhall',
    'Lawrence Hill',
    'Layton (Lancs)',
    'Lazonby & Kirkoswald',
    'Llanbedr',
    'Loughborough Junction',
    'Loch Eil Outward Bound',
    'Lochailort',
    'Lichfield City',
    'Locheilside',
    'Lochgelly',
    'Lochluichart',
    'Lichfield Trent Valley High Level',
    'Lichfield Trent Valley',
    'Lochwinnoch',
    'Lockerbie',
    'Ledbury',
    'Lidlington',
    'Ladywell',
    'Lea Bridge',
    'Leagrave',
    'Lea Hall',
    'Lealholm',
    'Leasowe',
    'Leeds',
    'Lee',
    'Lea Green',
    'Leigh (Kent)',
    'Lelant',
    'Lelant Saltings',
    'Lenham',
    'Lenzie',
    'Leominster',
    'Leicester',
    'Leatherhead',
    'Leuchars',
    'Lewes',
    'Lewisham',
    'Leyland',
    'Leyton Midland Road',
    'Llanfairpwll',
    'Langbank',
    'Longfield',
    'Langho',
    'Langley Mill',
    'Langley Green',
    'Langwith - Whaley Thorns',
    'Lingwood',
    'Leigh-on-Sea',
    'Littlehaven',
    'Limehouse',
    'Lincoln Central',
    'Lingfield',
    'Liphook',
    'Liskeard',
    'Liss',
    'Littleborough',
    'London Liverpool Street',
    'Lockwood',
    'Llandaf',
    'Llanbradach',
    'Llanbister Road',
    'Llandeilo',
    'Llandrindod',
    'Llandovery',
    'Llandybie',
    'Llangadog',
    'Llangammarch',
    'Llangennech',
    'Llangynllo',
    'Llanharan',
    'Llanhilleth',
    'Llanishen',
    'Llanelli',
    'Llansamlet',
    'Llantwit Major',
    'Llanwrda',
    'Llanwrtyd',
    'Llwynypia',
    'Leamington Spa',
    'Lymington Pier',
    'Lymington Town',
    'Llanaber',
    'Lancing',
    'Llandecwyn',
    'London Bridge',
    'Llandanwg',
    'Landywood',
    'Long Buckby',
    'Longcross',
    'Long Eaton',
    'Longniddry',
    'Longport',
    'Linlithgow',
    'Llanrwst',
    'Langside',
    'Longton',
    'Loch Awe',
    'Loughborough (Leics)',
    'Longbridge',
    'London Fields',
    'Longbeck',
    'Looe',
    'Lostock',
    'Lowdham',
    'Low Moor',
    'Lowestoft',
    'Long Preston',
    'London Road (Guildford)',
    'Laurencekirk',
    'Lostock Gralam',
    'Lostock Hall',
    'Lostwithiel',
    'Lower Sydenham',
    'Letchworth',
    'Lisvane & Thornhill',
    'Littlehampton',
    'Little Kimble',
    'Littleport',
    'Little Sutton',
    'Leighton Buzzard',
    'Ludlow',
    'Llandudno',
    'Luton Airport Parkway',
    'Luton',
    'Luxulyan',
    'Levenshulme',
    'Livingston North',
    'Livingston South',
    'Liverpool Central',
    'Liverpool Lime Street',
    'Liverpool Lime Street Low Level',
    'Langwathby',
    'Lydney',
    'Lye (West Midlands)',
    'Lympstone Commando',
    'Lympstone Village',
    'Ashurst New Forest',
    'Llwyngwril',
    'Lytham',
    'Leytonstone High Road',
    'Macclesfield',
    'Maesteg (Ewenny Road)',
    'Maesteg',
    'Maghull',
    'Malden Manor',
    'Malton',
    'Manea',
    'Manningtree',
    'Manors',
    'Manor Park',
    'Marden',
    'Margate',
    'Marlow',
    'Marple',
    'Marton',
    'London Marylebone',
    'Mountain Ash',
    'Matlock Bath',
    'Matlock',
    'Maxwell Park',
    'Maybole',
    'Maze Hill',
    'Millbrook (Hants)',
    'Micheldever',
    'Machynlleth',
    'Micklefield',
    'Middlesbrough',
    'Maidenhead',
    'Maiden Newton',
    'Middlewood',
    'Meadowhall',
    'Meldreth',
    'Melksham',
    'Meols',
    'Melton (Suffolk)',
    'Menheniot',
    'Menston',
    'Meols Cop',
    'Meopham',
    'Merstham',
    'Merthyr Vale',
    'Merthyr Tydfil',
    'Mexborough',
    'Morfa Mawddach',
    'Mansfield',
    'Mansfield Woodhouse',
    'Martins Heron',
    'Midgham',
    'Milliken Park',
    'Minffordd Ffestiniog Railway Station',
    'Minffordd',
    'Moreton-in-Marsh',
    'Minster',
    'Mirfield',
    'Mistley',
    'Mitcham Junction',
    'Markinch',
    'Milton Keynes Central',
    'Market Rasen',
    'Mallaig',
    'Millbrook (Beds)',
    'Mouldsworth',
    'Mauldeth Road',
    'Milford Haven',
    'Milford (Surrey)',
    'Milngavie',
    'Mill Hill Broadway',
    'Mill Hill (Lancs)',
    'Millom',
    'Moulsecoomb',
    'Mills Hill (Manchester)',
    'Melton Mowbray',
    'Malvern Link',
    'Martin Mill',
    'Deansgate',
    'Manchester Airport',
    'Manchester Oxford Road',
    'Manchester Piccadilly',
    'Manchester United FC',
    'Manchester Victoria',
    'Monks Risborough',
    'Manorbier',
    'Manor Road',
    'Mount Vernon',
    'Mobberley',
    'Morchard Road',
    'Monifieth',
    'Montpelier',
    'Montrose',
    'Morar',
    'Morecambe',
    'Morden South',
    'Moreton (Dorset)',
    'Moorfields',
    'Moorthorpe',
    'Mossley (Manchester)',
    'Mottisfont & Dunbridge',
    'Motherwell',
    'Mottingham',
    'Moreton (Merseyside)',
    'Motspur Park',
    'Maryport',
    'March',
    'Moorgate',
    'Marks Tey',
    'Market Harborough',
    'Morley',
    'Morpeth',
    'Merryton',
    'Moorside',
    'Marske',
    'Marsden',
    'Marston Green',
    'Mortlake',
    'Maryhill',
    'Maryland',
    'Musselburgh',
    'Moses Gate',
    'Mossley Hill',
    'Moss Side',
    'Mosspark',
    'Moston',
    'Maidstone Barracks',
    'Maidstone East',
    'Maidstone West',
    'Mount Florida',
    'Metheringham',
    'Mortimer',
    'Muirend',
    'Muir of Ord',
    'Mytholmroyd',
    'Newton Abbot',
    'Nafferton',
    'Nailsea & Backwell',
    'Nairn',
    'Nantwich',
    'Narborough',
    'Navigation Road',
    'New Barnet',
    'New Beckenham',
    'North Berwick',
    'Newbridge',
    'New Brighton',
    'Newcraighall',
    'North Dulwich',
    'Neath',
    'Needham Market',
    'Neilston',
    'Neston',
    'Nethertown',
    'Netley',
    'Newark North Gate',
    'Newbury Racecourse',
    'Newbury',
    'New Clee',
    'Newhaven Harbour',
    'Newhaven Town',
    'New Lane',
    'New Malden',
    'Newington',
    'Newport (Essex)',
    'Newquay',
    'New Southgate',
    'New Cross Gate ELL',
    'New Holland',
    'Ninian Park',
    'Nitshill',
    'North Llanrwst',
    'Northallerton',
    'Nelson',
    'Northumberland Park',
    'New Milton',
    'Northampton',
    'Nuneaton',
    'Norbury',
    'Normanton',
    'Norwood Junction',
    'New Pudsey',
    'North Queensferry',
    'Narberth',
    'Norbiton',
    'Norwich',
    'Normans Bay',
    'Northfield',
    'Northfleet',
    'North Sheen',
    'Newton St Cyres',
    'North Camp',
    'Northolt Park',
    'Netherfield',
    'Northwich',
    'Norton Bridge',
    'Nottingham',
    'North Road',
    'Nunhead',
    'Nunthorpe',
    'Nutbourne',
    'Nutfield',
    'North Walsham',
    'New Cumnock',
    'Newcourt',
    'New Cross ELL',
    'Newcastle',
    'New Eltham',
    'North Wembley',
    'New Hythe',
    'New Mills Central',
    'New Mills Newtown',
    'Newmarket',
    'Newport (S Wales)',
    'Newark Castle',
    'Newstead',
    'Newton Aycliffe',
    'Newtongrange',
    'Newton for Hyde',
    'Newton (S Lanarks)',
    'Newtonmore',
    'Newton-le-Willows',
    'Newton-on-Ayr',
    'Newtown (Powys)',
    'Oakham',
    'Oakengates',
    'Oban',
    'Ockendon',
    'Ockley',
    'Okehampton',
    'Oakleigh Park',
    'Oldfield Park',
    'Old Roan',
    'Old Street',
    'Old Hill',
    'Olton',
    'Overpool',
    'Ore',
    'Orrell Park',
    'Ormskirk',
    'Orpington',
    'Orrell',
    'Otford',
    'Oulton Broad North',
    'Oulton Broad South',
    'Outwood',
    'Overton',
    'Oxenholme Lake District',
    'Oxford',
    'Oxford Parkway',
    'Oxshott',
    'Oxted',
    'Padgate',
    'London Paddington',
    'Paignton',
    'Palmers Green',
    'Pangbourne',
    'Pannal',
    'Parbold',
    'Par',
    'Parson Street',
    'Parton',
    'Patchway',
    'Patterton',
    'Peterborough',
    'Pemberton',
    'Portchester',
    'Queens Road Peckham',
    'Peckham Rye',
    'Peartree',
    'Pegswood',
    'Pembroke Dock',
    'Pembroke',
    'Penarth',
    'Pencoed',
    'Penge West',
    'Pengam',
    'Penhelig',
    'Penistone',
    'Penmere',
    'Penychain',
    'Penzance',
    'Perranwell',
    'Pershore',
    'Perth',
    'Petts Wood',
    'Pewsey',
    'Portsmouth Harbour',
    'Priesthill & Darnley',
    'Pilning',
    'Pinhoe',
    'Pitsea',
    'Park Street',
    'Paddock Wood',
    'Pollokshields East',
    'Pollokshields West',
    'Pollokshaws East',
    'Pollokshaws West',
    'Plumpton',
    'Plumstead',
    'Plockton',
    'Pleasington',
    'Portlethen',
    'Poulton-le-Fylde',
    'Pluckley',
    'Plumley',
    'Plymouth',
    'Pembrey & Burry Port',
    'Penally',
    'Ponders End',
    'Penge East',
    'Penkridge',
    'Penmaenmawr',
    'Penrhiwceiber',
    'Penshurst',
    'Pontarddulais',
    'Penrith North Lakes',
    'Pontlottyn',
    'Pentre-Bach',
    'Pantyffynnon',
    'Penyffordd',
    'Pont-y-Pant',
    'Pokesdown',
    'Polegate',
    'Polmont',
    'Polsloe Bridge',
    'Pontypool & New Inn',
    'Pontyclun',
    'Poole',
    'Poppleton',
    'Porth',
    'Possilpark & Parkhouse',
    'Potters Bar',
    'Poynton',
    'Prestonpans',
    'Prees',
    'Prescot',
    'Penrhyndeudraeth',
    'Princes Risborough',
    'Prittlewell',
    'Harwich International',
    'Preston Park',
    'Preston',
    'Porthmadog Harbour Ffestiniog Railway Station',
    'Porthmadog',
    'Portsmouth Arms',
    'Prudhoe',
    'Perry Barr',
    'Penryn',
    'Prestbury',
    'Portsmouth & Southsea',
    'Portslade',
    'Port Sunlight',
    'Paisley Canal',
    'Paisley Gilmour Street',
    'Paisley St James',
    'Pensarn (Gwynedd)',
    'Prestatyn',
    'Parkstone (Dorset)',
    'Port Talbot Parkway',
    'Partick',
    'Pontefract Baghill',
    'Pontefract Monkhill',
    'Pontefract Tanshelf',
    'Port Glasgow',
    'Pitlochry',
    'Patricroft',
    'Petersfield',
    'Pontypridd',
    'Pulborough',
    'Purfleet',
    'Purley',
    'Purley Oaks',
    'Putney',
    'Pevensey & Westham',
    'Pevensey Bay',
    'Prestwick',
    'Prestwick Intl Airport',
    'Pwllheli',
    'Polesworth',
    'Pen-y-Bont',
    'Pyle',
    'Quintrell Downs',
    'Queens Park (London)',
    'Queenstown Road (Battersea)',
    'Quakers Yard',
    'Queenborough',
    'Queens Park (Glasgow)',
    'Radlett',
    'Radcliffe (Notts)',
    'Radyr',
    'Rainham (Kent)',
    'Ramsgate',
    'Rannoch',
    'Rauceby',
    'Rawcliffe',
    'Rayleigh',
    'Raynes Park',
    'Ravensbourne',
    'Robertsbridge',
    'Rochdale',
    'Roche',
    'Rochester',
    'Rickmansworth',
    'Rectory Road',
    'Reedham (Norfolk)',
    'Redditch',
    'Radley',
    'Riddlesdown',
    'Reading',
    'Reading',
    'Redbridge (Hants)',
    'Redcar Central',
    'Redcar East',
    'British Steel Redcar',
    'Reading West',
    'Redhill',
    'Reddish North',
    'Reddish South',
    'Redland',
    'Redruth',
    'Reedham (Surrey)',
    'Reigate',
    'Renton',
    'Roughton Road',
    'Ravenglass',
    'Rainhill',
    'Rhiwbina',
    'Rhoose',
    'Rhosneigr',
    'Rhyl',
    'Rhymney',
    'Ribblehead',
    'Rice Lane',
    'Richmond (London)',
    'Ridgmont',
    'Riding Mill',
    'Risca & Pontymister',
    'Rishton',
    'Ramsgreave & Wilpshire',
    'Rainford',
    'Rainham (London)',
    'Roby',
    'Rochford',
    'Rock Ferry',
    'Rogart',
    'Rogerstone',
    'Rose Hill Marple',
    'Rolleston',
    'Roman Bridge',
    'Romford',
    'Romiley',
    'Romsey',
    'Roose',
    'Rose Grove',
    'Rosyth',
    'Rotherham Central',
    'Rowley Regis',
    'Roy Bridge',
    'Roydon',
    'Royston',
    'Ruskington',
    'Retford',
    'Retford Low Level',
    'Rotherhithe',
    'Rutherglen',
    'Ravensthorpe',
    'Ruabon',
    'Rufford',
    'Rugby',
    'Rugeley Trent Valley',
    'Rugeley Town',
    'Runcorn',
    'Runcorn East',
    'Ruswarp',
    'Rowlands Castle',
    'Ryde Esplanade',
    'Ryde Pier Head',
    'Ryder Brow',
    'Ryde St Johns Road',
    'Rye',
    'Rye House',
    'Sandal & Agbrigg',
    'South Acton',
    'St Andrews Road',
    'Saltaire',
    'Salfords (Surrey)',
    'Salhouse',
    'Salwick',
    'Sampford Courtenay',
    'Sandhills',
    'Sankey for Penketh',
    'Sanquhar',
    'Sarn',
    'Saltash',
    'Saxilby',
    'Sandbach',
    'Sawbridgeworth',
    'Southbourne',
    'South Bermondsey',
    'Saltburn',
    'Stallingborough',
    'Southbury',
    'Stalybridge',
    'Scarborough',
    'Scunthorpe',
    'South Croydon',
    'Scotscalder',
    'Scotstounhill',
    'Silverdale',
    'Sudbury Hill Harrow',
    'Sudbury & Harrow Road',
    'Sandling',
    'Swindon',
    'Sandplace',
    'Saundersfoot',
    'Sanderstead',
    'Seaburn',
    'Seaford',
    'Seaham',
    'Seamer',
    'Seascale',
    'Seer Green',
    'Sellafield',
    'Selby',
    'Selhurst',
    'Selling',
    'South Elmsall',
    'Selly Oak',
    'Sea Mills',
    'Southease',
    'Seaton Carew',
    'Settle',
    'Seven Sisters',
    'Severn Tunnel Junction',
    'Seaforth & Litherland',
    'South Greenford',
    'Sugar Loaf',
    'Shadwell',
    'Shalford (Surrey)',
    'Shirehampton',
    'Shanklin',
    'Shawford',
    'Sherburn-in-Elmet',
    'Shoeburyness',
    'Shildon',
    'Sheffield',
    'Shelford (Cambs)',
    'Shenfield',
    'Shepperton',
    'Sherborne',
    'Shifnal',
    'Shieldmuir',
    'Shirley',
    'St Helier (London)',
    'South Hampstead',
    'Shenstone',
    'Sholing',
    'Shotton High Level',
    'Shepherds Bush',
    'Stanhope',
    'Shiplake',
    'Shepreth',
    'Shipley',
    'Shirebrook',
    'Shoreditch High Street',
    'Sheringham',
    'Shoreham-by-Sea (Sussex)',
    'Shireoaks',
    'Shoreham (Kent)',
    'Sheerness-on-Sea',
    'Shortlands',
    'Shrewsbury',
    'Shettleston',
    'Shotts',
    'Stonehaven',
    'Shawfair',
    'Shawlands',
    'Sidcup',
    'Silecroft',
    'Sileby',
    'Singer',
    'Silver Street',
    'Skegness',
    'South Kenton',
    'Skewen',
    'Skipton',
    'Silkstone Common',
    'Slade Green',
    'Slateford',
    'Saltcoats',
    'Sleaford',
    'Sleights',
    'Stanford-le-Hope',
    'Salford Crescent',
    'Salford Central',
    'Slough',
    'Salisbury',
    'Slaithwaite',
    'Saltmarshe',
    'Smallbrook Junction',
    'St Margarets (Herts)',
    'Smithy Bridge',
    'South Merton',
    'South Milford',
    'Southminster',
    'Small Heath',
    'Somerleyton',
    'Smethwick Rolfe Street',
    'Snaith',
    'Sandhurst',
    'Sandown',
    'Sundridge Park',
    'Sunderland',
    'St Peters',
    'Sandwell & Dudley',
    'Sandy',
    'Stonegate',
    'Snodland',
    'Snowdown',
    'Stratford-upon-Avon',
    'Stratford-upon-Avon Parkway',
    'Sole Street',
    'Solihull',
    'Southampton Town Quay',
    'Southampton Central',
    'Southampton Airport Parkway',
    'Southport',
    'Spalding',
    'Spondon',
    'Spean Bridge',
    'Springfield',
    'Shippea Hill',
    'Staplehurst',
    'Spital',
    'Shepley',
    'Spooner Row',
    'Spring Road',
    'Springburn',
    'Shipton',
    'Squires Gate',
    'South Ruislip',
    'Southsea Hoverport',
    'Stafford',
    'Staines',
    'St Albans City',
    'St Albans Abbey',
    'Stamford',
    'Stansted Airport',
    'Stansted Mountfitchet',
    'Starbeck',
    'St Annes-on-the-Sea',
    'St Austell',
    'Staveley',
    'St Budeaux Ferry Road',
    'St Budeaux Victoria Road',
    'St Bees',
    'Stocksfield',
    'St Columb Road',
    'Strathcarron',
    'Stone Crossing',
    'St Denys',
    'Stechford',
    'Steeton & Silsden',
    'Stepps',
    'St Erth',
    'Stevenage',
    'Stewarton',
    'Stratford (London)',
    'Stratford International',
    'St Germans',
    'Southall',
    'South Bank',
    'Southend Central',
    'Southend Airport',
    'South Gyle',
    'St Helens Central',
    'St Helens Junction',
    'Southend East',
    'Streethouse',
    'Southend Victoria',
    'Southwick',
    'Stirling',
    'St Ives (Cornwall)',
    'St James Park (Devon)',
    'St James Street (London)',
    'St Johns (London)',
    'St Keyne Wishing Well Halt ()',
    'Stoke Mandeville',
    'Stoke Newington',
    'Stockport',
    'Stocksmoor',
    'Stoneleigh',
    'St Leonards Warrior Square',
    'St Michaels',
    'Stamford Hill',
    'St Margarets (London)',
    'St Mary Cray',
    'Stonebridge Park',
    'St Neots',
    'Sittingbourne',
    'Stonehouse',
    'Stanlow & Thornton',
    'Stockton',
    'Stoke-on-Trent',
    'Stone',
    'South Tottenham',
    'Stow',
    'London St Pancras International',
    'Stapleton Road',
    // 'London St Pancras International LL',
    'Stourbridge Junction',
    'Stourbridge Town',
    'Starcross',
    'Streatham',
    'Streatham Common',
    'Streatham Hill',
    'Strines',
    'Stromeferry',
    'Stranraer',
    'Strood',
    'Stroud (Glos)',
    'Strawberry Hill',
    'Sutton Parkway',
    'Sturry',
    'Stevenston',
    'Stowmarket',
    'Stewartby',
    'Styal',
    'Sudbury (Suffolk)',
    'Summerston',
    'Sunbury',
    'Saunderton',
    'Sunningdale',
    'Sunnymeads',
    'Surbiton',
    'Surrey Quays',
    'Sutton Coldfield',
    'Sutton (London)',
    'Sutton Common',
    'Seven Kings',
    'Sevenoaks',
    'Severn Beach',
    'Swale',
    'Swansea',
    'Sway',
    'Sandwich',
    'Shepherds Well',
    'Swinton (South Yorks)',
    'Swanley',
    'Swinderby',
    'Swanscombe',
    'Swinton (Manchester)',
    'Swanwick',
    'Sowerby Bridge',
    'Swineshead',
    'Swaythling',
    'Saxmundham',
    'Sydenham',
    'Sydenham Hill',
    'Syon Lane',
    'Syston',
    'Thornaby',
    'Tackley',
    'Tadworth',
    'Taffs Well',
    'Tain',
    'Talybont',
    'Tal-y-Cafn',
    'Tame Bridge Parkway',
    'Tan-y-Bwlch Ffestiniog Railway Station',
    'Taplow',
    'Tattenham Corner',
    'Taunton',
    'Taynuilt',
    'Thorpe Culvert',
    'Thames Ditton',
    'Teddington',
    'Teignmouth',
    'Telford Central',
    'Tenby',
    'Teynham',
    'Thornton Abbey',
    'Thorntonhall',
    'Thatcham',
    'Three Bridges',
    'Theobalds Grove',
    'Theale',
    'The Lakes',
    'Thetford',
    'Thornford',
    'Thatto Heath',
    'Thirsk',
    'Thornliebank',
    'Three Oaks',
    'Thorpe Bay',
    'Thorne North',
    'Thorne South',
    'Thorpe-le-Soken',
    'Thurgarton',
    'Thornton Heath',
    'Thurso',
    'Thurston',
    'Tile Hill',
    'Tilehurst',
    'Tipton',
    'Tir-phil',
    'Tisbury',
    'Tiverton Parkway',
    'Tilbury Town',
    'Talsarnau',
    'Templecombe',
    'Tamworth High Level',
    'Tamworth',
    'Tonypandy',
    'Todmorden',
    'Tolworth',
    'Tonbridge',
    'Tondu',
    'Tonfanau',
    'Ton Pentre',
    'Tooting',
    'Topsham',
    'Torquay',
    'Torre',
    'Totnes',
    'Totton',
    'Town Green',
    'Troed-y-Rhiw',
    'Trefforest',
    'Trehafod',
    'Treherbert',
    'Treorchy',
    'Trafford Park',
    'Trefforest Estate',
    'Trimley',
    'Tring',
    'Thurnscoe',
    'Troon',
    'Truro',
    'Trowbridge',
    'Tees-side Airport',
    'Tottenham Hale',
    'Tulloch',
    'Tulse Hill',
    'Tunbridge Wells',
    'Turkey Street',
    'Tutbury & Hatton',
    'Twickenham',
    'Tweedbank',
    'Twyford',
    'Ty Croes',
    'Ty Glas',
    'Tygwyn',
    'Tyndrum Lower',
    'Upper Tyndrum',
    'Tyseley',
    'Tywyn',
    'Uckfield',
    'Uddingston',
    'Upper Halliford',
    'Ulceby',
    'Ulleskelf',
    'Ulverston',
    'Umberleigh',
    'University',
    'Uphall',
    'Upholland',
    'Upminster',
    'Upper Holloway',
    'Upton',
    'Upwey',
    'Urmston',
    'Uttoxeter',
    'Upper Warlingham',
    'Valley',
    'Vauxhall',
    'London Victoria',
    'Virginia Water',
    'Waddon',
    'Wadhurst',
    'Wainfleet',
    'Wallasey Grove Road',
    'Wallasey Village',
    'West Allerton',
    'Waltham Cross',
    'Walkden',
    'Wallyford',
    'Walmer',
    'Wallington',
    'Walsall',
    'Walton (Merseyside)',
    'Wanborough',
    'Wandsworth Common',
    'Wapping',
    'Ware',
    'Wargrave',
    'Wareham',
    'Warnham',
    'Warwick',
    'Warwick Parkway',
    'Waterbeach',
    'Watford High Street',
    'Watford Junction',
    'Watford North',
    'Watlington',
    'Watton-at-Stone',
    'London Waterloo',
    'Whatstandwell',
    'Waun-gron Park',
    'West Brompton',
    'West Byfleet',
    'West Calder',
    'Whitechapel',
    'Whitchurch (Shrops)',
    'Wickham Market',
    'Westcliff-on-Sea',
    'Westcombe Park',
    'West Croydon',
    'Walsden',
    'Woodgrange Park',
    'South Woodham Ferrers',
    'Woodhouse',
    'Woodlesford',
    'Woodmansterne',
    'Wood End',
    'Widney Manor',
    'Wimbledon',
    'Widdrington',
    'West Drayton',
    'Wood Street',
    'West Dulwich',
    'Wandsworth Town',
    'West Ealing',
    'Wedgwood',
    'Weeley',
    'Weeton',
    'Welham Green',
    'Welling',
    'Wellington (Shropshire)',
    'Welshpool',
    'Wembley Stadium',
    'Wem',
    'Wemyss Bay',
    'Wendover',
    'Westenhanger',
    'Wennington',
    'Westgate-on-Sea',
    'Westerton',
    'Wetheral',
    'Weybridge',
    'Weymouth',
    'South Wigston',
    'Wester Hailes',
    'Whalley',
    'Whaley Bridge',
    'West Ham',
    'Whitchurch (Cardiff)',
    'Woodhall',
    'White Hart Lane',
    'Whifflet',
    'Whimple',
    'Whinhill',
    'Whiston',
    'Whitehaven',
    'Whitland',
    'Whitlocks End',
    'West Hampstead',
    'West Hampstead Thameslink',
    'West Horndon',
    'Whitstable',
    'Whitley Bridge',
    'Whitchurch (Hants)',
    'Whittlesea',
    'Whitton',
    'Whitwell (Derbys)',
    'Whyteleafe',
    'Whyteleafe South',
    'Wick',
    'Widnes',
    'Wigan North Western',
    'Wigan Wallgate',
    'Wigton',
    'Wickford',
    'Wilmcote',
    'Wilnecote (Staffs)',
    'Wimbledon Chase',
    'Winchelsea',
    'Windsor & Eton Central',
    'Winnersh',
    'Winnersh Triangle',
    'Wishaw',
    'Witham (Essex)',
    'Witley',
    'Witton (West Midlands)',
    'Wivenhoe',
    'Wakefield Kirkgate',
    'Wakefield Westgate',
    'West Kilbride',
    'West Kirby',
    'Workington',
    'Wildmill',
    'Woldingham',
    'Wilmslow',
    'Wellingborough',
    'Willington',
    'London Waterloo East',
    'Waterloo (Merseyside)',
    'Willesden Junction',
    'Walthamstow Queens Road',
    'Walthamstow Central',
    'Wolverton',
    'Welwyn Garden City',
    'Welwyn North',
    'West Malling',
    'Wembley Central',
    'Windermere',
    'Weston Milton',
    'Woodsmoor',
    'Williamwood',
    'Winchfield',
    'Winchester',
    'Wandsworth Road',
    'Winchmore Hill',
    'West Norwood',
    'White Notley',
    'Winsford',
    'Wanstead Park',
    'Woburn Sands',
    'Woodbridge',
    'Woking',
    'Wokingham',
    'Wolsingham',
    'Woolston',
    'Woolwich Dockyard',
    'Woolwich Arsenal',
    'Wombwell',
    'Walton-on-the-Naze',
    'Walton-on-Thames',
    'Woodley',
    'Wool',
    'Worcester Foregate Street',
    'Worcester Shrub Hill',
    'Worksop',
    'Worle',
    'Worstead',
    'Worthing',
    'Wootton Wawen',
    'Wrabness',
    'Warblington',
    'Worcester Park',
    'Wrenbury',
    'Wressle',
    'Wrexham Central',
    'Wrexham General',
    'Warrington Central',
    'Warrington Bank Quay',
    'Warminster',
    'Hoveton & Wroxham',
    'Worplesdon',
    'West Ruislip',
    'West Runton',
    'Wraysbury',
    'West St Leonards',
    'Weston-super-Mare',
    'Windsor & Eton Riverside',
    'Westbury (Wilts)',
    'Westhoughton',
    'Westerfield',
    'West Sutton',
    'Whitby',
    'Whitecraigs',
    'Whittlesford Parkway',
    'Wateringbury',
    'Water Orton',
    'Wivelsfield',
    'Wolverhampton',
    'Wavertree Technology Park',
    'West Wickham',
    'West Worthing',
    'Wye',
    'Wylde Green',
    'Wylam',
    'Wymondham',
    'Wythall',
    'Yarm',
    'Yalding',
    'Great Yarmouth',
    'Yate',
    'Yatton',
    'Yeoford',
    'Ynyswen',
    'Yoker',
    'York',
    'Yorton',
    'Yeovil Junction',
    'Yeovil Pen Mill',
    'Yardley Wood',
    'Ystrad Mynach',
    'Yetminster',
    'Ystrad Rhondda'
  ];

  getStationNames(): string[] {
    return this.stationNames;
  }

  // for the given station name return the crs code
  // example: Aberdare returns ABA
  getCRSForStation(stationNameToFind: string) {
    const stationNameAndCRS = this.stationNamesAndCRS.find(station => station.stationName === stationNameToFind);
    return stationNameAndCRS.crsCode;
  }
}
