/**
 * Clase en la que adapta las consultas para manejar en SQLite3
 */
class Adapter {
  constructor() {
  }

  getCategory($review) {
    const element = $review.querySelector('h3');
    return element ? element.textContent : '';
  }

  getPosition($item) {
    const element = $item.querySelector('.zg_rank');
    return element ? element.textContent.trim() : '';
  }

  getTitle($item) {
    const element = $item.querySelector('.p13n-sc-truncate-desktop-type2');
    return element ? element.textContent.trim() : '';
  }

  getNumberOfReviews($item) {
    const element = $item.querySelector('div.a-icon-row.a-spacing-none > .a-size-small');
    return element ? element.textContent.trim() : '';
  }

  getTextRanking($item) {
    const element = $item.querySelector('div.a-icon-row.a-spacing-none > .a-link-normal');
    return element ? element.getAttribute('title') : '';
  }

  getImg($item) {
    const element = $item.querySelector('img');
    if (element === null) {
      return '';
    }
    return element.getAttribute('src') ? decodeURIComponent(element.getAttribute('src')) : '';
  }

  getId($item) {
    const element = $item.querySelector('.a-section.a-spacing-none.p13n-asin');
    return element ? element.getAttribute('data-p13n-asin-metadata') : null;
  }
}

module.exports = Adapter;
