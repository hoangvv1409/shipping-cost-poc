class ShippingCost {
	private constructor(
		public readonly name: string,
		public readonly basePrice: number,
		public readonly maxPosterPerGroup: number,
		public readonly additionalPosterCost: number
	) {}

	totalAmount(posterQuantity: number) {
		let shippingCost = 0;

		const totalGroup = Math.ceil(posterQuantity / this.maxPosterPerGroup);
		const postersInLastGroup =
			posterQuantity % this.maxPosterPerGroup || this.maxPosterPerGroup;

		for (let groupNum = 1; groupNum <= totalGroup; groupNum++) {
			const totalPoster =
				groupNum == totalGroup
					? postersInLastGroup
					: this.maxPosterPerGroup;

			const additionalPosterCost =
				(totalPoster - 1) * this.additionalPosterCost;

			shippingCost += this.basePrice + additionalPosterCost;
		}

		return shippingCost;
	}

	static regularShippingCostUS(): ShippingCost {
		return new ShippingCost("Regular Shipping (US Only)", 600, 10, 100);
	}

	static expeditedShippingCostUS(): ShippingCost {
		return new ShippingCost("Expedited Shipping (US Only)", 900, 10, 400);
	}
}

export { ShippingCost };
