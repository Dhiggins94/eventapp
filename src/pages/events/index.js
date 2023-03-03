/** @jsxImportSource theme-ui */
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image src={ev.image} alt={ev.title} width={100} height={100} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventsPage;
// all events aka dyanmic pages

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
//static generating our pages
