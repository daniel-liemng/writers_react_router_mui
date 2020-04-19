import React from 'react'
import { Link, Route } from 'react-router-dom'

import Writer from './Writer'

const index = ({ match: { url }, writers }) => {
  // console.log(props)

  return (
    <>
      <ul>
        {writers.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route
        exact
        path={url}
        render={() => <h3>Please select a writer from above.</h3>}
      />

      <Route
        path={`${url}/:writerId`}
        render={(props) => (
          <Writer
            {...props}
            {...writers.find(
              (writer) => writer.id === props.match.params.writerId
            )}
          />
        )}
      />
    </>
  )
}

export default index
