/** @jsxImportSource theme-ui */
import { jsx, ThemeProvider } from "theme-ui";

const EventsPage = () => {
  return (
    <div>
      <h1 sx={{ color: "primary" }}>Event Page</h1>
      <div>
        <a href="">
          <img />
          <h2>Events in London</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in San fransico</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in New York</h2>
        </a>
      </div>
    </div>
  );
};
export default EventsPage;
// all events aka dyanmic pages


export async function getStaticProps() {
  const {events_categories} = import('/data/data.json')
  return {
    props: {
    data: events_categories
  }
}

}
//static generating our pages 