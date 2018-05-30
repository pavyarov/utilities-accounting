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

export const DevicesList = props => (
    <List title="Устройства учета" {...props}>
        <Datagrid>
            <TextField label="Название" source="name" />
            <TextField label="Тип" source="type" />
            <EditButton />
        </Datagrid>
    </List>
);
