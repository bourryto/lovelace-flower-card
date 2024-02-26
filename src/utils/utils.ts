import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { default_show_bars } from "./constants";
import FlowerCard from "../flower-card";

export const getConfigElement = (): HTMLElement => {
    return document.createElement("flower-card-editor");
}

export const getStubConfig = (hass: HomeAssistant) => {
    const supportedEntities = Object.values(hass.states).filter(
      (entity) => entity.entity_id.indexOf('plant.') === 0
    );
    const entity = supportedEntities.length > 0 ? supportedEntities[0].entity_id : 'plant.my_plant';

    return {
      entity: entity,
      battery_sensor: "sensor.myflower_battery",
      show_bars: default_show_bars
    }
}

export const moreInfo = (card: FlowerCard, entityId: string): void => {
    fireEvent(
        card,
        'hass-more-info',
        { entityId },
        { bubbles: false, composed: true }
    );
    // TODO LATER: add message what is wrong?
}