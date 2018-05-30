import * as React from "react";
import { Edit, TextInput, SimpleForm } from "admin-on-rest";

export const AdresesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Адрес" source="name" />
        </SimpleForm>
    </Edit>
);
