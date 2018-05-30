import * as React from "react";
import { Admin, Resource, Delete } from "admin-on-rest";
import jsonRestClient from "aor-json-rest-client";
import "./App.css";
import russianMessages from "aor-language-russian";
import addUploadFeature from "./addUploadFeature";
import { authClient } from "./auth-client";
import data from "./data";
import { ElectricityList, ElectricityShow } from "./pages/electricity";
import { GasList, GasShow } from "./pages/gas";
import { WaterList, WaterShow } from "./pages/water";
import { AdresesList, AdresesCreate, AdresesEdit } from "./pages/adreses";
import { DevicesList, DevicesCreate, DevicesEdit } from "./pages/devices";
import HomeIcon from "material-ui/svg-icons/action/home";
import ElectricityIcon from "material-ui/svg-icons/notification/power";
import WaterIcon from "material-ui/svg-icons/action/opacity";
import GasIcon from "material-ui/svg-icons/image/blur-on";
import DeviceIcon from "material-ui/svg-icons/action/settings-input-antenna";

const messages = {
    ru: russianMessages
};

const restClient = jsonRestClient(data, true);
const uploadCapableClient = addUploadFeature(restClient);
const delayedRestClient = (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(uploadCapableClient(type, resource, params)),
            1000
        )
    );

export const App = () => (
    <Admin
        authClient={authClient}
        restClient={delayedRestClient}
        title="Учет коммунальных услуг"
        locale="ru"
        messages={messages}
    >
        <Resource
            options={{ label: "Электроэнергия" }}
            name="electricity"
            list={ElectricityList}
            show={ElectricityShow}
            icon={ElectricityIcon}
        />
        <Resource
            options={{ label: "Газоснабжение" }}
            name="gas"
            list={GasList}
            show={GasShow}
            icon={GasIcon}
        />
        <Resource
            options={{ label: "Водоснабжение" }}
            name="water"
            list={WaterList}
            show={WaterShow}
            icon={WaterIcon}
        />
        <Resource
            options={{ label: "Адреса" }}
            name="addreses"
            list={AdresesList}
            create={AdresesCreate}
            edit={AdresesEdit}
            remove={Delete}
            icon={HomeIcon}
        />
        <Resource
            options={{ label: "Устройства учета" }}
            name="devices"
            list={DevicesList}
            create={DevicesCreate}
            edit={DevicesEdit}
            remove={Delete}
            icon={DeviceIcon}
        />
        <Resource name="waterTypes" />
    </Admin>
);
