// "use client";

// import Link from "next/link";
// import Image from "next/image";

// type Props = {
//   id: string;
//   title: string;
//   roles: string[];
//   image: string;
// };

// export default function CaseCard({ id, title, roles, image }: Props) {
//   return (
//     <Link href={`/works/${id}`}>

//       <div className="rounded-xl overflow-hidden shadow hover:opacity-80 transition cursor-pointer">
//         <Image
//           src={image}
//           alt={title}
//           width={800}
//           height={600}
//           className="w-full h-64 object-cover"
//         />

//         <h3 className="mt-4 font-semibold">{title}</h3>
//         <p className="text-sm text-gray-500">{roles.join("、 ")}</p>
//       </div>
//     </Link>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  roles: string[];
  image: string;
};

export default function CaseCard({ id, title, roles, image }: Props) {
  return (
    <Link href={`/works/${id}`}>
      <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* 画像部分 */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* テキスト部分 */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            {roles.join("、 ")}
          </p>
        </div>
      </div>
    </Link>
  );
}