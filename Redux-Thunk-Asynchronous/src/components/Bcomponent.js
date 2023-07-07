import React from 'react'
import {connect} from 'react-redux'
//This will bind the action to the dispatch
import { bindActionCreators } from 'redux'
//I have imported the action
import {myaction} from '../actions'
class Bcomponent extends React.Component{
    // componentDidMount(){
    //     this.props.myaction()
    // }

    // const dispatch = useDispatch()

    myFun = () => {
        this.props.myaction()
        //dispatch(myaction)
    }


    // const reducers = useSelector((state) => state.reducers)
    //console.log(reducers)}</p>
    render(){
    return(
        <div>
            <button onClick={this.myFun}>CLick Here</button>
            <p>{console.log(this.props.reducers)}</p>
            
        </div>
    )
}
}
//It is used to retrieve the updated state or the 
//existing state from the store
function mapStateToProps(state){
    return{
        reducers: state.reducers
    }
}
//It is used to retrieve/update the action which 
//may invoke a reducer
function mapDispatchToProps(dispatch){
    return bindActionCreators({myaction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Bcomponent)

//export default connect(null,mapDispatchToProps)(Bcomponent)
//export default connect(mapStateToProps,null)(Bcomponent)