import * as React from "react";
import { Edit, TextInput, SimpleForm } from "admin-on-rest";

export const DevicesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Адрес" source="name" />
            <TextInput label="Тип" source="type" />
        </SimpleForm>
    </Edit>
);
