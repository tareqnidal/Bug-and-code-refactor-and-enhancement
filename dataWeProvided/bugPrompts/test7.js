function migrateProduct(oldProduct) {
	const newProduct = oldProduct
	newProduct.price *= 1.15
	newProduct.containers = newProduct.containers.map((container => {
		if (container.type === 'bottle') {
			container.deposit = 0.20
		}
		return container
	}))
	
	return { oldProduct, newProduct }
}
