export interface Sermon {
  audioLink: string;
  category: string;
  createdOn: number;
  scripture: {
    book: string;
    chapter: string;
    verse: string;
  };
  scriptureRef: string;
  slug: string;
  title: string;
  description?: string;
}
