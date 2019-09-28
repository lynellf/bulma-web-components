# bulma-web-components
Bulma CSS as a collection of web components

## Why?

I want to achieve a couple of goals here:

1. Provide semantic markup to reduce cognitive load
2. Provide basic JavaScript interativity when needed (tabs, modal, pagination)

# Component Checklist

1. Card
2. Tabs
3. Modal
4. Navbar
5. Dropdown
6. Menu
7. Panel
8. Breadcrumb
9. Message
10. Pagination


### Card

#### Card Test Cases

**Before**
```html
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
```
**After**
```html
<bulma-card>
  <card-image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></card-image>
  <card-content>
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  </card-content>
</bulma-card>
```

#### Card Test Case 2

**Before**
```html
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
```
**After**
```html
<bulma-card>
  <card-header>
    <card-header-title>
      Component
    </card-header-title>
    <card-header-icon href="#" aria-label="more-options">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </card-header-icon>
  </card-header>
  <card-content>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </card-content>
  <card-footer>
    <card-footer-item href="#">Save</card-footer-item>
    <card-footer-item href="#">Edit</card-footer-item>
    <card-footer-item href="#">Delete</card-footer-item>
  </card-footer>
</bulma-card>
```

#### Card Test Case 3

**Before**
```html
<div class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>
```

**After**
```html
<bulma-card>
  <card-content>
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </card-content>
  <card-footer>
    <card-footer-item tag="p">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </card-footer-item>
    <card-footer-item tag="p">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </card-footer-item>
  </card-footer>
</bulma-card>
```