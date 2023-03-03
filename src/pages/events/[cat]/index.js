import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            {/* we're using link to navigate client side */}

            <Image
              width={300}
              height={300}
              alt={ev.title}
              src={ev.image}
            ></Image>
            <h2> {ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
        {/*  with this now we can see our single events */}
      </div>
    </div>
  );
};
export default EventsCatPage;
// events catergories

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  // with the all paths mapping, we;re going to grab each object and return it with the format that exist within the "params"
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

//  we want our path to be an array of objects where each objecyt holds the root parameter(params) and within it we pass and another object where it has an ID(cat) followed by the static path that we want(the cities)
//  the fallback propety exist so we can tell nextJs what to do next when in situations where it goes into a path unspecify. setting fallback to FALSE, will mean that our page will only be built for the specify paths and anything else would throw an 404 error page.
// if we set fullback to TRUE it will automatically bring up a page

export async function getStaticProps(context) {
  const id = context?.params.cat;
  //
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data, pageName: id },
  };
}
//context as a parameter will show information on our categories,id page and even the exactly page the user is on. now within this getStaticProps we're going to filter through our array of object to grab the id that equals to our category id
