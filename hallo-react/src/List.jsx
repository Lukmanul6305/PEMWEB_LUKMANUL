import React,{ Component } from 'react'
import Images from './Image'

class List extends Component{
    render(){
        return (
            <div>
                <ol>
                    <li><Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/></li>
                    <li><Images linkGambar="https://images.unsplash.com/photo-1550547660-d9450f859349"/></li>
                    <li><Images linkGambar="https://images.unsplash.com/photo-1550547660-d9450f859349"/></li>
                    <li><Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/></li>
                </ol>
            </div>
        )
    }
}

export default List