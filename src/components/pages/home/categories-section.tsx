import { getCategoriesList } from "@/services/endpoints/category/server_api_call";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategorySection() {
  const categories = await getCategoriesList();

  if (!categories) {
    notFound();
  }

  return (
    <div className=" ">
      <div className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10 space-y-5">
        <h3 className=" font-medium">Browse By Category</h3>
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <Link
              href={"/"}
              key={category.id}
              className=" px-3 py-7 bg-gray-200 rounded-md"
            >
              <p className=" text-center font-medium">{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
