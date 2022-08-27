import React, { useContext } from 'react'
import { withGlob } from '../ContextApi/GlobContext'

function ChildrenTestComponent() {

    return (
    <div><p>as you can see ContextApi is working</p></div>
    )

}

export default withGlob(ChildrenTestComponent)
