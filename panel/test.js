import { test } from 'socket:test'
import { html, qs } from '../_test/util.js'

import { Tonic } from '@socketsupply/tonic'
import { Components } from '../index.js'

Components(Tonic)

class PanelInner extends Tonic {
  async click (e) {
    if (e.target.value === 'close') {
      return this.hide()
    }
  }

  render () {
    return this.html`
      <header>Panel Example</header>

      <main>
        <h3>${this.props.title || 'Hello'}
      </main>

      <footer>
        <tonic-button value="close">Close</tonic-button>
      </footer>
    `
  }
}

Tonic.add(PanelInner, 'panel-inner')

document.body.appendChild(html`
<section id="panel">
  <h2>Panel</h2>

  <!-- Panel Default -->
  <div class="test-container">
    <span>Default Panel</span>
    <tonic-button id="example-panel-default-button">
      Open Panel
    </tonic-button>
  </div>

  <tonic-panel id="example-panel-default">
    <panel-inner id="example-panel-inner-default">
    </panel-inner>
  </tonic-panel>

  <!-- Panel w/ Position Left -->
  <div class="test-container">
    <span>position="right"</span>
    <tonic-button id="example-panel-position-button">
      Open Panel
    </tonic-button>
  </div>

  <tonic-panel id="example-panel-position" position="left">
    <panel-inner id="example-panel-inner-position">
    </panel-inner>
  </tonic-panel>

</section>
`)

//
// Panel Default
//
const panelDefaultButton = document.getElementById('example-panel-default-button')
const panelDefault = document.getElementById('example-panel-default')

panelDefaultButton.addEventListener('click', e => panelDefault.show())

//
// Panel w/ Position Left
//
const panelPositionButton = document.getElementById('example-panel-position-button')
const panelPosition = document.getElementById('example-panel-position')

panelPositionButton.addEventListener('click', e => panelPosition.show())

test('opening a panel', async t => {
  const container = qs('#example-panel-default')
  const overlay = qs('.tonic--dialog--overlay')
  const main = qs('main', container)
  const h3 = qs('h3', main)

  t.ok(container, 'container created')
  t.ok(overlay, 'overlay created')
  t.ok(main, 'main found')
  t.ok(h3, 'h3 found')

  t.equal(h3.textContent.trim(), 'Hello', 'should contain "Hello"')

  t.ok(container.hasAttribute('hidden'), 'should be hidden')

  await container.show()

  t.equal(container.hasAttribute('hidden'), false, 'is not hidden')

  await container.hide()

  t.ok(container.hasAttribute('hidden'), 'container is hidden')
})
