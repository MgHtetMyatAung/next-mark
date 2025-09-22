import { getProductsList } from "@/services/endpoints/product/server_api_call";
import { ProductCart } from "../products";

export default async function FeatureProductsSection() {
  const products = await getProductsList();
  const featureProducts = products?.filter(
    (product) => product.is_feature === true
  );
  if (!featureProducts) return null;
  return (
    <div className=" bg-gray-100">
      <div className=" container mx-auto py-10 space-y-5">
        <h3 className=" font-medium">Feature Products</h3>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {featureProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
