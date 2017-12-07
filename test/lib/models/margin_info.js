/* eslint-env mocha */
'use strict'

const assert = require('assert')
const { MarginInfo } = require('../../../lib/models')
const testModel = require('../../helpers/test_model')

describe('MarginInfo model', () => {
  testModel({
    model: MarginInfo,
    orderedFields: [
      'userPL', 'userSwaps', 'symbol', 'tradeableBalance', 'marginBalance',
      'marginNet'
    ]
  })
})
