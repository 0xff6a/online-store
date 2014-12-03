Need to link product with cart when removing... How??

Solution

- Scrap multiple controllers - use single StoreController for the app

- extract Cart, Product, Voucher as standalone objects
modify tests for these

- Initialiise cart/product/voucher as before in store controller

- popSingle/PushSingle as product methods
all others stay the same

- Add all directives into single controller


