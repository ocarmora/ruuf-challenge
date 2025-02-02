import { CalculatePanelsInARectangleRoofProps } from "./types";
import { hasRemainingSpace } from "./utils";

export const calculatePanelsInARectangleRoof = ({
  panelWidth, // A
  panelHeight, // B
  roofWidth, // X
  roofHeight, // Y
}: CalculatePanelsInARectangleRoofProps): number => {
  if (!panelWidth || !panelHeight || !roofWidth || !roofHeight) {
    throw new Error("Missing required parameters.");
  }

  // Step 1: Calculate the number of panels in the neutral position (AxB)
  let neutralPositionPanelsQuantity =
    Math.floor(roofWidth / panelWidth) * Math.floor(roofHeight / panelHeight);

  let rotatedRemainingSpacePanelsQuantity = 0;

  // Step 2: Check if there any remaining space
  const hasHorizontalRemainingSpace = hasRemainingSpace(roofWidth, panelWidth);
  const hasVerticalRemainingSpace = hasRemainingSpace(roofHeight, panelHeight);

  // Step 3: If there is remaining horizontal space, calculate the panels in a rotated position
  if (hasHorizontalRemainingSpace) {
    // Note: I treat the remaining space as the measurements of a new "rotated" roof. So I can use recursion
    rotatedRemainingSpacePanelsQuantity = calculatePanelsInARectangleRoof({
      panelWidth,
      panelHeight,
      roofWidth: roofHeight,
      roofHeight: roofWidth % panelWidth,
    });
  }

  // Step 4: Same as step 3, but now treating the heigh
  if (hasVerticalRemainingSpace) {
    rotatedRemainingSpacePanelsQuantity = calculatePanelsInARectangleRoof({
      panelWidth,
      panelHeight,
      roofWidth: roofHeight % panelHeight,
      roofHeight: roofWidth,
    });
  }

  // Step 5: Return the total number of panels (neutral + rotated)
  return neutralPositionPanelsQuantity + rotatedRemainingSpacePanelsQuantity;
};

export const calculatePanelsInATriangleRoof = () => {
  throw new Error("Not implemented yet.");
};

export const calculatePanelsInAnOverlappingRectangleRoof = () => {
  throw new Error("Not implemented yet.");
};
