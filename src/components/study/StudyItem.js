"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StudyItem({ item }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`study/project/${item.id}`);
  };

  return (
    <li className="w-[406px]">
      <article
        className="flex flex-col gap-y-[22px] cursor-pointer"
        onClick={handleClick}
      >
        <header className="relative w-[406px] h-[280px]">
          <Image className="" src={item.url} fill alt={item.name} />
        </header>
        <section className="flex flex-col gap-y-[15px] text-center">
          {" "}
          <div>
            <p className="">{item.name}</p>
          </div>
          <p className="">{item.period}</p>
        </section>
      </article>
    </li>
  );
}
