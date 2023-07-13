export type SubjectType = {
  id: number;
  name: string;
  image: string;
  description: string;
};
export type ArtistType = {
  id: number;
  name: string;
  image: string;
  nickName: string;
};

export type CardProps = {
  title: string;
  url: string;
  image: string;
  tags: string[];
};
export type Chapter = {
  id: number;
  name: string;
  subjectId: number;
};
export type ContentCardType = {
  id: number;
  name: string;
  url: string;
  image: string;
  type: string;
  chapterId: number;
  teacherId: number;
  subjectId: number;
};
