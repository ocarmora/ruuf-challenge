import { CalculatePanelsInARectangleRoofProps } from "./types";
import { hasRemainingSpace } from "./utils";

export const calculatePanelsInARectangleRoof = ({
  panelWidth, // A
  panelHeight, // B
  roofWidth, // X
  roofHeight, // Y
}: CalculatePanelsInARectangleRoofProps): number => {
  if (!panelWidth || !panelHeight || !roofWidth || !roofHeight) {
    throw new Error("All parameters are required.");
  }

  const maxPanelsAxBPosition =
    Math.floor(roofWidth / panelWidth) * Math.floor(roofHeight / panelHeight);

  const maxPanelsBxAPosition =
    Math.floor(roofWidth / panelHeight) * Math.floor(roofHeight / panelWidth);

  const maxPanelQuantity = Math.max(maxPanelsAxBPosition, maxPanelsBxAPosition);

  if (maxPanelQuantity === 0) {
    return 0;
  }

  let panelsQuantity = maxPanelQuantity;

  if (maxPanelQuantity === maxPanelsAxBPosition) {
    const hasHorizontalSpace = hasRemainingSpace(roofWidth, panelWidth);
    const hasVerticalSpace = hasRemainingSpace(roofHeight, panelHeight);

    if (hasHorizontalSpace) {
      panelsQuantity += calculatePanelsInARectangleRoof({
        panelWidth,
        panelHeight,
        roofWidth: roofWidth % panelWidth,
        roofHeight,
      });
    }

    if (hasVerticalSpace) {
      panelsQuantity += calculatePanelsInARectangleRoof({
        panelWidth,
        panelHeight,
        roofWidth,
        roofHeight: roofHeight % panelHeight,
      });
    }
  } else {
    const hasHorizontalSpace = hasRemainingSpace(roofWidth, panelHeight);
    const hasVerticalSpace = hasRemainingSpace(roofHeight, panelWidth);

    if (hasHorizontalSpace) {
      panelsQuantity += calculatePanelsInARectangleRoof({
        panelWidth,
        panelHeight,
        roofWidth: roofWidth % panelHeight,
        roofHeight,
      });
    }

    if (hasVerticalSpace) {
      panelsQuantity += calculatePanelsInARectangleRoof({
        panelWidth,
        panelHeight,
        roofWidth,
        roofHeight: roofHeight % panelWidth,
      });
    }
  }

  return panelsQuantity;
};

export const calculatePanelsInATriangleRoof = () => {
  throw new Error("Not implemented yet.");
};

export const calculatePanelsInAnOverlappingRectangleRoof = () => {
  throw new Error("Not implemented yet.");
};
