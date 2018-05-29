import * as React from "react";
import {
    List,
    Responsive,
    Datagrid,
    TextField,
    NumberField,
    ShowButton
} from "admin-on-rest";
import { PagesFilter } from "../pages-partials";

export const ElectricityList = props => (
    <List title="Электроэнергия" {...props} filters={<PagesFilter />}>
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
                    <TextField label="Адрес" source="address" />
                    <NumberField label="Начало, kWh" source="startKwh" />
                    <NumberField label="Расход, kWh" source="expenseKwh" />
                    <NumberField label="Конец, kWh" source="finishKwh" />
                    <NumberField label="Цена за kWh" source="price" />
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
