import React from 'react'
import renderer from 'react-test-renderer'
import '@emotion/jest'

import Button from './index'

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
