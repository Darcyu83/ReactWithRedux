import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux';


const View = ({count, addView}) => {
    const [number, setNumber] = useState(1);
    return (
        <div >
            <p>조회 수 : {count}</p>    
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>addView(number)}>조회하기</button>        
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        count : state.views.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addView: ()=> dispatch(addView())
    }
}

const mapDispatchToProps1 = {
    addView : (number)=> addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps1)(View);
