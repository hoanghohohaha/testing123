export class createArticlesDto {
  readonly title: string;
  readonly author: string;
  readonly coverImg: string;
  readonly categories: Cates;
  readonly date: string;
  readonly shortDes: string;
  readonly content: string;
}

export enum Cates {
  TIENLY = 'TIEN_LY',
  NGO = 'NGO',
  DINH = 'DINH',
  TIENLE = 'TIEN_LE',
  LY = 'LY',
  TRAN = 'TRAN',
  HO = 'HO',
  HAUTRAN = 'HAU_TRAN',
  HAULE = 'HAU_LE',
  SONTAY = 'SON_TAY',
  NGUYEN = 'NGUYEN',
}
