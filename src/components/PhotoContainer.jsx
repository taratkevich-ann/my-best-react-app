import React from 'react'
import {connect} from 'react-redux'

import {getPhotos} from "../actions/photo";

class Photo extends React.Component {
    componentDidMount() {
        this.props.getPhotos()
    }

    render() {
        const {isLoading, photos} = this.props
        return (
            <div>
                {
                    isLoading ? (
                        <h2>Loading...</h2>
                    ) : (
                        photos.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <img
                                    src={item.url}
                                    alt={`photos-${item.id}`}
                                    style={{
                                        height: 600,
                                        width: 600
                                    }}
                                />
                            </div>
                        ))
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.photoState.isLoading,
    photos: state.photoState.photos
})

const mapDispatchToProps = {
    getPhotos: getPhotos
}

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo)