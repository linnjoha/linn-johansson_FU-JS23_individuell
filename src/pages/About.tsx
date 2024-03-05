import "./about.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import EvaCortado from "../assets/eva-cortado-profil.png";
const About = () => {
  return (
    <article className="about-wrapper">
      <Header />
      <section className="info-text-wrapper">
        <h1 className="about-heading">Vårt kaffe</h1>
        <p className="info-text-bold">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p className="info-text">
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <p className="info-text">
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
        <picture className="eva-cortado-wrapper">
          <img className="eva-cortado" src={`${EvaCortado}`} alt="" />
          <h2>Eva Cortado</h2>
          <p>VD & Grundare</p>
        </picture>
      </section>
      <Footer />
    </article>
  );
};

export default About;
