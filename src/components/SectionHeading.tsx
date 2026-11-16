import Image from "next/image";
import star2 from "../../public/images/star2.png";

/**
 * "SELF-SUMMARY" / "MY OFFERINGS" / "ALL PROJECTS" banner.
 * On desktop it sits above the offset right-hand card; on mobile it flows
 * in the normal column. The parent row must be `relative`.
 */
export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4 max-sm:gap-2 max-sm:my-8 sm:absolute sm:left-[394px] sm:top-0 sm:h-24 sm:w-[66%]">
      <Image src={star2} alt="" className="max-sm:h-8 max-sm:w-8" />
      <h2 className="text-7xl font-bold max-xl:text-4xl max-sm:text-2xl">{title}</h2>
      <Image src={star2} alt="" className="max-sm:h-8 max-sm:w-8" />
    </div>
  );
}
