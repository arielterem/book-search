export interface BookApiResponse {
    kind: string;
    totalItems: number;
    items: BookItem[];
  }
  
  export interface BookItem {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      imageLinks?: {
        thumbnail?: string;
      };
      infoLink?: string;
    };
  }
  