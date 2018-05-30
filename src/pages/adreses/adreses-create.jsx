import * as React from "react";
import { Create, TextInput, SimpleForm } from "admin-on-rest";

export const AdresesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Адрес" source="name" />
        </SimpleForm>
    </Create>
);
