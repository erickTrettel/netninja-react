import React from 'react';
import Rainbow from './hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur praesentium
                perferendis, ratione mollitia laborum sint ullam, dolores hic blanditiis ipsa quia
                distinctio nobis, exercitationem quisquam repellendus velit ex architecto. Ipsum.
            </p>
        </div>
    );
}

export default Rainbow(About)
