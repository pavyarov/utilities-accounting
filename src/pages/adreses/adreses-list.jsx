import * as React from "react";
import {
    List,
    Responsive,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    ReferenceField
} from "admin-on-rest";
import { PagesFilter } from "../pages-partials";

export const AdresesList = props => (
    <List title="Адреса" {...props}>
        <Datagrid>
            <TextField label="Адрес" source="name" />
            <EditButton />
        </Datagrid>
    </List>
);
