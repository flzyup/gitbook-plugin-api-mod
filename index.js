'use strict'

const document = require('html-element').document

function element (tag, options, container) {
  options = options || {}
  const cls = options.class
  const text = options.text
  const html = options.html

  const el = document.createElement(tag)
  el.classList.add(cls)
  if (container != null) {
    container.appendChild(el)
  }
  if (text != null) {
    el.textContent = text
  }
  if (html != null) {
    el.innerHTML = html
  }
  return el
}

/* get config by properties */
function getConfig(context, property, defaultValue) {
  var config = context.config ? /* 3.x */ context.config : /* 2.x */ context.book.config;
  return config.get(property, defaultValue);
}

module.exports = {
  book: {
    assets: './assets',
    css: ['api.css'],
    js: ['api.js']
  },

  blocks: {
    api: {
      process (block) {
        var expand = getConfig(this, 'pluginsConfig.api-mod.expanded', false)

        return this.renderBlock('markdown', block.body).then(function (body) {
          // Create container
          const container =  element('div', { class: !expand ? 'api-container' : 'api-container expanded' })

          // Create header
          const header = element('div', { class: 'api-header' }, container)
          if (block.kwargs.method) { element('small', { text: block.kwargs.method, class: block.kwargs.method.toLowerCase() }, header) }

          if (block.kwargs.url) { element('span', { text: block.kwargs.url }, header) }
          element('h2', { text: block.args[0] }, header)

          // Create content section
          const content = element('div', { class: 'api-content' }, container)
          element('div', { class: 'api-description', html: body }, content)
          return container.outerHTML
        })
      }
    }
  }
}
