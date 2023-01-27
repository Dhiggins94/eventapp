/** @jsxImportSource theme-ui */
import Image from "next/image";
import { jsx, ThemeProvider } from "theme-ui";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1 sx={{ color: "primary" }}>Event Page</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={100} height={100} />
            <h2>{ev.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};
export default EventsPage;
// all events aka dyanmic pages

export async function getStaticProps() {
  const { events_categories } = await import('data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
//static generating our pages
