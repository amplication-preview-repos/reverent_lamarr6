import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageLink" source="imageLink" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
