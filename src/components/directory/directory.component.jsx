import {Component} from "react";
import MenuItem from "../menu-item/menu-item.component";

import('../menu-item/menu-item.component');
import('./directory.style.scss')

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                },
                {
                    id: 4,
                    size:'large',
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                },
                {
                    id: 5,
                    size:'large',
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id,size}) => (
                    <MenuItem key={id} title={title} imgUrl={imageUrl} size={size}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
