import React from 'react'

import DefaultLayout from '../layouts/default'
import PostList from '../components/example/PostList'
import ScoreCardContainer from '../containers/ScoreCardContainer'

import withData from '../lib/withData'

export default withData(() => (
  <DefaultLayout>
    <ScoreCardContainer />
    <PostList />
  </DefaultLayout>
))
