import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import AlbumsList from './AlbumsList'
import AlbumPhotos from './AlbumPhotos'


function Albums() {

  const {path} = useRouteMatch()


  return (
    <>
      <Switch>
        <Route path={`${path}`} exact>
          <AlbumsList />
        </Route>
        <Route path={`${path}/:id`}>
            <AlbumPhotos />
        </Route>
      </Switch>
    </>
  )
}

export default Albums