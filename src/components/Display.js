import React from 'react'
import { connect } from 'react-redux' 

 const Display = ({count}) => {
    return (
        <div className="items">
            <h2>구독자 수 : {count}</h2>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        count : state.subscribers.count
    }
}



export default connect(mapStateToProps)(Display);