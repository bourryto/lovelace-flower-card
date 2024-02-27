import {CSSResult, customElement, html, HTMLTemplateResult, LitElement, property} from 'lit-element';
import {HomeAssistant, LovelaceCardEditor} from 'custom-card-helpers';
import {style} from './styles';
import {DisplayType, FlowerCardConfig, HomeAssistantEntity, PlantInfo} from './types/flower-card-types';
import * as packageJson from '../package.json';
import {getStatus, renderAttributes, renderBattery} from './utils/attributes';
import {CARD_EDITOR_NAME, CARD_NAME, default_show_bars, missingImage} from './utils/constants';
import {moreInfo} from './utils/utils';

console.info(
    `%c FLOWER-CARD %c ${packageJson.version}`,
    'color: cyan; background: black; font-weight: bold;',
    'color: darkblue; background: white; font-weight: bold;'
);

/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: CARD_NAME,
    name: 'Flower card',
    preview: true,
    description: 'Custom flower card for https://github.com/Olen/homeassistant-plant',
});
/* eslint-enable @typescript-eslint/no-explicit-any */

@customElement(CARD_NAME)
export default class FlowerCard extends LitElement {
    @property() _hass?: HomeAssistant;
    @property() config?: FlowerCardConfig;

    private stateObj: HomeAssistantEntity | undefined;
    private previousFetchDate: number;

    plantinfo: PlantInfo;
    set hass(hass: HomeAssistant) {
        this._hass = hass;
        this.stateObj = this.config?.entity ? hass.states[this.config.entity] : undefined;

        if (!this.previousFetchDate) {
            this.previousFetchDate = 0;
        }
        // Only fetch once every second at max.  HA is flooeded with websocket requests
        if (Date.now() > this.previousFetchDate + 1000) {
            this.previousFetchDate = Date.now();
            this.get_data(hass).then(() => {
                this.requestUpdate();
            });
        }
    }

    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        await import("./editor");
        return document.createElement(CARD_EDITOR_NAME) as LovelaceCardEditor;
    }

    static getStubConfig(ha: HomeAssistant) {
        const supportedEntities = Object.values(ha.states).filter(
            (entity) => entity.entity_id.indexOf('plant.') === 0
        );
        const entity = supportedEntities.length > 0 ? supportedEntities[0].entity_id : 'plant.my_plant';

        return {
            entity: entity,
            battery_sensor: "sensor.myflower_battery",
            show_bars: default_show_bars
        }
    }

    setConfig(config: FlowerCardConfig): void {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }

        this.config = config;
    }

    render(): HTMLTemplateResult {
        if (!this.config || !this._hass) return html``;

        if (!this.stateObj) {
            return html`
                <hui-warning>
                Entity not available: ${this.config.entity}
                </hui-warning>
              `;
        }

        const species = this.stateObj.attributes.species;
        let headerTmp = "header";
        let cardTmp = "";
        switch ( this.config.display_type ) {
            case DisplayType.Compact:
                headerTmp = "header-compact";
                cardTmp = "";
                break;
            case DisplayType.Overview:
                headerTmp = "header-overview";
                cardTmp = "card-overview";
                break;
            default:
                cardTmp = "card-margin-top";
                break;
        }
        const headerCssClass = headerTmp;
        const haCardCssClass = cardTmp;

        if (this.config.display_type === DisplayType.Overview) {
            const statusColor = getStatus(this);
            return html`
                <ha-card class="${haCardCssClass}">
                    <div class="${headerCssClass}" @click="${() => 
                        moreInfo(this, this.stateObj.entity_id)}">
                        <div class="status-ring" style="background-color: ${statusColor}">
                            <img src="${this.stateObj.attributes.entity_picture
                                    ? this.stateObj.attributes.entity_picture
                                    : missingImage
                            }">
                        </div>
                    </div>
                </ha-card>
            `;
        }

        return html`
            <ha-card class="${haCardCssClass}">
            <div class="${headerCssClass}" @click="${() =>
                moreInfo(this, this.stateObj.entity_id)}">
                <img src="${this.stateObj.attributes.entity_picture
                ? this.stateObj.attributes.entity_picture
                : missingImage
            }">
                <span id="name"> ${this.stateObj.attributes.friendly_name
            } <ha-icon .icon="mdi:${this.stateObj.state.toLowerCase() == "problem"
                ? "alert-circle-outline"
                : ""
            }"></ha-icon>
                </span>
                <span id="battery">${renderBattery(this.config, this._hass)}</span>
                <span id="species">${species} </span>
            </div>
            <div class="divider"></div>
            ${renderAttributes(this)}
            </ha-card>
            `;
    }

    async get_data(hass: HomeAssistant): Promise<void> {
        try {
            this.plantinfo = await hass.callWS({
                type: "plant/get_info",
                entity_id: this.config?.entity,
            });
        } catch (err) {
            this.plantinfo = { result: {} };
        }
    }

    getCardSize(): number {
        if(this.config.display_type === DisplayType.Overview){
            return 1;
        }
        return 5;
    }

    static get styles(): CSSResult {
        return style;
    }
}
