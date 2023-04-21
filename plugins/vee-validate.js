import {
  setInteractionMode,
  extend,
  localize,
  configure
} from 'vee-validate'

import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'

// eslint-disable-next-line import/namespace
Object.keys(rules).forEach(rule => extend(rule, rules[rule]))

localize('en', en)
setInteractionMode('lazy')

configure({
  classes: {
    invalid: 'uk-form-danger'
  }
})
