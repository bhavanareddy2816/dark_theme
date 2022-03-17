import React from 'react'
import moment from "moment";
const Article = ({id, title, date,length , snippet}) => {
    return (
            <div className='article'>
                 <div key={id}>
                  <h3>{title}</h3>
                  <span>{moment(date).format('dddd Do, YYYY')}</span>
                  <span>{length}</span>
                  <p>{snippet}</p>
                </div>
            </div>
        
    )
}

export default Article;
