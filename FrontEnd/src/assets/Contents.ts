export const ContentData: ContentCardType[] = [
  {
    id: 1,
    title: "Demo",
    image:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fminuteprep%2Fvideos%2F1302296540379495%2F&show_text=false&width=560&t=0",
    genres: ["Action", "Adventure"],
  },
];
export type ContentCardType = {
  id: number;
  title: string;
  image: string;
  genres: string[];
};
