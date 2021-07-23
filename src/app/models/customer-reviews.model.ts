export interface CustomerReview {
  userImageURL?: string;
  userName?: string;
  comment?: string;
  selectedRating?: number;
  stars?: Star[];
}

export interface Star {
  id?: number;
  icon?: string;
  class?: string;
}
