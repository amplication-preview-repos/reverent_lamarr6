import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imageLink?: StringNullableFilter;
  title?: StringNullableFilter;
};
