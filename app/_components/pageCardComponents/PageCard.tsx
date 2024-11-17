import CardButton from "./CardButton";
import CardDescription from "./CardDescription";
import CardLines from "./CardLines";

const PageCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-12 rounded-xl border-2 border-dark-15 bg-white p-4 text-center shadow-card xl:p-12">
      <div className="space-y-5">
        <h2 className="font-raleway text-3xl font-bold">{title}</h2>
        <CardLines />
      </div>
      <CardDescription description={description} />
      <CardButton />
    </div>
  );
};

export default PageCard;
