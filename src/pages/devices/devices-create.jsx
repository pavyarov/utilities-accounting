import * as React from "react";
import { Create, TextInput, SimpleForm } from "admin-on-rest";

export const DevicesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Название" source="name" />
            <TextInput label="Тип" source="type" />
        </SimpleForm>
    </Create>
);
