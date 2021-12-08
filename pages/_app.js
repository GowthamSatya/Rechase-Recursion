import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
