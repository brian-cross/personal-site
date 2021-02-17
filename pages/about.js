import { main } from "../styles/About.module.scss";

export default function About() {
  return (
    <main className={main}>
      <h1>About Me</h1>
      <section>
        <h2>Hey there, I'm Brian!</h2>
        <p>
          I'm a web developer from Edmonton Alberta Canada. I strive to build
          websites that achieve three main goals:
        </p>
        <ul>
          <li>
            <h3>Speed:</h3>
            The site loads in a split second and navigation is as fast as
            possible.
          </li>
          <li>
            <h3>Responsiveness:</h3>
            The site scales seamlessly and is fully usable on all device sizes.
          </li>
          <li>
            <h3>Accessibility:</h3>
            The site is accessible to <strong>all</strong> users, regardless of
            ability.
          </li>
        </ul>
        <p>Why are these points so important? Read on and find out:</p>
      </section>
      <section>
        <h2>Speed:</h2>
        <p>
          Website speed or performance refers to how quickly a web page loads
          and becomes usable in the browser. A site that hangs or loads slowly
          will drive potential clients away. The sites I build are pre-generated
          HTML, CSS and JavaScript files hosted on a distributed CDN (Content
          Delivery Network). This results in zero server lag when the user loads
          the site since the pages are pre-generated and ready to go. The CDN
          also ensures the user is loading the page from a node which is
          geographically close to them to further reduce lag. Once the initial
          page loads, additional assets are downloaded in the background for
          when they're needed. Internal site pages load instantly when the user
          clicks a link.
        </p>
      </section>
      <section>
        <h2>Responsiveness:</h2>
        <p>
          As of 2021, over 60% of web traffic is on a mobile device. Clearly,
          web sites need to look good and be functional on small screens. My
          sites are designed mobile-first which then scale up to take advantage
          of the extra real-estate on larger screens. I use fluid scaling
          techniques to smoothly increase or decrease the font and layout sizes
          based on page width. If the user chooses to change the base font size
          in their browser, everything on the page will scale accordingly and
          stay in proportion.
        </p>
      </section>
      <section>
        <h2>Accessibility:</h2>
        <p>
          Could you imagine if stores or places of employment were not
          accessible to people with disabilities? Not only would it be illegal,
          but these businesses would lose huge amounts of business and their
          reputation would suffer. Websites are no different. Assistive
          technologies allow people with disabilities to effectively navigate a
          website. The site, however, needs to be properly structured and
          annotated in order for these technologies to work correctly. A site
          should also be navigable with only a keyboard. I follow accessibility
          best practices in every site I build.
        </p>
      </section>
    </main>
  );
}
