export interface CategoryMsg {
  success: boolean;
  code: string;
  msg: string;
  requestId: string;
  data: CategoryData;
}

export interface CategoryData {
  categories: Array<Category>;
}

export interface Category {
  name: string;
  alias: string;
}