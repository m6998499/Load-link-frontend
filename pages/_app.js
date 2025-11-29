import '../styles.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
