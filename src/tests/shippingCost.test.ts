import { ShippingCost } from "../index";

describe("Get total Regular Shipping Cost US", () => {
	// Quantity - Expected Shipping Cost
	const cases = [
		[1, 600],
		[2, 700],
		[10, 1500],
		[15, 2500],
		[20, 3000],
		[21, 3600],
	];
	const regularShippingCostUS = ShippingCost.regularShippingCostUS();

	test.each(cases)(
		"given quantity %p as argument, returns shipping cost %p",
		(quantity, expectedResult) => {
			const result = regularShippingCostUS.totalAmount(quantity);
			expect(result).toEqual(expectedResult);
		}
	);
});

describe("Get total Expedited Shipping Cost US", () => {
	// Quantity - Expected Shipping Cost
	const cases = [
		[1, 900],
		[2, 1300],
		[10, 4500],
		[15, 7000],
		[20, 9000],
		[21, 9900],
	];
	const expeditedShippingCostUS = ShippingCost.expeditedShippingCostUS();

	test.each(cases)(
		"given quantity %p as argument, returns shipping cost %p",
		(quantity, expectedResult) => {
			const result = expeditedShippingCostUS.totalAmount(quantity);
			expect(result).toEqual(expectedResult);
		}
	);
});
