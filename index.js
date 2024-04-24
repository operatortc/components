import Tonic from '@socketsupply/tonic'

import { TonicAccordion, TonicAccordionSection } from './accordion/index.js'
import { TonicBadge } from './badge/index.js'
import { TonicButton } from './button/index.js'
import { TonicChart } from './chart/index.js'
import { TonicCheckbox } from './checkbox/index.js'
import { TonicDialog } from './dialog/index.js'
import { TonicForm } from './form/index.js'
import { TonicIcon } from './icon/index.js'
import { TonicInput } from './input/index.js'
import { TonicLoader } from './loader/index.js'
import { TonicPanel } from './panel/index.js'
import { TonicPopover } from './popover/index.js'
import { TonicProfileImage } from './profile-image/index.js'
import { TonicProgressBar } from './progress-bar/index.js'
import { TonicRange } from './range/index.js'
import { TonicRelativeTime } from './relative-time/index.js'
import { TonicRouter } from './router/index.js'
import { TonicSelect } from './select/index.js'
import { TonicSprite } from './sprite/index.js'
import { TonicSplit, TonicSplitLeft, TonicSplitRight, TonicSplitTop, TonicSplitBottom } from './split/index.js'
import { TonicTabs, TonicTab, TonicTabPanel } from './tabs/index.js'
import { TonicTextarea } from './textarea/index.js'
import { TonicTooltip } from './tooltip/index.js'
import { TonicToasterInline } from './toaster-inline/index.js'
import { TonicToaster } from './toaster/index.js'
import { TonicToggle } from './toggle/index.js'

const version = Tonic.version
const major = version ? version.split('.')[0] : '0'

if (version && parseInt(major, 10) < 12) {
  console.error('Out of date dependency. Try `npm install @socketsupply/tonic@12`.')
  throw new Error('Invalid Tonic version. requires at least v12')
}

let once = false
// For supporting unpkg / dist / jsfiddle.
Components.Tonic = Tonic

//
// An example collection of components.
//
function Components (Tonic) {
  if (once) {
    return
  }
  once = true

  Tonic.add(TonicAccordion, 'tonic-accordion')
  Tonic.add(TonicAccordionSection, 'tonic-accordion-section')
  Tonic.add(TonicBadge, 'tonic-badge')
  Tonic.add(TonicButton, 'tonic-button')
  Tonic.add(TonicChart, 'tonic-chart')
  Tonic.add(TonicCheckbox, 'tonic-checkbox')
  Tonic.add(TonicDialog, 'tonic-dialog')
  Tonic.add(TonicForm, 'tonic-form')
  Tonic.add(TonicInput, 'tonic-input')
  Tonic.add(TonicIcon, 'tonic-icon')
  Tonic.add(TonicLoader, 'tonic-loader')
  Tonic.add(TonicPanel, 'tonic-panel')
  Tonic.add(TonicPopover, 'tonic-popover')
  Tonic.add(TonicProfileImage, 'tonic-profile-image')
  Tonic.add(TonicProgressBar, 'tonic-progress-bar')
  Tonic.add(TonicRange, 'tonic-range')
  Tonic.add(TonicRelativeTime, 'tonic-relative-time')
  Tonic.add(TonicRouter, 'tonic-router')
  Tonic.add(TonicSelect, 'tonic-select')
  Tonic.add(TonicSprite, 'tonic-sprite')
  Tonic.add(TonicSplit, 'tonic-split')
  Tonic.add(TonicSplitLeft, 'tonic-split-left')
  Tonic.add(TonicSplitRight, 'tonic-split-right')
  Tonic.add(TonicSplitTop, 'tonic-split-top')
  Tonic.add(TonicSplitBottom, 'tonic-split-bottom')
  Tonic.add(TonicTabPanel, 'tonic-tab-panel')
  Tonic.add(TonicTab, 'tonic-tab')
  Tonic.add(TonicTabs, 'tonic-tabs')
  Tonic.add(TonicTextarea, 'tonic-textarea')
  Tonic.add(TonicTooltip, 'tonic-tooltip')
  Tonic.add(TonicToasterInline, 'tonic-toaster-inline')
  Tonic.add(TonicToaster, 'tonic-toaster')
  Tonic.add(TonicToggle, 'tonic-toggle')
}

export { Components }
export default Components
