import { test } from 'socket:test'
import { html, qs } from '../_test/util.js'

import { Tonic } from '@socketsupply/tonic'
import { Components } from '../index.js'

Components(Tonic)

document.body.appendChild(html`
<section id="popover">
  <h2>Popover</h2>

  <!-- Popover Default -->
  <div class="test-container">
    <span>Default Popover</span>
    <button id="tonic-popover-default-button">
      Open Popover
    </button>
  </div>

  <tonic-popover
    id="tonic-popover-default"
    width="175px"
    for="tonic-popover-default-button">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </tonic-popover>

</section>
`)

test('opening popover', async t => {
  const container = qs('#popover')
  const popover = qs('#tonic-popover-default', container)
  const button = qs('#tonic-popover-default-button', container)

  t.ok(popover)
  t.ok(button)

  const coPopover = qs('.tonic--popover', popover)
  t.ok(coPopover)

  popover.addEventListener('show', event => {
    t.ok(coPopover.classList.contains('tonic--show'), 'the component should be visible')
    popover.hide()
  })

  const divs = coPopover.querySelectorAll('div')
  t.equal(divs.length, 3)

  t.ok(!coPopover.classList.contains('tonic--show'), 'the component should be hidden')

  await sleep(512)
  button.click()

  await sleep(512)
  t.ok(!coPopover.classList.contains('tonic--show'), 'the component should not be visible')
})

function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
