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

export const WaterList = props => (
    <List title="Водоснабжение" {...props} filters={<PagesFilter />}>
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
                    <ReferenceField
                        label="Тип"
                        source="type"
                        reference="waterTypes"
                    >
                        <TextField source="name" />
                    </ReferenceField>
                    <NumberField label="Обьем, м3" source="amount" />
                    <NumberField label="Цена за м3" source="price" />
                    <NumberField
                        label="Сумма к оплате"
                        source="checkoutPrice"
                    />
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);
