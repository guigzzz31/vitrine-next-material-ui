import Nexthead from "next/head";

const defaultDescription = "Carole Richou et Carine Da Costa podologue Cugnaux";
const defaultOGURL = "https://podologue-cugnaux.fr";


const Head = props => (
  <Nexthead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  </Nexthead>
)

export default Head;