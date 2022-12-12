import html from "html-literal";
import homepagepic from "../../assets/images/homepagepic.jpg";
export default state => html`
  <div id="homepage">
    <nav>
      <img class="fire" src=${homepagepic} width="1500" height="800" />
    </nav>
    <h3 style="color:white">
      Is it BBQ time in ${state.weather.city}? Temperature is
      ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
    </h3>
  </div>
`;
