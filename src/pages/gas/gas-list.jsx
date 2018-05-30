import * as React from "react";
import {
    List,
    Responsive,
    Datagrid,
    TextField,
    NumberField,
    ShowButton,
    ReferenceField
} from "admin-on-rest";
import { PagesFilter } from "../pages-partials";

export const GasList = props => (
    <List title="Газоснабжение" {...props} filters={<PagesFilter />}>
        <Responsive
            small={
                <Datagrid>
                    <TextField label="Период" source="period" />
                    <NumberField
                        label="Сумма к оплате"
                        source="checkoutPrice"
                    />
                    <ShowButton />
                </Datagrid>
            }
            medium={
                <Datagrid>
                    <TextField label="Период" source="period" />
                    <TextField label="Владелец" source="fio" />
                    <ReferenceField
                        label="Адрес"
                        source="address"
                        reference="addreses"
                    >
                        <TextField source="name" />
                    </ReferenceField>
                    <NumberField label="Обьем, м3" source="amount" />
                    <NumberField label="Цена за м3" source="price" />
                    <NumberField
                        label="Сумма к оплате"
                        source="checkoutPrice"
                    />
                    <ReferenceField
                        label="Устройство"
                        source="device"
                        reference="devices"
                    >
                        <TextField source="name" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);
