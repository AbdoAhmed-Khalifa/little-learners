import Image from "next/image";

export default function MissionVisionsCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <div className="space-y-12 rounded-xl border-2 border-dark-15 bg-white p-4 shadow-card xl:p-12">
      <div className="flex items-center justify-between">
        <h2 className="font-raleway text-4xl font-bold text-dark-10">
          {title}
        </h2>
        <Image src={`/images/${icon}`} width={80} height={60} alt="vision" />
      </div>

      <p className="font-outfit text-base font-medium text-dark-20">
        {description}
      </p>
    </div>
  );
}
