import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageLink?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
