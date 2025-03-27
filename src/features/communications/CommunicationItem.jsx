import Button from "../../ui/Button";

function CommunicationItem({ communication }) {
  const { title, date, readed, id } = communication;
  return (
    <div className="flex justify-between items-center sm:gap-x-20 gap-x-5 px-2 py-3 even:bg-sky-800/25 ">
      <p className="text-xs">{date}</p>
      <h3 className={`grow ${readed ? "" : "font-semibold"}`}>{title}</h3>
      <Button type="small" to={`/comunicazioni/${id}`}>
        Leggi
      </Button>
    </div>
  );
}

export default CommunicationItem;
