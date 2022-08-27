import React from 'react'
import ChildrenTestComponent from './ChildrenTestComponent'
export default function ParentTestComponent() {
    return (

        <div>
            <h1>open ReactDevTools to see Children Component have Global state And Parent Component have not </h1>
            <ChildrenTestComponent/>
        </div>
    )
}
