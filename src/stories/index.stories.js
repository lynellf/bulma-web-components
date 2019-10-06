import { html } from 'lit-html';
import '../card/index';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
export default { title: 'Composites' };

export const Card = () =>`
<br/>
<br/>
<div class="container">
<b-card test-id="cardOne">
  <b-card-image>
    <figure class="image is-4by3">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </b-card-image>
  <b-card-content test-id="cardContent0">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </b-card-content>
</b-card>
</div>
<br/>
<br/>
<div class="container">
<b-card>
  <b-card-header test-id="cardHeader0">
    <b-card-header-title test-id="cardHeaderTitle0">
      Component
    </b-card-header-title>
    <b-card-header-icon-link href="#">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </b-card-header-icon-link>
  </b-card-header>
  <b-card-content>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </b-card-content>
  <b-card-footer test-id="cardFooter0">
    <b-card-footer-link href="#top" test-id="cardFooterItem0"
      >Save</b-card-footer-link
    >
    <b-card-footer-link href="https://google.com">Edit</b-card-footer-link>
    <b-card-footer-link href="#">Delete</b-card-footer-link>
  </b-card-footer>
</b-card>
</div>
<br/>
<br/>
<div class="container">
<b-card>
  <b-card-content>
    <p class="title">
      “There are two hard things in computer science: cache invalidation,
      naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </b-card-content>
  <b-card-footer>
    <b-card-footer-item tag="p">
      <span>
        View on
        <a
          href="https://twitter.com/codinghorror/status/506010907021828096"
          >Twitter</a
        >
      </span>
    </b-card-footer-item>
    <b-card-footer-item tag="p" test-id="cardFooterItem1">
      <span> Share on <a href="#">Facebook</a> </span>
    </b-card-footer-item>
  </b-card-footer>
</b-card>
</div>
<br/>
<br/>
`;
